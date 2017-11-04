<template>
  <nuxt-link :to="id" class="memo-summary">
    <div class="memo-summary__date">{{ updated_at }}</div>
    <div class="memo-summary__content">{{ content }}</div>
  </nuxt-link>
</template>

<script>
import truncate from 'lodash.truncate'
import moment from 'moment'

export default {
  props: ['memo'],
  computed: {
    id () {
      return this.memo.id
    },
    updated_at () {
      return moment(this.memo.updated_at).format('YYYY.M.D H:mm')
    },
    content () {
      return truncate(this.memo.content, {
        length: 30,
        omission: '...'
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