<template>
  <div class="container">
    <Tag
      v-for="item in list"
      :key="item.id"
      :name="item.tag_name"
      closable
      @on-close="handleClose2"
    >{{item.tag_name}}</Tag>
    <Button icon="ios-add" type="dashed" size="small" @click="handleAdd">添加标签</Button>
  </div>
</template>
<script>
export default {
 async asyncData({$axios}){
   let res=await $axios.get('/admin/tag/queryTags');
     return {list:res.data.res };
  },
  data() {
    return {
      tagName: ""
    };
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
            }
          });
        }
      });
    },
    handleClose2(event, name) {
      const index = this.count.indexOf(name);
      this.count.splice(index, 1);
    }
  }
};
</script>
