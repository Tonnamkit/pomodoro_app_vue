<template>
  <div id="app">
    <Title />
    <navbar @mode-selected="handleModeSelected"></navbar>
    <Timer :mode="selectedMode" />
  </div>
</template>
// <font-awesome-icon :icon="['far', 'play']" /> <font-awesome-icon :icon="['far', 'arrow-rotate-left']" />

<script>
import Title from './components/ui/Title.vue';
import Timer from './components/ui/Timer.vue';
import Navbar from './components/ui/Navbar.vue';

export default {
  name: "App",
  data() {
    return {
      selectedMode: 'pomodoro',
    }
  },
  components: {Title,Timer,Navbar},
  methods: {
    handleModeSelected(mode) {
      this.selectedMode = mode;
  },
}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");

#app {
  font-family: "Roboto Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}



</style>
