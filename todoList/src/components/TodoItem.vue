<template>
    <li class="item" style="list-style-type:none;" >
      <input type="button" class="todo" @click="handleClick" >
      {{content}} {{index}}</li>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods: {
    handleClick() {
      this.$emit('delete', this.index);
    },
  },
};
</script>

<style scoped>

</style>

