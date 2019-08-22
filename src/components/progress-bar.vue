<template>
  <div class="progress-bar">
    <h3 class="progress-bar__title">Progress</h3>
    <radial-progress-bar :diameter="150"
                         :startColor="'#3d52b1'"
                         :stopColor="'#3d52b1'"
                         :innerStrokeColor="'#e0e0e0'"
                         :animateSpeed="400"
                         :completed-steps="completed"
                         :total-steps="total">
      <p>{{ completedPercent }} %</p>
    </radial-progress-bar>
    <button class="progress-bar__btn" @click="completeAll">Complete All</button>
  </div>
</template>

<script>
import store from '../store'
import RadialProgressBar from 'vue-radial-progress'

export default {
  name: 'progress-bar',
  components: {
    RadialProgressBar
  },
  computed: {
    completed () {
      return store.getters.completed
    },
    total () {
      return store.state.todos.length || 1
    },
    completedPercent () {
      return parseInt(this.completed / this.total * 100)
    }
  },
  methods: {
    completeAll () {
      store.commit('completeAll')
    }
  }
}
</script>

<style scoped lang="scss">
  .progress-bar {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    &__btn {
      text-transform: uppercase;
      font-size: 16px;
      font-weight: bold;
      color: #3d52b1;
      border: none;
      outline: none;
      background-color: #fff;
      cursor: pointer;
      margin-top: 15px;

      &:hover {
        color: #2b43b1;
      }
    }
  }
</style>
