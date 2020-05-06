<template>
  <md-card>
      <md-card-header><md-icon>{{isDecresing ? 'alarm' : 'watch'}}</md-icon>: {{timerid}}</md-card-header>
      <md-card-content>
      <div>
          <table>
              <tr>
                  <td><button v-bind:disabled="isRunning" v-on:click="adaptTime(3600000)"><md-icon>arrow_drop_up</md-icon></button></td>
                  <td/>
                  <td><button v-bind:disabled="isRunning" v-on:click="adaptTime(60000)"><md-icon>arrow_drop_up</md-icon></button></td>
                  <td/>
                  <td><button v-bind:disabled="isRunning" v-on:click="adaptTime(1000)"><md-icon>arrow_drop_up</md-icon></button></td>
                  <td/>
                  <td><button v-bind:disabled="isRunning" v-on:click="resetMillis()"><md-icon>undo</md-icon></button></td>
              </tr>
              <tr class='md-display-2'>
                  <td>{{displayHours}}</td>
                  <td>:</td>
                  <td>{{displayMinutes}}</td>
                  <td>:</td>
                  <td>{{dispalySeconds}}</td>
                  <td>:</td>
                  <td>{{displayMilliseconds}}</td>
              </tr>
              <tr>
                  <td><button v-bind:disabled="isRunning" v-on:click="adaptTime(-3600000)"><md-icon>arrow_drop_down</md-icon></button></td>
                  <td/>
                  <td><button v-bind:disabled="isRunning" v-on:click="adaptTime(-60000)"><md-icon>arrow_drop_down</md-icon></button></td>
                  <td/>
                  <td><button v-bind:disabled="isRunning" v-on:click="adaptTime(-1000)"><md-icon>arrow_drop_down</md-icon></button></td>
              </tr>
          </table>
        
      </div>
      <input type="checkbox" v-model="isDecresing" v-on:change="changeMode" v-bind:disabled="isRunning || startTime"/>Timer
      </md-card-content>
      <md-card-actions>
          <md-button class="md-icon-button md-raised" v-on:click="buttonAction" v-bind:title="buttonMsg">
              <md-icon>{{isRunning ? 'pause' : 'play_circle_outline'}}</md-icon>
          </md-button>
          <md-button class="md-icon-button md-raised" v-on:click="resetTimer" title="Reset">
              <md-icon>undo</md-icon>
          </md-button>
          <md-button class="md-icon-button md-raised" v-on:click="removeTimer" title="Remove">
              <md-icon>close</md-icon>
          </md-button>
      </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    timerid: String,
    isTimer: Boolean,
  },
  data: () => {
    return {
        buttonMsg: 'Start',
        isRunning: false,
        currentTime: 0,
        timeMillis: 0,
        seconds: 60,
        startTime: null,
        displayHours: '00',
        displayMinutes: '00',
        dispalySeconds: '00',
        displayMilliseconds: '000',
        isDecresing: false,
    };
  },
  mounted() {
    console.log("mounted seconds "+this.seconds);
    this.isDecresing = this.isTimer;
    if (this.isDecresing) {
        this.currentTime = this.seconds;
    }
  },
  methods: {
    buttonAction() {
        if (this.isRunning) {
            this.stopTimer();
        } else {
            this.startTimer();
        }
    },
    startTimer() {
        if (this.currentTime===0 && this.isDecresing) {
            this.currentTime = this.seconds;
            this.timeMillis = this.seconds*1000;
        }
        if (this.timeMillis>0) {
            this.currentTime = Math.round(this.timeMillis/1000);
        }
        this.$emit('timer-message',{
                eventTime: new Date(),
                timer: this.timerid,
                action: this.startTime ? "restart timer" : "start timer",
                timerType: this.isDecresing?'timer':'stopwatch',
                time:  this.formatTimeMillis(this.timeMillis),
            });
        this.startTime = new Date().getTime();
        this.isRunning = true;
        this.intervalId = window.setInterval(() => {
            if (this.isDecresing) {
                this.currentTime--;
                if (this.currentTime<=0) {
                    this.stopTimer(true);
                } else {
                    this.setDisplayMS(this.currentTime*1000);
                }
            } else {
                this.currentTime++;
                this.setDisplayMS(this.currentTime*1000);
            }
        },1000);
    },
    stopTimer(isFinish) {
        if (this.intervalId) {
            const id = this.intervalId;
            this.intervalId = null;           
            window.clearInterval(id);
            const stopTime = new Date().getTime();
            const currentTimeMillis = stopTime-this.startTime;
            if (!this.isDecresing) {
                this.timeMillis += currentTimeMillis;
            } else {
                if (this.currentTime===0) {
                    this.timeMillis = 0.0;
                } else {
                    this.timeMillis -= currentTimeMillis;
                }
            }
            this.setDisplayMS(this.timeMillis);
            this.$emit('timer-message',{
                eventTime: new Date(),
                timer: this.timerid,
                action: isFinish ?  "finish timer" : "pause timer",
                timerType: this.isDecresing?'timer':'stopwatch',
                time:  this.formatTimeMillis(this.timeMillis),
            });
        }
        this.isRunning = false;
        this.buttonMsg = 'Start';
    },
    resetTimer() {
        this.stopTimer();
        this.currentTime = this.isDecresing ? this.seconds : 0;
        this.timeMillis = this.isDecresing ? this.seconds*1000 : 0;
        this.startTime = null;
        this.setDisplayMS(this.timeMillis);
    },
    destroyed() {
        if (this.intervalId) {
            const id = this.intervalId;
            this.intervalId = null;           
            window.clearInterval(id);
        }
    },
    setDisplayMS(millis) {
        const hours =  Math.floor((millis/360000000));
        const minutes = Math.floor((millis/60000)%60);
        const seconds =  Math.floor((millis/1000)%60);
        const millisRest = millis % 1000;
        let minutesStr = minutes.toString();
        let secondsStr = seconds.toString();
        let millisStr = millisRest.toString(); 
        let hoursStr = hours.toString();
        if (secondsStr.length<2) {
            secondsStr = "0"+secondsStr;
        }
        if (minutesStr.length<2) {
            minutesStr = "0"+minutesStr;
        }
        if (millisStr.length<3) {
            millisStr = "0".repeat(3-millisStr.length)+millisStr;
        }
        if (hoursStr.length<2) {
            hoursStr = "0"+hoursStr;
        }
        this.displayHours = hoursStr;
        this.displayMinutes = minutesStr;
        this.dispalySeconds = secondsStr;
        this.displayMilliseconds = millisStr;
    },
    formatTimeSec(seconds) {
        const minutes = Math.floor(seconds/60);
        const secondsRest = seconds % 60;
        var minutesStr = minutes.toString();
        var secondsRestStr = secondsRest.toString();
        if (secondsRestStr.length<2) {
            secondsRestStr = "0"+secondsRestStr;
        }
        if (minutesStr.length<2) {
            minutesStr = "0"+minutesStr;
        }
        return minutesStr+":"+secondsRestStr;
    },
    formatTimeMillis(millis) {
        const minutes = Math.floor(millis/60000);
        const seconds =  Math.floor((millis/1000)%60);
        const millisRest = millis % 1000;
        let minutesStr = minutes.toString();
        let secondsStr = seconds.toString();
        let millisStr = millisRest.toString(); 
        if (secondsStr.length<2) {
            secondsStr = "0"+secondsStr;
        }
        if (minutesStr.length<2) {
            minutesStr = "0"+minutesStr;
        }
        if (millisStr.length<3) {
            millisStr = "0".repeat(3-millisStr.length)+millisStr;
        }
        return minutesStr+":"+secondsStr+"."+millisStr;
    },
    adaptTime(diffMS) {
        this.timeMillis+=diffMS;
        this.setDisplayMS(this.timeMillis);
        if (!this.startTime) {
            this.seconds = Math.floor(this.timeMillis/1000);
        }
    },
    resetMillis() {
        this.timeMillis -= this.timeMillis%1000;
        this.setDisplayMS(this.timeMillis);
    },
    changeMode(event) {
        const isChecked = event.target.checked;
        if (!this.startTime) {
            if (isChecked) {
                this.setDisplayMS(this.seconds*1000);
            } else {
                this.setDisplayMS(0);
            }
        }
    },
    removeTimer() {
       this.$emit('timer-remove',Number.parseInt(this.timerid)); 
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>