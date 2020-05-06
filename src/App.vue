<template>
  <div>
    <md-dialog-confirm
      :md-active.sync="confirm"
      md-title="Confirm deletion"
      md-content=""
      md-confirm-text="Yes"
      md-cancel-text="Cancel"
      @md-cancel="onCancel"
      @md-confirm="onConfirm" />
  <div id="app" class="md-layout md-gutter">
    <div class="md-layout-item">
    <div class="md-title">Multitimer App</div>
    <div>
      <Timer v-for="timer in timers" v-bind:key="timer.id" v-bind:isTimer="timer.isTimer" v-bind:timerid="timer.id.toString()" @timer-message="timerMessage" @timer-remove="removeTimer" />
    </div>
    <md-button class="md-raised" v-on:click="addStopWatch">Add <md-icon>watch</md-icon></md-button>
    <md-button class="md-raised" v-on:click="addTimer">Add <md-icon>alarm</md-icon></md-button>
    </div>
    <div class="md-layout-item md-elevation-2">
    <h2>Log</h2>
    <md-button class="md-icon-button" v-on:click="clearMessages" title="clear messages">
              <md-icon>delete_sweep</md-icon>
    </md-button>
    <md-table>
      <md-table-row>
        <md-table-head>Id</md-table-head>
        <md-table-head>Time</md-table-head>
        <md-table-head>Timer</md-table-head>
        <md-table-head>Action</md-table-head>
        <md-table-head>Type</md-table-head>
        <md-table-head>display</md-table-head>
        <md-table-head>action</md-table-head>
      </md-table-row>
        <md-table-row v-for="(item,index) in timerMessages" v-bind:key="index">
           <md-table-cell>{{index}}</md-table-cell>
           <md-table-cell>{{item.eventTime.toISOString()}}</md-table-cell>
           <md-table-cell>{{item.timer}}</md-table-cell>
           <md-table-cell>{{item.action}}</md-table-cell>
           <md-table-cell>{{item.timerType}}</md-table-cell>
           <md-table-cell>{{item.time}}</md-table-cell>
           <md-table-cell><md-button v-on:click="removeMessage(index)"><md-icon>remove</md-icon></md-button></md-table-cell>
        </md-table-row>
    </md-table>
    </div>
  </div>
  </div>
</template>

<script>
import Timer from './components/Timer.vue'


export default {
  name: 'App',
  data: () => {
    return {
      timerCount: 0,
      timers: [],
      timerMessages: [],
      confirm: false,
    };
  },
  components: {
    Timer,
  },
  methods: {
    addTimer() {
      this.timers.push({id: this.timerCount++, isTimer: true});
    },
    addStopWatch() {
      this.timers.push({id: this.timerCount++, isTimer: false});
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
      const idx = this.timers.findIndex(e => e.id===this.removeTimerId);
      if (idx>=0) {
        this.timers.splice(idx,1);
      }
    },
    onCancel() {
        this.confirm = false;
    },
    clearMessages() {
      this.timerMessages.splice(0,this.timerMessages.length);
    },
    removeMessage(index) {
      this.timerMessages.splice(index,1);
    },


  }
}
</script>

<style>

</style>
