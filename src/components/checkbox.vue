<template>
    <input type="checkbox" class="checkbox" @change="change" v-model="checkbox"
           :checked="checkbox ? true : false">
</template>

<script>
export default {
  name: 'checkbox',
  props: ['checked'],
  data () {
    return {
      checkbox: false
    }
  },
  watch: {
    checked (newVal) {
      this.checkbox = newVal
    }
  },
  mounted () {
    this.checkbox = this.checked
  },
  methods: {
    change () {
      this.checkbox = !!this.checkbox
      this.$emit('change', this.checkbox)
    }
  }
}
</script>

<style scoped lang="scss">
    .checkbox {
        cursor: pointer;
    }
</style>
