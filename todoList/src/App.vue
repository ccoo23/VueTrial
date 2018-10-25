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
        @delete="handleDelete"
        @done="handleDone">
      </todo-item>
    </ul>
    <todo-buttons></todo-buttons>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem';
import Header from './components/Header';
import Buttons from './components/Buttons';

/* eslint-disable */
export default {
  components: {
    'todo-item': TodoItem,
    'todo-header': Header,
    'todo-buttons': Buttons,
  },
  data() {
    //  data是一个函数，返回值是数据,要写返回对象
    return {
      inputValue: '',
      list: [],
      listAll: [],
      listDone: [],
      listUndone: [],
    };
  },
  methods: {
    handleSubmit() {
      if (this.inputValue === '') {
        alert('please input something');
      } else {
        this.listAll.push(this.inputValue);
        this.list.push(this.inputValue);
      }
      this.inputValue = '';
    },
    handleDelete(index) {
      this.listAll.splice(index, 1);
      // this.list.splice(index, 1);
      this.list = this.listAll;
    },
    pressEnter() {
      if (this.inputValue === '') {
        alert('please input something');
      } else {
        this.list.push(this.inputValue);
      }
      this.inputValue = '';
    },
    handleDone(index) {
      console.log(this.listAll);
      if (this.listDone.indexOf('this.listAll[index]') === -1) {
        this.listDone.push(this.listAll[index]);
      }
    },
  },
};
</script>

<style>
  @import './assets/styles/main.css';
</style>
