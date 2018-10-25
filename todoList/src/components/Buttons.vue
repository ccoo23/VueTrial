<template>
  <div class="buttons">
    <button class="func all" @click="handleAll">ALL</button>
    <button class="func" @click="handleDone">DONE</button>
    <button class="func" @click="handleUndone">UNDONE</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  // props: ['content', 'index'],
  methods: {
    handleAll() {
      this.isActive = !this.isActive;
    },
    handleDone() {
      this.$emit('done', this.index);
    },
    handleUndone() {

    },
  },
};
</script>

<style scoped>
  @import '../assets/styles/main.css';
</style>
