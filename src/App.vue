<template>
  <div id="app">
    <div class="container">
      <div class="stats-block">
        <Stats></Stats>
      </div>
      <div class="todo-block">
        <h2 class="title">Todo List</h2>
        <div class="add-todo">
          <TodoAdd></TodoAdd>
        </div>
        <TodoList></TodoList>
      </div>
      <div class="progress-block">
        <ProgressBar></ProgressBar>
      </div>
    </div>
  </div>
</template>

<script>
import TodoAdd from './components/todo-add'
import TodoList from './components/todo-list'
import Stats from './components/stats'
import ProgressBar from './components/progress-bar'

export default {
  name: 'app',
  components: {
    TodoAdd,
    TodoList,
    Stats,
    ProgressBar
  }
}
</script>

<style scoped lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px 0;
    overflow-x: hidden;
    width: 100%;
  }

  .container {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 960px)  {
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: 550px)  {
      padding: 0 15px;
    }
  }

  .add-todo {
    margin-bottom: 50px;
  }

  .stats-block, .progress-block {
    width: 20%;
    @media screen and (max-width: 960px)  {
      width: 70%;
      order: 2;
      margin-top: 60px;
    }
  }

  .todo-block {
    width: 50%;
    max-width: 600px;
    margin: 0 auto;

    @media screen and (max-width: 960px)  {
      width: 80%;
      order: 1;
    }

    @media screen and (max-width: 550px)  {
      width: 100%;
    }
  }

  .title {
    margin-bottom: 30px;
  }
</style>

<style>
  *, *:before, *:after {
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
  }
</style>
