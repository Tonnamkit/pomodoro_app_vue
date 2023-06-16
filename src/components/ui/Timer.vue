<template>
  <div class="timer">
    <div class="timer-circle" :style="circleStyle">
      <CircleProgress :progress="progress" />
      <div class="timer-label">{{ formatTime(remainingTime) }}</div>
    </div>
    <div class="control">
      <button class="start-btn" @click="startTimer()">
        {{ Textbtn }}
      </button>
      <button class="pause-btn" @click="pauseTimer()">Pause</button>
      <button class="reset-btn" @click="resetTimer()">Reset</button>
    </div>
  </div>
</template>

<script>
import CircleProgress from "../CircleProgress.vue";
import nav_bar from "./Navbar.vue";

export default {
  name: "Timer_UI",
  props: ["mode"],
  components() {
    nav_bar, CircleProgress;
  },
  data() {
    return {
      duration: 1500,
      remainingTime: 1500,
      timerInterval: null,
      Textbtn: "Start",
      isTimerunning: false,
    };
  },
  watch: {
    mode(newMode) {
      this.checkMode(newMode);
    },
  },
  methods: {
    startTimer() {
      if (!this.isTimerunning) {
        this.isTimerunning = true;
        this.timerInterval = setInterval(() => {
          this.remainingTime--;
          if (this.remainingTime === 0) {
            clearInterval(this.timerInterval);
            this.isTimerunning = false;
          }
        }, 1000);
      }
    },

    pauseTimer() {
      this.isTimerunning = false;
      clearInterval(this.timerInterval);
    },

    resetTimer() {
      clearInterval(this.timerInterval);
      this.isTimerunning = false;
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
    progress() {
      return 1 - this.remainingTime / this.duration;
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
.start-btn,
.pause-btn,
.reset-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.start-btn:hover,
.pause-btn:hover,
.reset-btn:hover {
  background-color: #45a049;
}

.start-btn:focus,
.pause-btn:focus,
.reset-btn:focus {
  outline: none;
}

.start-btn:active,
.pause-btn:active,
.reset-btn:active {
  background-color: #3e8e41;
}
.control button:not(:last-child) {
  margin-right: 8px;
}
</style>