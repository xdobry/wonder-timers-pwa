<template>
  <v-app>
    <v-main>
    <v-dialog v-model="confirm" persistent max-width="400">
    <v-card>
      <v-card-title>Confirm deletion</v-card-title>

      <v-card-text>
        Are you sure you want to delete this item?
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="onCancel">Cancel</v-btn>
        <v-btn color="primary" text @click="onConfirm">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
    <v-container>
        <h2 class="text-h6">Multitimer App</h2>
        Programmed by xdobry using <a href="https://vuejs.org/">vue</a> and <a href="https://material-ui.com/">material-ui</a> <a href="https://github.com/xdobry/wonder-timers-pwa">(source code on github)</a>
        <v-row>
          <v-col cols="6">
            <Timer
              v-for="timer in timers"
              v-bind:key="timer.id"
              v-bind:isTimer="timer.isTimer"
              v-bind:timerid="timer.id.toString()"
              @timer-message="timerMessage"
              @timer-remove="removeTimer"
            />
            <v-btn v-on:click="addStopWatch" title="Add Stopwatch">
              Add
              <v-icon icon="mdi-watch"/>
            </v-btn>
            <v-btn v-on:click="addTimer" title="Add Timer">
              Add
              <v-icon icon="mdi-alarm"/>
            </v-btn>
          </v-col>
          <v-col cols="6">
            <h2>Log</h2>
            <v-btn class="md-icon-button" v-on:click="clearMessages" title="clear messages">
              <v-icon>mdi-delete-sweep</v-icon>
            </v-btn>
            <v-table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Time</th>
                  <th>Timer</th>
                  <th>Action</th>
                  <th>Type</th>
                  <th>display</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in timerMessages" v-bind:key="index">
                  <td>{{index}}</td>
                  <td>{{item.eventTime.toISOString()}}</td>
                  <td>{{item.timer}}</td>
                  <td>{{item.action}}</td>
                  <td>{{item.timerType}}</td>
                  <td>{{item.time}}</td>
                  <td>
                    <v-btn v-on:click="removeMessage(index)">
                      <md-icon>remove</md-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
      </v-row>
    </v-container>
   </v-main>
  </v-app>
</template>

<script>
import Timer from "./components/Timer.vue";

export default {
  name: "App",
  data: () => {
    return {
      timerCount: 0,
      timers: [],
      timerMessages: [],
      confirm: false
    };
  },
  components: {
    Timer
  },
  methods: {
    addTimer() {
      this.timers.push({ id: this.timerCount++, isTimer: true });
    },
    addStopWatch() {
      this.timers.push({ id: this.timerCount++, isTimer: false });
    },
    timerMessage(msg) {
      this.timerMessages.push(msg);
    },
    removeTimer(timerId) {
      this.removeTimerId = timerId;
      this.confirm = true;
    },
    onConfirm() {
      this.confirm = false;
      const idx = this.timers.findIndex(e => e.id === this.removeTimerId);
      if (idx >= 0) {
        this.timers.splice(idx, 1);
      }
    },
    onCancel() {
      this.confirm = false;
    },
    clearMessages() {
      this.timerMessages.splice(0, this.timerMessages.length);
    },
    removeMessage(index) {
      this.timerMessages.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
