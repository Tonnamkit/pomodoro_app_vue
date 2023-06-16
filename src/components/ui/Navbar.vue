<template>
  <div id="nav_contaniner">
    <navbtn @click="setMode('pomodoro')" btnTitle="Pomodoro"></navbtn>
    <navbtn @click="setMode('short-break')" btnTitle="Short Break"></navbtn>
    <navbtn @click="setMode('long-break')" btnTitle="Long Break"></navbtn>
  </div>
</template>

<script>
import navbtn from './button/navbtn.vue';
export default {
  name: "nav_bar",
  components:{
    navbtn
  },
  methods: {
    setMode(mode) {
      this.$emit('mode-selected', mode);
      console.log(mode)
    }
  }
};
</script>

<style scoped>
#nav_contaniner{
  display: flex;
  flex-direction: row;
  justify-content: center;
  
}
#nav_contaniner > div{
  margin: 20px;
}
</style>