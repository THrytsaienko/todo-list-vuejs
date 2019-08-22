<template>
  <div class="todo-list">
    <div v-for="todo in todos">
      <TodoItem :key="todo.id" :todo="todo"></TodoItem>
    </div>
    <div class="todo-list__buttons">
      <FilterButton @clicked="clickedFilter('all')" :active="filter === 'all' ? true : false"
                    buttonName="All"
                    class="todo-list__btn"></FilterButton>
      <FilterButton @clicked="clickedFilter('completed')" :active="filter === 'completed' ? true : false"
                    buttonName="Completed"
                    class="todo-list__btn"></FilterButton>
      <FilterButton @clicked="clickedFilter('uncompleted')" :active="filter === 'uncompleted' ? true : false"
                    buttonName="Uncompleted"
                    class="todo-list__btn"></FilterButton>
    </div>
  </div>
</template>

<script>
import store from '../store'
import TodoItem from './todo-item'
import FilterButton from './filter-btn'
export default {
  name: 'todo-list',
  components: {
    TodoItem,
    FilterButton
  },
  computed: {
    todos () {
      return store.getters.filteredTodos
    },
    filter () {
      return store.state.filter
    }
  },
  mounted () {
    const todosFromLS = JSON.parse(localStorage.getItem('todos'))
    if (todosFromLS === null) {
      return
    }
    store.commit('getFromLS', todosFromLS)
  },
  methods: {
    clickedFilter (type) {
      store.commit('changeFilter', type)
      return type
    }
  }
}
</script>

<style scoped lang="scss">
  .todo-list {
    width: 100%;
    max-width: 600px;

    &__buttons {
      display: flex;
      justify-content: space-around;
      margin-top: 50px;

      @media screen and (max-width: 550px)  {
        flex-direction: column;
        max-width: 120px;
        align-items: center;
        margin: 0 auto;
      }
    }

    &__btn {
      margin-bottom: 0;

      @media screen and (max-width: 550px)  {
        margin-bottom: 15px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
