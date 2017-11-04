<template>
  <memo-header class="memo-header">
    <h1 class="memo-header__heading">とても簡素なメモ</h1>

    <nuxt-link to="/" class="memo-header__add">追加する</nuxt-link>
  </memo-header>
</template>

<style lang="scss" scoped>
  .memo-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 20px;
    background: #2b2b2b
  }

  .memo-header__heading {
    color: #fff;
    font-size: 16px;
  }

  .memo-header__add {
    display: inline-block;
    padding: 5px 10px;
    background: #fff;
    color: inherit;
  }
</style>

<script>
  export default {
    methods: {
      onClickAdd () {
        this.$store.commit('add')

        this.$emit('add')
      }
    }
  }
</script>