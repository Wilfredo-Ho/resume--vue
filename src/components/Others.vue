<template>
    <div class="work-wpt">
        <div class="basic">
            <mu-flex class="demo-linear-progress" justify-content="center" align-items="center">
                <p class='tag'>HTML5</p>
                <mu-linear-progress mode="determinate" :value="basic[0]" :size="8"></mu-linear-progress>
            </mu-flex>
            <mu-flex class="demo-linear-progress" justify-content="center" align-items="center">
                <p class='tag'>CSS3</p>
                <mu-linear-progress mode="determinate" :value="basic[1]" :size="8" color="pink400"></mu-linear-progress>
            </mu-flex>
            <mu-flex class="demo-linear-progress" justify-content="center" align-items="center">
                <p class='tag'>Javascript</p>
                <mu-linear-progress mode="determinate" :value="basic[2]" :size="8" color="teal500"></mu-linear-progress>
            </mu-flex>
        </div>
        <div class="other">
            <mu-container class="button-wrapper">
                <mu-button color="primary" small @click='setBar(0)'>jQuery</mu-button>
                <mu-button color="secondary" small @click='setBar(1)'>Bootstrap</mu-button>
                <mu-button color="success" small @click='setBar(2)'>echarts</mu-button>
                <mu-button color="warning" small @click='setBar(3)'>Baidu Map</mu-button>
                <mu-button color="secondary" small @click='setBar(4)'>jstree</mu-button>
                <mu-button color="primary" small @click='setBar(5)'>vue</mu-button>
                <mu-button color="secondary" small @click='setBar(6)'>iview</mu-button>
                <mu-button color="success" small @click='setBar(7)'>react</mu-button>
                <mu-button color="warning" small @click='setBar(8)'>antd</mu-button>
            </mu-container>
        </div>
        <div class="charts">
            <div class="pie" id='pie'></div>
        </div>
    </div>
</template>

<script>
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/pie');
const list = ['jQuery', 'Bootstrap', 'echarts', 'Baidu Map', 'jstree', 'vue', 'iview', 'react', 'antd'];
export default {
    name: 'Others',
    data () {
        return {
            basic: [80, 60, 45],
            other: [76, 76, 76, 76, 76, 76, 76, 76, 76],
            currentIndex: 0,
            chart: null
        }
    },
    methods: {
        setBar (index) {
            if (index !== this.currentIndex) {
                this.currentIndex = index;
                this.$nextTick(() => {
                    this.drawChart();
                })
            }
        },
        drawChart () {
            let name = list[this.currentIndex], value = this.other[this.currentIndex]; 
            this.chart.setOption({
                series: [
                    {
                        type: 'pie',
                        name: '',
                        data: [
                            {
                                name,
                                value
                            }
                        ]
                    }
                ]
            }, true);
        }
    },
    mounted () {
        this.chart = echarts.init(document.getElementById('pie'));
        this.drawChart();
    }
}
</script>


<style scoped>
.work-wpt{
    min-height: 100%;
    background: #b2dfdb;
    padding-top: 3rem;
}
.basic{
    width: 80%;
    margin: 0 auto;
}
.basic .tag {
    width: 6rem;
    text-align: right;
    margin-right: 10px;
    font-weight: 500;
}
.demo-linear-progress{
    margin: 6px 0;
}
.other{
    margin-top: 1.875rem;
}
.button-wrapper {
  text-align: center;
}
.mu-button{
    margin: 8px;
}
.charts {
    width: 80%;
    margin: 1.5rem auto;
    height: 8rem;
}
.pie{
    width: 100%;
    height: 100%;
}
</style>