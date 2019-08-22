import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const todoStatuses = {
  ALL: 'all',
  COMPLETED: 'completed',
  UNCOMPLETED: 'uncompleted'
};

export default new Vuex.Store({
  state: {
    todos: [],
    filter: todoStatuses.ALL
  },
  getters: {
    completed(state) {
      const completedTodo = state.todos.filter(item => {
        return item.complete === true;
      }).length;
      return completedTodo;
    },
    uncompleted(state){
      const uncompletedTodo = state.todos.filter(item => {
        return item.complete !== true;
      }).length;
      return uncompletedTodo;
    },
    filteredTodos(state) {
      switch (state.filter) {
        case todoStatuses.COMPLETED:
          return state.todos.filter(todo => todo.complete);
          break;

        case todoStatuses.UNCOMPLETED:
          return state.todos.filter(todo => !todo.complete);
          break;

        default:
          return state.todos
      }
    },
  },
  mutations: {
    addTodo(state, value){
      state.todos = state.todos.concat(value);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    deleteTodo(state, deleted_id){
      state.todos = state.todos.filter(item => {
        return item.id !== deleted_id;
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    getFromLS(state, value){
      state.todos = value;
    },
    completeTodo(state, complete_id){
      state.todos = state.todos.map(item => {
        if(item.id === complete_id){
          item.complete = !item.complete;
        }
        return item;
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    clearCompleted(state){
      state.todos = state.todos.filter(item => {
        return item.complete === false;
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    completeAll(state){
      state.todos = state.todos.map(item => {
        item.complete = true;
        return item;
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    updateTodo(state, value){
      state.todos = state.todos.map(item => {
        if(item.id === value.id){
          item.text = value.text;
        }
        return item;
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    changeFilter(state, value){
      state.filter = value;
    }
  },
  actions: {

  }
})
