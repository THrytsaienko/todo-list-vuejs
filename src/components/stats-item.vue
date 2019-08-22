<template>
    <div class="stats-item">
      <p class="stats-item__text">{{text}}:</p>
      <p class="stats-item__counter">{{counter}}</p>
    </div>
</template>

<script>
export default {
  name: 'stats-item',
  props: ['text', 'counter']
}
</script>

<style scoped lang="scss">
  .stats-item {
    border: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    &__counter {
      color: #2b43b1;
      font-weight: bold;
    }
  }
</style>
