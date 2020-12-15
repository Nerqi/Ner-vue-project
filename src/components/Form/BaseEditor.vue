<template>
  <Editor ref="Editor" @change="change"></Editor>
</template>
<script>
  import Editor from '@/components/Editor/Editor'
  export default {
    name: 'BaseEditor',
    components:{
      Editor
    },
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    watch: {
      value(newValue, oldValue) {
        this.$refs['Editor'].setContent(this.value)
      }
    },
    created(){
      this.$nextTick(()=>{
        this.$refs['Editor'].setContent(this.value)
      })
    },
    methods: {
      change(value) {
        this.$emit('input', value)
      }
    },
  }
</script>

<style scoped>

</style>
