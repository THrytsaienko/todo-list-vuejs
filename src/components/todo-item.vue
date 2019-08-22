<template>
  <div class="todo-item">
    <div class="todo-item__data">
      <div class="todo-item__checkbox">
        <Checkbox @change="completeTodo(todo.id)" :checked="complete"></Checkbox>
      </div>
      <p class="todo-item__text" :contenteditable="todo.edit && !todo.complete ? true : false"
         @blur="updateTodo"
         @keydown.enter.prevent
         :class="{'complete' : todo.complete, 'editable' : todo.edit === true && !todo.complete}">
        {{todo.text}}
      </p>
    </div>

    <div class="todo-item__buttons">
      <div class="todo-item__button" @click="editTodo(todo)" v-if="!todo.edit || todo.complete">
        <div class="todo-item__image">
          <img src="../assets/edit.svg" alt="Edit" class="todo-item__icon">
        </div>
      </div>

      <div class="todo-item__button" @click="updateTodo" v-else>
        <div class="todo-item__image">
          <img src="../assets/save.svg" alt="Edit" class="todo-item__icon">
        </div>
      </div>

      <div class="todo-item__button" @click="deleteTodo(todo.id)">
        <div class="todo-item__image">
          <img src="../assets/delete.svg" alt="Delete" class="todo-item__icon">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import Checkbox from './checkbox'

export default {
  name: 'todo-item',
  components: {
    Checkbox
  },
  data () {
    return {
      textTodo: ''
    }
  },
  props: ['todo'],
  computed: {
    complete () {
      return this.todo.complete
    }
  },
  methods: {
    editTodo () {
      this.todo.edit = true
    },
    deleteTodo (id) {
      store.commit('deleteTodo', id)
    },
    completeTodo (id) {
      store.commit('completeTodo', id)
    },
    updateTodo (e) {
      this.textTodo = e.target.innerText
      this.todo.text = this.textTodo
      this.todo.edit = false
      store.commit('updateTodo', this.todo)
    }
  }
}
</script>

<style scoped lang="scss">
  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    &__checkbox {
      margin-right: 20px;
      cursor: pointer;
    }

    &__data {
      display: flex;
      align-items: center;
      width: 80%;
    }

    &__buttons {
      display: flex;
      justify-self: flex-end;
    }

    &__image {
      width: 15px;
      height: 15px;
      margin-left: 20px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        transform: scale(1.3);
      }
    }

    &__icon {
      width: 100%;
    }

    &__text {
      width: 100%;
      text-align: left;
      padding: 5px 0;
      color: #394561;
      word-wrap: break-word;
    }

    &__text.complete {
      text-decoration: line-through;
      color: #e0e0e0;
    }

    &__text.editable {
      border: none;
      background-color: #f7f7f7;

      &:focus {
        border: none;
        outline: none;
      }
    }
  }
</style>
