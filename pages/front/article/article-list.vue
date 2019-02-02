<template>
  <div class="container">
    <div slot="top" class="top-pane pane">
      <Input v-model="value" placeholder="请输入关键字查询" style="width: 300px" class="search-input"/>
      <DatePicker type="daterange" placement="top-start" placeholder="请选择查询日期" style="width: 200px"></DatePicker>
      <Button type="primary" icon="ios-search" class="search-button">Search</Button>
    </div>
    <div slot="bottom" class="bottom-pane pane">
      <Table border :columns="columns7" :data="data6" class="table-list" height="600"></Table>
      <div class="page">
         <Page :total="100" show-sizer />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns7: [
        {
          title: '标题',
          key: 'name',
          ellipsis:true,
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: '内容',
          key: 'age',
           ellipsis:true,
        },
        {
          title: '标签',
          key: 'address',
           ellipsis:true,
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                },
                '修改'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                },
                '删除'
              )
            ])
          }
        }
      ],
      data6: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake ParkLondon No. 1 Lake ParkLondon No. 1 Lake ParkLondon No. 1 Lake ParkLondon No. 1 Lake ParkLondon No. 1 Lake Park'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park'
        }
      ]
    }
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${
          this.data6[index].age
        }<br>Address：${this.data6[index].address}`
      })
    },
    remove(index) {
      this.data6.splice(index, 1)
    }
  }
}
</script>
<style>
.pane {
  border: 1px solid #ccc;
  border-radius: 10px;
}
.pane:hover {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);
}
.top-pane {
  height: 70px;
  margin-bottom: 20px;
  line-height: 70px;
  padding-left: 30px;
}
.bottom-pane {
  height: 690px;
  padding: 20px;
}
.container .search-button {
  position: relative;
  right: -55%;
}
.container .search-input {
  margin-right: 40px;
}
.container .page{
  margin-top: 20px;
  text-align: center;
}
</style>
