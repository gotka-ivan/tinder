<template>
  <div class="container">
    <Header />
    <SwipeableCards />
    <Navigation />
  </div>
</template>
<script>
import SwipeableCards from '@src/components/SwipeableCards.vue';
import Header from '@src/components/Header.vue';
import Navigation from '@src/components/Navigation';
export default {
  name: 'Main',
  components: {
    Header,
    SwipeableCards,
    Navigation
  }
};
</script>
<style lang="scss" scoped>
.container {
  background: #c5dae8;
  width: 100%;
  height: 100vh;
}
</style>
