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
    <Modal v-model="modal" title="新建标签" :footer-hide="true" draggable scrollable>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <FormItem label="标签名" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入标签名"></Input>
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
      tagName: "",
      list: [],
      modal: false,
      formValidate: {
        name: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "标签名不能为空", trigger: "blur" }]
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
    removeData(id) {
      this.$axios.post("/admin/tag/deleteTagById", { id: id }).then(res => {
        this.$Message.success(res.data.msg);
        this.getData();
      });
    },
    getData() {
      this.list = [];
      this.$axios.get("/admin/tag/queryTags").then(res => {
        this.list = res.data.res;
      });
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$axios
            .post("/admin/tag/createTagData", this.formValidate)
            .then(res => {
              this.$Message.success(res.data.msg);
              this.modal = false;
              this.$refs[name].resetFields();
              this.getData();
            });
        }
      });
    },
    handleReset(name){
        this.$refs[name].resetFields();
        this.modal=false;
    }
  }
};
</script>
