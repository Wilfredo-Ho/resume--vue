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
                <mu-button color="lightBlue900" small @click='setBar(0)'>jQuery</mu-button>
                <mu-button color="red900" small @click='setBar(1)'>echarts</mu-button>
                <mu-button color="deepPurple900" small @click='setBar(2)'>Bootstrap</mu-button>
                <mu-button color="red700" small @click='setBar(3)'>Baidu Map</mu-button>
                <mu-button color="orange900" small @click='setBar(4)'>jstree</mu-button>
                <mu-button color="green700" small @click='setBar(5)'>vue</mu-button>
                <mu-button color="lightBlue500" small @click='setBar(6)'>iview</mu-button>
                <mu-button color="cyan300" small @click='setBar(7)'>react</mu-button>
                <mu-button color="primary" small @click='setBar(8)'>antd</mu-button>
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
require('echarts/lib/component/title');
const colors = ['#01579b', '#b71c1c', '#311b92', '#F44336', '#e65100', '#4FBD8C', '#0E6EC4', '#61DAFB', '#2F52E9'];
const list = ['jQuery', 'Bootstrap', 'echarts', 'Baidu Map', 'jstree', 'vue', 'iview', 'react', 'antd'];
export default {
    name: 'Others',
    data () {
        return {
            basic: [80, 60, 45],
            other: [76, 85, 60, 65, 38, 80, 37, 60, 28],
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
            let name = list[this.currentIndex], value = this.other[this.currentIndex], color = colors[this.currentIndex]; 
            console.log(name);
            this.chart.setOption({
                title: {
                    text: `${value}%`,
                    subText: '哈哈哈哈',
                    left: 'center',
                    top: 'center',
                    textStyle: {
                        color: '#333',
                        fontSize: 20,
                        fontFamily: 'DINAlternate-Bold'
                    },
                    subtextStyle: {
                        color: '#fff',
                        fontSize: 30,
                        fontFamily: 'DINAlternate-Bold',
                    },
                    itemGap: -4
                },
                series: [
                    {
                        type: 'pie',
                        name: 'pie',
                        radius: ['70%', '90%'],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        hoverAnimation: false,
                        data: [
                            {
                                name,
                                value,
                                itemStyle: {
                                    normal: {
                                        color: color,
                                        label: {
                                            show: false
                                        },
                                        labelLine: {
                                            show: false
                                        }
                                    }
                                }
                            },
                            {
                                name: 'gap',
                                value: 100 - value,
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: false
                                        },
                                        labelLine: {
                                            show: false
                                        },
                                        color: 'rgba(0, 0, 0, 0.1)',
                                        borderColor: 'rgba(0, 0, 0, 0)',
                                        borderWidth: 0
                                    }
                                }
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

        window.addEventListener('resize', () => {
            this.chart.resize();
        })
    },
    beforeDestroy () {
        window.removeEventListener('resize', () => {
            this.chart.resize();
        });
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
    height: 10rem;
}
.pie{
    width: 100%;
    height: 100%;
}
.btn-lang{
    display: none;
}
</style>