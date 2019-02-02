<template>
  <div class="container">
    <Tag
      v-for="item in count"
      :key="item"
      :name="item"
      closable
      @on-close="handleClose2"
    >标签{{ item + 1 }}</Tag>
    <Button icon="ios-add" type="dashed" size="small" @click="handleAdd">添加标签</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: [0, 1, 2]
    }
  },
  methods: {
    handleAdd() {
      if (this.count.length) {
        this.count.push(this.count[this.count.length - 1] + 1)
      } else {
        this.count.push(0)
      }
    },
    handleClose2(event, name) {
      const index = this.count.indexOf(name)
      this.count.splice(index, 1)
    }
  }
}
</script>
