<template>
  <div class="navigation">
    <img src="@src/assets/images/note.png" @click="deslike" />
    <img
      src="@src/assets/images/super-like.png"
      class="super-like"
      @click="superLike"
    />
    <img src="@src/assets/images/like.png" @click="like" />
  </div>
</template>
<script>
import { EVENTS } from '@src/config/events.js';
import { InteractEventBus } from 'vue2-interact';
export default {
  name: 'Navigation',
  methods: {
    /**
     * Вызов события лайка - draggedRight
     */
    like() {
      InteractEventBus.$emit(EVENTS.LIKE);
    },

    /**
     * Вызов события дизлайка - draggedLeft
     */
    deslike() {
      InteractEventBus.$emit(EVENTS.DESLIKE);
    },

    /**
     * Вызов события супер лайка - draggedUp
     */
    superLike() {
      InteractEventBus.$emit(EVENTS.SUPERLIKE);
    }
  }
};
</script>
<style lang="scss" scoped>
.navigation {
  position: fixed;
  width: 77vw;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  padding-bottom: 15px;
  justify-content: space-around;
  align-items: center;
  img {
    position: relative;
    width: 50px;
    padding: 0.2rem;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.02),
      0 10px 14px 1px rgba(0, 0, 0, 0.02), 0 4px 18px 3px rgba(0, 0, 0, 0.02);
    cursor: pointer;
    transition: all 0.3s ease;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    &:active {
      transform: translateY(4px);
    }
    &.super-like {
      padding: 0.4rem;
      width: 55px;
    }
  }
}
</style>
