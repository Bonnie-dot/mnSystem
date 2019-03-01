<style scoped>
.container {
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 800px;
  padding: 20px;
}
.container:hover {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);
}
.title {
  font-size: 24px;
  margin-bottom: 20px;
}
.content {
  height: 500px;
}
::placeholder {
  font-size: 20px;
}
.tag {
  display: flex;
  justify-content: flex-start;
  margin-top:85px;
  line-height: 30px;
}
.submit-btn {
  text-align: center;
  margin-top: 40px;
}
.submit-btn button{
 width: 100px;
}
</style>
<template>
  <div class="container">
    <div class="title">
      <Input v-model="title" placeholder="请输入标题" style="width: 100%" size="large"/>
    </div>
    <div class="content">
      <div
        class="quill-editor"
        :content="content"
        @change="onEditorChange"
        v-quill:myQuillEditor="editorOption"
      ></div>
    </div>
    <div class="tag">标签：
      <Select v-model="tagId" multiple style="width:260px">
        <Option v-for="item in tagList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <div class="submit-btn">
      <Button type="primary" width="200px" size="large" html-type="submit" @click="submitData">提交</Button>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({$axios}){
    let res=await $axios.get('/admin/tag/queryTags')
    let tagList=[];
    res.data.res.forEach(v => {
      tagList.push({
        value:v._id,
        label:v.tag_name
      })
    });
    return {tagList}
  },
  data() {
    return {
      content: '',
      editorOption: {
        // some quill options
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['clean'],
            ['link', 'image', 'video']
          ]
        },
        placeholder:"",
        theme:"snow"
      },
      title: '',
      tagId: []
    }
  },
  methods: {
    // onEditorBlur(editor) {
    //   console.log('editor blur!', editor)
    // },
    // onEditorFocus(editor) {
    //   console.log('editor focus!', editor)
    // },
    // onEditorReady(editor) {
    //   console.log('editor ready!', editor)
    // },
    onEditorChange({ editor, html, text }) {
       console.log('editor change!', editor, html, text)
      this.content = html
    },
    submitData(){
      var self=this;
        if(!self.title){
          self.$Message.warning('请填写title');
          return;
        }
        if(!self.content){
          self.$Message.warning('请填写内容');
          return;
        }
        self.$axios.post('/admin/article/insertArticleData',{title:self.title,content:self.content,tag:self.tagId}).then(res=>{
            if(res.success){
               self.$router.push('/admin/article/article-list');
            }
        })
    }
  }
}
</script>
