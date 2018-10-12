<template>
  <div class="main">
    <todo-header></todo-header>
    <div class="content"  @keyup.enter="pressEnter" >
      <span class="empty"></span>
      <input class="input" v-model="inputValue"/>
      <input type="submit" class="submit" @click="handleSubmit" />
      <span class="empty"></span>
    </div>
    <ul class="list">
      <todo-item v-for="(item, index) of list"
        :key="index"
        :content="item"
        :index="index"
        @delete="handleDelete">
      </todo-item>
    </ul>
    <todo-buttons></todo-buttons>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem';
import Header from './components/Header';
import Buttons from './components/Buttons';

export default {
  components: {
    'todo-item': TodoItem,
    'todo-header': Header,
    'todo-buttons': Buttons,
  },
  data() {
    //  data是一个函数，返回值是数据,要这么写
    return {
      inputValue: '',
      list: [],
    };
  },
  methods: {
    handleSubmit() {
      if (this.inputValue === '') {
        alert('please input something');
      } else {
        this.list.push(this.inputValue);
      }
      this.inputValue = '';
    },
    handleDelete(index) {
      this.list.splice(index, 1);
    },
    pressEnter() {
      if (this.inputValue === '') {
        alert('please input something');
      } else {
        this.list.push(this.inputValue);
      }
      this.inputValue = '';
    },
  },
};
</script>

<style>
  @import './assets/styles/main.css';
</style>
