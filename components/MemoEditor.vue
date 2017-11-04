<template>
  <form class="memo-editor" @submit.prevent="onSubmit">
    <textarea class="memo-editor__textarea" placeholder="なにか書いてください" v-model="memo" ref="textarea"></textarea>
    <button type="submit" class="memo-editor__save">保存する</button> 
    <button type="button" class="memo-editor__remove" @click="onRemove">削除する</button>
  </form>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      content: ''
    }
  },
  computed: {
    memo: {
      get () {
        let memo = this.$store.getters.memo

        return memo ? memo.content : ''
      },
      set (value) {
        this.content = value
      }
    }
  },
  mounted () {
    this.$refs.textarea.focus()
    // console.log(this.$store.state.route.params)
  },
  methods: {
    save (content) {
      let updatedAt = moment().toISOString()

      this.$store.commit('save', {
        updated_at: updatedAt,
        content: content,
        router: this.$router
      })
    },
    onSubmit () {
      this.save(this.content)
    },
    onRemove () {
      this.$store.commit('remove', {
        router: this.$router
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .memo-editor {
    height: 100%;
    padding: 10px;
  }

  .memo-editor__textarea {
    display: block;
    width: 100%;
    height: 90%;
    padding: 0;
    border: 0;
    font-size: 18px;
    resize: none;
    outline: none;
  }
</style>