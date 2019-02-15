<style scoped>
.container {
  padding: 10px;
}
.container .cal,
.container .echarts {
  display: flex;
}
.container .cal > div {
  flex: 4;
  height: 150px;
  border: 1px solid #ccc;
}
.container .cal > div:hover,
.container .echarts > div:hover {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);
}
.container .cal .user-info {
  flex: 1;
  border: 1px solid #dfdfdf;
  margin-right: 15px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
}
.container .cal .user-info > div {
  flex: 3;
}
.container .cal .user-info > .left {
  flex: 2;
  width: 80px;
}
.container .cal .user-info >.left>img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.container .cal .user-info > .right > span {
  display: block;
  margin-bottom: 15px;
}
.container .cal .cal-data {
  border-radius: 10px;
  display: flex;
}
.container .cal .cal-data > div {
  flex: 1;
  display: flex;
  border-right: 1px solid #e8eaec;
}
.container .cal .cal-data > div > span {
  width: 100px;
  padding-top: 30px;
  padding-left: 20px;
}
.container .cal .cal-data .detail-number > span:last-child {
  font-size: 15px;
  color: #9ea7b4;
}
.container .cal .cal-data .detail-number {
  text-align: center;
  flex: 1;
}
.container .cal .cal-data .detail-number > span {
  display: block;
  font-size: 28px;
  text-align: center;
  padding-top: 25px;
  text-align: center;
}
.container .echarts > div {
  flex: 1;
  border: 1px solid #ccc;
  height: 500px;
  margin-top: 20px;
  border-radius: 10px;
}
.container .echarts > div:first-child {
  margin-right: 15px;
}
.blue {
  background: #2b85e4;
}
.light-blue {
  background: #5cadff;
}
.deep-blue {
  background: #19be6b;
}
.dark-blue {
  background: #ff9900;
}
</style>
<template>
  <div class="container">
    <div class="cal">
      <div class="user-info">
        <div class="left">
            <img src="~/assets/images/avator.jpg">
        </div>
        <div class="right">
          <span>用户名：{{ userName }}</span>
          <span>最近登录时间：{{ loginTime }}</span>
          <span>最近登录地点：{{ loginArea }}</span>
        </div>
      </div>
      <div class="cal-data">
        <div class="data">
          <span class="blue">
            <Icon type="md-person-add" size="70" color="#fff"/>
          </span>
          <div class="detail-number">
            <span>{{ todayVisit }}</span>
            <span>今日访问量</span>
          </div>
        </div>
        <div class="data">
          <span class="light-blue">
            <Icon type="ios-eye" size="70" color="#fff"/>
          </span>
          <div class="detail-number">
            <span>{{ historyVisit }}</span>
            <span>历史访问量</span>
          </div>
        </div>
        <div class="data">
          <span class="deep-blue">
            <Icon type="ios-document" size="70" color="#fff"/>
          </span>
          <div class="detail-number">
            <span>{{ recentltTime }}</span>
            <span>最近写文章时间</span>
          </div>
        </div>
        <div class="data">
          <span class="dark-blue">
            <Icon type="ios-book" size="70" color="#fff"/>
          </span>
          <div class="detail-number">
            <span>{{ articleTotal }}</span>
            <span>文章总量</span>
          </div>
        </div>
      </div>
    </div>
    <div class="echarts">
      <div id="echart1"></div>
      <div id="echart2"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 'Bonnie',
      loginTime: '2019-1-19 14:54',
      loginArea: '四川成都高新区',
      todayVisit: 11,
      historyVisit: 300,
      recentltTime: '2019-1-19',
      articleTotal: 200
    }
  },
  mounted() {
    this.getData();
    this.getVisitNumber();
    this.getArticleNumber();
  },
  methods: {
    getVisitNumber() {
      var echart = document.getElementById('echart1')
      var option = {
        title: {
          text: '访客人数',
          textStyle: {
            align: 'center'
          },
          left: '45%',
          top: '2%'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {
              color: '#5cadff'
            },
            lineStyle: {
              color: '#5cadff'
            },
            itemStyle: {
              color: '#5cadff'
            }
          }
        ]
      }
      var myChart = this.$echarts.init(echart)
      myChart.setOption(option)
    },
    getArticleNumber() {
      var echart = document.getElementById('echart2')
      var option = {
        title: {
          text: '文章总数',
          textStyle: {
            align: 'center'
          },
          left: '45%',
          top: '2%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '文章总数',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220],
             areaStyle: {
              color: '#19be6b'
            },
            lineStyle: {
              color: '#19be6b'
            },
            itemStyle: {
              color: '#19be6b'
            }
          }
        ]
      }
      var myChart = this.$echarts.init(echart)
      myChart.setOption(option)
    },
    getData(){
        this.$axios.post('/user/getUserInfo').then(res=>{
            console.log(res);
        });
    }
  }
}
</script>
