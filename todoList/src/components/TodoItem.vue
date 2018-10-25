<template>
<div class="ulContent">
  <span class="empty1"></span>
  <div class="column">
    <input type="button" class="todo" value="DONE" @click="handleClick" >
    <input type="button" class="todo" value="DEL" @click="handleDELETE" >
    <li class="item" :class="{ done: isActive }"
      style="list-style-type:none;" >{{index}}   {{content}}</li>
  </div>
  <span class="empty1"></span>
</div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  props: ['content', 'index'],
  methods: {
    handleClick() {
      this.isActive = !this.isActive;
      this.$emit('done', this.index);
    },
    handleDELETE() {
      this.$emit('delete', this.index);
    },
  },
};
</script>

<style scoped>

</style>

