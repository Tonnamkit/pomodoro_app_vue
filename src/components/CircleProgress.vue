<template>
  <div class="circle-progress">
    <div class="circle" :style="circleStyle">
      <div class="progress" :style="progressStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CircleProgress",
  props: {
    progress: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    circleStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        borderRadius: "50%",
        border: "2px solid #ccc",
        position: "relative"
      };
    },
    progressStyle() {
      const offset = this.calculateOffset();
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        borderRadius: "50%",
        background: "green",
        position: "absolute",
        top: 0,
        left: 0,
        clipPath: `polygon(50% 0, 100% 0, 100% 100%, ${offset.x}% 100%, ${offset.y}% ${offset.y}%)`
      };
    },
    size() {
      return 100; // Adjust the size of the circle as needed
    }
  },
  methods: {
    calculateOffset() {
      const circumference = 2 * Math.PI * (this.size / 2);
      const progressOffset = (1 - this.progress) * circumference;
      const x = this.size / 2 + Math.cos((Math.PI / 180) * 270) * (this.size / 2);
      const y = this.size / 2 + Math.sin((Math.PI / 180) * 270) * (this.size / 2);
      return { x, y, circumference, progressOffset };
    }
  }
};
</script>

<style scoped>
.circle-progress {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  position: relative;
}

.progress {
  transition: all 0.3s ease-in-out;
}
</style>
