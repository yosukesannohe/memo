<template>
  <main>
    <div class="content">
      <div class="content__list">
        <memo-list v-if="$store.state.memos.length" />
        <p style="padding: 10px;" v-else>メモがありません</p>
      </div>
      <div class="content__editor">
        <memo-editor />
      </div>
    </div>
  </main>
</template>

<script>
import MemoList from '~/components/MemoList'
import MemoEditor from '~/components/MemoEditor'

export default {
  components: {
    MemoList,
    MemoEditor
  },
  mounted () {
    this.$store.dispatch('load')
  }
}
</script>

<style lang="scss">
  .content {
    display: flex;
    height: calc(100vh - 60px);
  }

  .content__list {
    min-width: 300px;
    height: 100%;
    flex-basis: 20%;
    
    border-right: 1px solid #ddd;
  }

  .content__editor {
    flex-grow: 1;
  }
</style>
