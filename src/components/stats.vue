<template>
  <div class="stats">
    <h3 class="stats__title">Stats</h3>
    <Stats-item text="Completed Todos" :counter="completed"></Stats-item>
    <Stats-item text="Uncompleted Todos" :counter="uncompleted"></Stats-item>

    <button class="stats__btn" @click="clearAll">Clear Completed</button>
  </div>
</template>

<script>
import StatsItem from './stats-item'
export default {
  name: 'stats',
  components: {
    StatsItem
  },
  computed: {
    completed () {
      return this.$store.getters.completed
    },
    uncompleted () {
      return this.$store.getters.uncompleted
    }
  },
  methods: {
    clearAll () {
      this.$store.commit('clearCompleted')
    }
  }
}
</script>

<style scoped lang="scss">
  .stats {
    &__title {
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    &__btn {
      text-transform: uppercase;
      font-size: 16px;
      font-weight: bold;
      color: #d86c77;
      border: none;
      outline: none;
      background-color: #fff;
      cursor: pointer;
      margin-top: 15px;

      &:hover {
        color: #d82956;
      }
    }
  }
</style>
