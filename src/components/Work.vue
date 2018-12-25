<template>
    <div class="work-wpt">
        <ul class="detail-list">
            <li class="detail-list-item" v-for="(item, index) in data" :key="index">
                <mu-flex class="list-item-top" justify-content="between" align-items="end">
                    <span class="career">{{$t(item.career)}}</span>
                    <span class="time">{{ item.time }}</span>
                </mu-flex>
                <div class="list-item-content">
                    {{$t(item.intro)}}
                </div>
                <mu-divider></mu-divider>
                <mu-flex class="list-item-bottom" justify-content="between" align-items="center">
                    <a :href="item.url" class='link'><img :src="item.logo" alt="logo"></a>
                    <span class="loc">{{ $t(item.loc) }}</span>
                </mu-flex>
            </li>
        </ul>
    </div>
</template>

<script>
import boolLogo from '../assets/bool.jpg';

export default {
    name: 'Work',
    data () {
        return {
            data: [
                {
                    name: 'work.work1.name',
                    location: 'work.work1.loc',
                    url: 'http://www.tjbool.com/',
                    logo: boolLogo,
                    time: '2014.1 - 2018.12',
                    career: 'work.work1.career',
                    intro: 'work.work1.intro',
                    loc: 'work.work1.loc',
                },
                {
                    name: 'work.work1.name',
                    location: 'work.work1.loc',
                    url: 'http://www.tjbool.com/',
                    logo: boolLogo,
                    time: '2014.1 - 2018.12',
                    career: 'work.work1.career',
                    intro: 'work.work1.intro',
                    loc: 'work.work1.loc',
                }
            ]
        }
    }
}
</script>


<style scoped>
.work-wpt{
    height: 100%;
    background: #eee;
}
.detail-list {
    padding: 2.5rem 1.5rem;
    background: #eee;
}
.detail-list-item{
    padding: 0.625rem;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
    margin-bottom: 1.25rem;
}
.detail-list-item:last-child{
    margin-bottom: 0;
}
.list-item-top .career{
    font-size: 1.2rem;
    font-weight: 700;
}
.list-item-top .time{
    color: #ccc;
    font-size: 0.6rem;
}
.list-item-content{
    color: #666;
    padding: 0.625rem 0;
    text-indent: 2rem;
}
.list-item-bottom {
    border-top:
    /* width: 2rem;
    height: 2rem; */
}
.list-item-bottom img {
     width: 2.5rem;
    height: 2.5rem;
    vertical-align: top;
}
.list-item-bottom .loc{
    font-size: 0.8rem;
    color: #999;
}
</style>

