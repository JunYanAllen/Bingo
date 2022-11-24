<template>
  <!-- <LotteryGame></LotteryGame> -->
  <NewBingoGame></NewBingoGame>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LotteryGame from './components/LotteryGame.vue'
import NewBingoGame from './components/NewBingoGame.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // LotteryGame
    NewBingoGame
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
