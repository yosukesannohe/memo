<template>
  <memo-header class="memo-header">
    <h1 class="memo-header__heading">とても簡素なメモ</h1>

    <button type="button" class="memo-header__add" @click.prevent="onClickAdd">追加する</button>
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
</style>

<script>
  export default {
    methods: {
      onClickAdd () {
        this.$store.commit('add')
      }
    }
  }
</script>