<template>
  <div>
    <div v-if="current" class="fixed fixed--center" style="z-index: 3">
      <Vue2InteractDraggable
        v-if="state.isVisibleCurrent"
        :interact-out-of-sight-x-coordinate="200"
        :interact-max-rotation="15"
        :interact-x-threshold="100"
        :interact-y-threshold="100"
        :interact-event-bus-events="state.InteractEventBus"
        interact-block-drag-down
        @draggedRight="emitAndNext('like')"
        @draggedLeft="emitAndNext('deslike')"
        @draggedUp="emitAndNext('super-like')"
        class="rounded-borders card card--one"
      >
        <div style="height: 100%">
          <img
            :src="require(`@src/assets/images/${current.src}`)"
            class="rounded-borders"
          />
          <div class="text">
            <h2>
              {{ current.name }}, <span>{{ current.age }}</span>
            </h2>
          </div>
        </div>
      </Vue2InteractDraggable>
    </div>

    <div
      v-if="next"
      class="rounded-borders card card--two fixed fixed--center"
      style="z-index: 2"
    >
      <div style="height: 100%">
        <img
          :src="require(`@src/assets/images/${next.src}`)"
          class="rounded-borders"
        />
        <div class="text">
          <h2>
            {{ next.name }}, <span>{{ next.age }}</span>
          </h2>
        </div>
      </div>
    </div>

    <div
      v-if="currentIndex + 2 < list.length"
      class="rounded-borders card card--three fixed fixed--center"
      style="z-index: 1"
    >
      <div style="height: 100%"></div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import { Vue2InteractDraggable } from 'vue2-interact';
import { InteractEventBus } from '@src/config/events.js';

const { mapState } = createNamespacedHelpers('cards');

export default {
  name: 'SwipeableCards',
  components: { Vue2InteractDraggable },
  data() {
    return {
      state: {
        InteractEventBus,
        /**
         * Флаг для корректного скрытия текущей карточки во время перехода фокуса с текущей карточки на следующую
         */
        isVisibleCurrent: true
      }
    };
  },
  computed: {
    ...mapState(['list', 'currentIndex', 'isGetCards']),

    /**
     * Текущая карточка
     */
    current() {
      return this.list[this.currentIndex];
    },

    /**
     * Карточка, следующая за текущей
     */
    next() {
      return this.list[this.currentIndex + 1];
    }
  },
  watch: {
    /**
     * Отслеживание, когда нужно сделать запрос на сервер за новыми карточками, и можем ли мы их получить
     */
    currentIndex(index) {
      if (index === this.list.length - 3 && this.isGetCards)
        this.$store.dispatch('cards/getCards');
    }
  },
  methods: {
    /**
     * Обработчик смены первой карточки на вторую
     */
    emitAndNext(event) {
      this.$emit(event, this.currentIndex);
      setTimeout(() => this.state.isVisibleCurrent = false, 200);
      setTimeout(() => {
        this.$store.commit('cards/setCurrentIndex', this.currentIndex + 1);
        this.state.isVisibleCurrent = true
      }, 200);
    }
  }
};
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  &--center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.card {
  width: 80vw;
  height: 60vh;
  color: white;
  img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
  }
  &--one {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14),
      0 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
  &--two {
    box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.2),
      0 10px 14px 1px rgba(0, 0, 0, 0.14), 0 4px 18px 3px rgba(0, 0, 0, 0.12);
  }
  &--three {
    background: rgba(black, 0.8);
    box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2),
      0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12);
  }
  .text {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: black;
    background: rgba(0, 0, 0, 0.5);
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    text-indent: 20px;
    span {
      font-weight: normal;
    }
  }
}

.rounded-borders {
  border-radius: 12px;
}

@keyframes appear {
  from {
    transform: translate(-48%, -48%);
  }
  to {
    transform: translate(-50%, -50%);
  }
}
</style>
