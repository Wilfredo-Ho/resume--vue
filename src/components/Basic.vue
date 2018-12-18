<template>
    <div class="basic-wpt">
        <div class="motto">{{$t('basic.motto')}}</div>
        <div class="content-wpt">
            <div class="avatar-wpt">
                <mu-avatar :size="80" color="transparent" class='avatar'>
                    <img src="../assets/self.jpg">
                </mu-avatar>
            </div>
            <div class="info-wpt">
                <h4 class="name">{{$t('basic.name')}}</h4>
                <mu-list>
                    <!-- <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                            <mu-icon value="inbox"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>Inbox</mu-list-item-title>
                    </mu-list-item> -->
                    <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                            <mu-icon value="phone" size="20"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>{{$t('basic.phone')}}</mu-list-item-title>
                        </mu-list-item>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                            <mu-icon value="email" size="20"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>{{$t('basic.email')}}</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false" href="http://www.whpu.edu.cn/">
                        <mu-list-item-action>
                            <mu-icon value="school" size="20"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>{{$t('basic.school')}}</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                            <mu-icon value="location_city" size="20"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>{{$t('basic.city')}}</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </div>
        </div>
    </div>
</template>

<style scoped>
.basic-wpt {
    height: 100%;
     background: #4caf50;
}
.motto {
    text-align: center;
    padding: 4rem 1rem;
    background: #fff;
}
.content-wpt {
    position: relative;
}
.avatar-wpt {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
}
.info-wpt {
    padding: 2.5rem 1rem 0;
    text-align: center;
    color: hsla(0, 0%, 100%, 0.8);
}
.mu-item-title{
    color: #fff;
    font-size: 0.875rem;
}
.mu-item-action {
    color: #fff;
    min-width: 2.875rem;
}
</style>

