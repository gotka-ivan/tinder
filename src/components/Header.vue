<template>
  <div class="header">
    <Reload :size="22" @click="$store.commit('cards/setCurrentIndex', 0)" />
    <div>Tinder</div>
    <Menu :size="22" />
  </div>
</template>
<script>
import Reload from 'vue-material-design-icons/Reload.vue';
import Menu from 'vue-material-design-icons/Menu.vue';

export default {
  name: 'Header',
  components: {
    Reload,
    Menu
  }
};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  height: 60vh;
  z-index: 0;
  top: 0;
  left: 0;
  color: white;
  text-align: center;
  font-style: italic;
  font-family: 'Engagement', cursive;
  background: #12116b;
  background: -webkit-linear-gradient(to top, #22adef, #12116b);
  background: linear-gradient(to top, #22adef, #12116b);
  clip-path: polygon(0 1%, 100% 0%, 100% 76%, 0 89%);
  display: flex;
  justify-content: space-between;
  div {
    display: block;
    font-size: 4rem;
    padding-top: 2rem;
    text-shadow: 1px 1px 1px #000000;
  }
  span {
    padding: 24px;
    height: 20px;
    cursor: pointer;
  }
}
</style>
