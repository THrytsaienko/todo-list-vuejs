<template>
  <div class="todo">
    <form id="form" class="todo__form">
      <div class="todo__input-field">
        <p v-if="error" class="todo__error">Todo can not be empty!</p>
        <input type="text" name="task" class="todo__input" v-model="todo" @focus="focus"/>
        <label class="todo__label">New Todo</label>
      </div>
      <button @click.prevent="addTodo()" class="todo__btn">Add to list</button>
    </form>
  </div>
</template>

<script>
import uuid from 'uuid-v4'

export default {
  name: 'todo-add',
  data () {
    return {
      todo: '',
      error: false
    }
  },
  methods: {
    addTodo () {
      if (this.todo.length === 0) {
        this.error = true
        setTimeout(() => {
          this.error = false
        }, 5000)
      } else {
        this.$store.commit('addTodo', { id: uuid(), text: this.todo, complete: false, edit: false })
        this.todo = ''
      }
    },
    focus () {
      this.error = false
    }
  }
}
</script>

<style scoped lang="scss">
  .todo {
    width: 100%;

    &__form {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 450px)  {
        flex-direction: column;
      }
    }

    &__btn {
      text-transform: uppercase;
      color: #fff;
      background-color: #3d52b1;
      border: none;
      outline: none;
      min-width: 150px;
      padding: 15px;
      border-radius: 3px;
      cursor: pointer;
      margin-left: 30px;

      @media screen and (max-width: 450px)  {
        width: 100%;
        max-width: 200px;
        margin: 0 auto;
      }

      &:hover {
        background-color: #2b43b1;
      }
    }

    &__input {
      width: 100%;
      padding: 15px 0;
      text-indent: 20px;
      border: none;
      outline: none;
      color: #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      margin-bottom: 0;

      @media screen and (max-width: 450px)  {
        margin-bottom: 35px;
      }

      &:focus {
        color: #3d52b1;
        border-bottom: 1px solid #3d52b1;
      }

      &:focus ~ .todo__label {
        top: -20px;
        left: 0;
        font-size: 12px;
        color: #3d52b1;
      }
    }

    &__label.top {
      top: -20px;
      left: 0;
      font-size: 12px;
    }

    &__input-field {
      position: relative;
      width: 100%;
    }

    &__label {
      font-size: 15px;
      position: absolute;
      pointer-events: none;
      left: 10px;
      top: 10px;
      transition: 300ms ease all;
      color: #e0e0e0;
    }

    &__error {
      font-size: 12px;
      color: red;
      margin-top: 5px;
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      transition: .3s;

      @media screen and (max-width: 450px)  {
        bottom: 15px;
      }
    }
  }
</style>
