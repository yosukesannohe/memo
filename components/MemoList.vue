<template>
  <ul class="memo-list">
    <li v-for="memo in $store.getters.reversed">
      <memo-summary :memo="memo" />
    </li>
  </ul>
</template>

<script>
import MemoSummary from '~/components/MemoSummary'

export default {
  props: ['memos'],
  components: {
    MemoSummary
  }
}
</script>

<style lang="scss" scoped>
  .memo-list {
    height: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow: auto;

    > li {
      margin: 0;
      padding: 0;
      border-bottom: 1px solid #ddd;
    }
  }
</style>