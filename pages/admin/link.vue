<template>
  <div class="container">
    <Tag
      v-for="item in list"
      :key="item.id"
      :name="item.link_name"
      closable
      @on-close="handleClose(item._id)"
    >{{item.link_name}}</Tag>
    <Button icon="ios-add" type="dashed" size="small" @click="handleAdd">添加标签</Button>
    <Modal v-model="modal" draggable scrollable title="新建友链" footer-hide="true">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <FormItem label="友链名" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入友链名"></Input>
        </FormItem>
        <FormItem label="友链网页地址" prop="url">
          <Input v-model="formValidate.url" placeholder="请输入友链友链地址"></Input>
        </FormItem>
        <FormItem label="友链所属人" prop="author">
          <Input v-model="formValidate.author" placeholder="请输入友链所属人"></Input>
        </FormItem>

        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">确认</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: [0, 1, 2],
      name: "",
      url: "",
      modal: false,
      list: [],
      formValidate: {
        name: "",
        url: "",
        author: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "友链名不能为空", trigger: "blur" }],
        url: [{ required: true, message: "友链地址不能为空", trigger: "blur" }],
        author: [
          { required: true, message: "友链所属人不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    handleAdd() {
      this.modal = true;
    },
    handleClose(id) {
      this.$axios.post('/admin/link/deleteLink',{id:id}).then(res=>{
        this.$Message.success(res.data.msg);
        this.getData();
      })
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$axios.post('/admin/link/insertLink',this.formValidate).then(res=>{
            this.$Message.success(res.data.msg);
            this.$refs[name].resetFields();
            this.modal=false;
            this.getData();
          })
        } 
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
       this.modal=false;
    },
    getData() {
      this.list = [];
      this.$axios.get("/admin/link/queryLink").then(res => {
        this.list = res.data.res;
      });
    }
  }
};
</script>
