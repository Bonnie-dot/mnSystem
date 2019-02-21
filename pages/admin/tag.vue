<template>
  <div class="container">
    <Tag
      v-for="item in list"
      :key="item.id"
      :name="item.tag_name"
      closable
      @on-close="removeData(item._id)"
    >{{item.tag_name}}</Tag>
    <Button icon="ios-add" type="dashed" size="small" @click="handleAdd">添加标签</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tagName: "",
      list:[]
    };
  },
  created(){
    this.getData();
  },
  methods: {
    handleAdd() {
      this.$Modal.confirm({
        render: h => {
          return h("Input", {
            props: {
              value: this.tagName,
              autofocus: true,
              placeholder: "请输入你要添加的标签"
            },
            on: {
              input: val => {
                this.tagName = val;
              }
            }
          });
        },
        onOk: () => {
          this.$axios.post("/admin/tag/createTagData",{ name: this.tagName }).then(res=>{
            if(res.success){
               this.$Message.success('添加标签成功');
               this.tagName="";
               this.getData();
            }
          });
        }
      });
    },
    removeData(id) {
      this.$axios.post('/admin/tag/deleteTagById',{id:id}).then(res=>{
        this.$Message.success(res.data.msg);
        this.getData();
      })
    },
    getData(){
      this.list=[];
      this.$axios.get('/admin/tag/queryTags').then(res=>{
        this.list=res.data.res;
      });
    }
  }
};
</script>
