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
        <Option v-for="item in tagList" :value="item._id" :key="item._id">{{ item.tag_name }}</Option>
      </Select>
    </div>
    <div class="submit-btn">
      <Button type="primary" width="200px" size="large"  @click="submitData">提交</Button>
    </div>
  </div>
</template>
<script>
export default {
   layout: "admin",
  async asyncData({$axios,params}){
    let res=(await $axios.post('/admin/article/findArticleById',{_id:params.id})).data.res;
    let tagList=(await $axios.get('/admin/tag/queryTags')).data.res;
    let tagId=[]; 
    res.tag.forEach(v => {
      tagId.push(v._id);
    });
    return {
      content:res.content,
      title:res.title,
      articleId:params.id,
      tagId,
      tagList
    }
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
      tagId: [],
    }
  },
  methods: {
    onEditorChange({ editor, html, text }) {
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
        self.$axios.post('/admin/article/updateArticleById',{param:{title:self.title,content:self.content,tag:self.tagId},id:{_id:self.articleId}}).then(res=>{
            if(res.success){
              self.$Message.success('更新成功');
               self.$router.push('/admin/article/article-list');
            }
        })
    }
  },
   head(){
    return {
      title:"修改文章"
    }
  }
}
</script>
