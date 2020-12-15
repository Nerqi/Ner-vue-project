<template>
  <div ref="editor" class="wangEdit"></div>
</template>

<script>
  import E from '@/components/Wangeditor/release/wangEditor'
  export default {
    name: 'Editor',
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        editor:'',
        editorContent: ''
      }
    },
    watch: {
      editorContent(newValue) {
        this.$emit('change',newValue)
      }
    },
    mounted() {
      this.editor = new E(this.$refs.editor);
      this.editor.customConfig.onchange = (html) => {
        this.editorContent = html
      };
      this.editor.customConfig.uploadImgShowBase64 = true;
      this.editor.customConfig.uploadImgMaxSize =  10 * 1024 * 1024;
      this.editor.create()
      //this.editor.txt.append(this.editorContent)
    },
    methods: {
      setContent(v){
        this.editor.txt.html(v)
      },
      getContent() {
        return this.editorContent
      }
    }
  }
</script>

<style lang="less">
  .wangEdit{
    .w-e-toolbar {
      line-height: 10px!important;
      display: -ms-flexbox;
      display: flex;
      padding: 0 5px;
      flex-wrap: wrap;
      .w-e-menu{
        z-index: 0 !important;
      }
    }
    .w-e-text-container {
      z-index: 0 !important;
      height: 200px !important;
      position: relative;
    }
  }
</style>
