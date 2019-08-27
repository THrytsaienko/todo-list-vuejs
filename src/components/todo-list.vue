<template>
  <div class="todo-list">
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo"></TodoItem>
    </div>
    <div class="todo-list__buttons">
      <FilterButton v-for="todoFilter in filters"
                    :key="todoFilter"
                    :buttonName="todoFilter"
                    @clicked="clickedFilter(todoFilter)"
                    :active="filter === todoFilter">
      </FilterButton>
    </div>
  </div>
</template>

<script>
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
      return this.$store.getters.filteredTodos
    },
    filter () {
      return this.$store.state.filter
    },
    filters () {
      return ['all', 'completed', 'uncompleted']
    }
  },
  created () {
    const todosFromLS = JSON.parse(localStorage.getItem('todos'))
    if (todosFromLS === null) {
      return
    }
    this.$store.commit('getFromLS', todosFromLS)
  },
  methods: {
    clickedFilter (type) {
      this.$store.commit('changeFilter', type)
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
        &:not(:last-child) {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
