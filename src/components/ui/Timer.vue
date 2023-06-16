<template>
  <div class="timer">
    <div class="timer-circle" :style="circleStyle">
      <div class="timer-label">{{ formatTime(remainingTime) }}</div>
    </div>
    <div class="control">
      <button class="start" @click="startTimer()">Start</button>
      <button class="pause" @click="pauseTimer()">Pause</button>
      <button class="reset" @click="resetTimer()">Reset</button>
    </div>
  </div>
</template>

<script>
import nav_bar from "./Navbar.vue";
export default {
  name: "Timer_UI",
  props: ["mode"],
  components() {
    nav_bar;
  },
  data() {
    return {
      duration: 1500,
      remainingTime: 1500,
      timerInterval: null,
    };
  },
  watch: {
    mode(newMode) {
      this.checkMode(newMode);
    },
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => {
        this.remainingTime--;
        if (this.remainingTime === 0) {
          // Handle Pomodoro session completion
          clearInterval(this.timerInterval);
        }
      }, 1000);
    },

    pauseTimer() {
      clearInterval(this.timerInterval);
    },

    resetTimer() {
      clearInterval(this.timerInterval);
      this.remainingTime = this.duration;
    },

    checkMode(mode) {
      switch (mode) {
        case "pomodoro":
          this.duration = 1500;
          this.remainingTime = 1500;
          break;

        case "short-break":
          this.duration = 300;
          this.remainingTime = 300;
          break;
        case "long-break":
          this.duration = 900;
          this.remainingTime = 900;
          break;
        default:
          break;
      }
    },
  },
  computed: {
    formatTime() {
      return (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes} : ${String(seconds).padStart(2, "0")}`;
      };
    },
  },
};
</script>

<style scoped>
.timer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.timer-circle {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 10px solid #ccc;
  position: relative;
}

.timer-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 42px;
}

.control {
  margin: 16px;
}
</style>