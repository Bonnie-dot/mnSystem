<template>
  <div class="container">
    <div slot="top" class="top-pane pane">
      <Input v-model="param.searchKeys" placeholder="请输入关键字查询" style="width: 300px" class="search-input"/>
      <DatePicker type="daterange" placement="top-start" placeholder="请选择查询日期" style="width: 200px"></DatePicker>
      <Button type="primary" icon="ios-search" class="search-button" @click="getData">Search</Button>
    </div>
    <div slot="bottom" class="bottom-pane pane">
      <Table border :columns="columns" :data="data" class="table-list" height="600"></Table>
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
      columns: [
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
              h('strong', params.row.title)
            ])
          }
        },
        {
          title: '内容',
          key: 'content',
           ellipsis:true,
        },
        {
          title: '标签',
          key: 'tags',
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
                     this.$router.push('/admin/article/articleAdd/'+params.row._id);
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
                      this.data.splice(params.index,1);
                      this.$axios.post('/admin/article/deleteArticleById',{_id:params.row._id}).then(res=>{
                       this.$Message.success('删除成功');
                      })
                    }
                  }
                },
                '删除'
              )
            ])
          }
        }
      ],
      data: [
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
      ],
      param:{
        limit:10,
        page:1,
        searchKeys:""
      }
    }
  },
  created(){
    this.getData();
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
    },
    getData(){
      var self=this;
        this.$axios.post('/admin/article/queryArticle',self.param).then(res=>{
          let data=res.data.res;
          for(let i in data){
            let temp=[];
              for(let j in data[i].tag){
                temp.push(data[i].tag[j].tag_name);
              }
               data[i].tags=temp.join(',');
          }
          self.data=data;
     });
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
