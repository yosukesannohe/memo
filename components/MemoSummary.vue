<template>
  <a href="#" class="memo-summary" @click.prevent="onClick">
    <div class="memo-summary__date">{{ updated_at }}</div>
    <div class="memo-summary__content">{{ content }}</div>
  </a>
</template>

<script>
import truncate from 'lodash.truncate'
import moment from 'moment'

export default {
  props: ['memo'],
  computed: {
    updated_at () {
      return moment(this.memo.updated_at).format('YYYY.M.D H:mm')
    },
    content () {
      return truncate(this.memo.content, {
        length: 30,
        omission: '...'
      })
    }
  },
  methods: {
    onClick () {
      this.$store.commit('select', {
        id: this.memo.id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .memo-summary {
    display: block;
    padding: 10px;
    color: inherit;
    text-decoration: none;
  }

  .memo-summary__date {
    margin: 0 0 10px;
    font-size: 14px;
    color: #999;
  }

  .memo-summary__content {
    font-weight: bold;
  }
</style>