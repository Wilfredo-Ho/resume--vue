<template>
    <div class="project-wpt">
        <mu-card style="width: 90%; margin: 10px auto;" v-for="(item, index) in projects" :key="index">
            <mu-card-title :title="item.name" :sub-title="item.sTime + ' - ' + item.eTime"></mu-card-title>
            <mu-card-text>
                {{ item.intro }}
            </mu-card-text>
        </mu-card>
    </div>
</template>

<script>
export default {
    name: 'Project',
    data () {
        return {
            projects: [
                {
                    name: '监控平台',
                    sTime: '2017.12',
                    eTime: '至今',
                    intro: '为企业提供租赁监控服务。平台主要包括车辆监控模块、故障管理模块、统计分析模块、系统管理模块。基于WebService和.net技术开发。'
                },
                {
                    name: '监控平台',
                    sTime: '2017.12',
                    eTime: '至今',
                    intro: '为企业提供租赁监控服务。平台主要包括车辆监控模块、故障管理模块、统计分析模块、系统管理模块。基于WebService和.net技术开发。'
                },
                {
                    name: '监控平台',
                    sTime: '2017.12',
                    eTime: '至今',
                    intro: '为企业提供租赁监控服务。平台主要包括车辆监控模块、故障管理模块、统计分析模块、系统管理模块。基于WebService和.net技术开发。'
                },
                {
                    name: '监控平台',
                    sTime: '2017.12',
                    eTime: '至今',
                    intro: '为企业提供租赁监控服务。平台主要包括车辆监控模块、故障管理模块、统计分析模块、系统管理模块。基于WebService和.net技术开发。'
                },
                {
                    name: '监控平台',
                    sTime: '2017.12',
                    eTime: '至今',
                    intro: '为企业提供租赁监控服务。平台主要包括车辆监控模块、故障管理模块、统计分析模块、系统管理模块。基于WebService和.net技术开发。'
                },
                {
                    name: '监控平台',
                    sTime: '2017.12',
                    eTime: '至今',
                    intro: '为企业提供租赁监控服务。平台主要包括车辆监控模块、故障管理模块、统计分析模块、系统管理模块。基于WebService和.net技术开发。'
                }
            ]
        }
       
    }
}
</script>


<style scoped>
.project-wpt{
    background: #c5cae9;
    min-height: 100%;
    padding: 10px 0;
}
.mu-card-text{
    padding-top: 0;
}
</style>
