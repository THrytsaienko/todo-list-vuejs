<template>
    <input type="checkbox" class="checkbox" @change="change" :checked="checked">
</template>

<script>
export default {
  name: 'checkbox',
  props: ['checked'],
  methods: {
    change () {
      this.$emit('change', this.checked)
    }
  }
}
</script>

<style scoped lang="scss">
    .checkbox {
        cursor: pointer;
    }
</style>
