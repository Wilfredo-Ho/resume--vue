<template>
    <mu-flex class="flex-wrapper" direction="column" justify-content="center" align-items="center">
      <div class="self-wrapper">
        <mu-avatar :size="100" color="transparent" class='avatar'>
          <img src="../assets/self.jpg">
        </mu-avatar>
        <h3> {{$t('home.title')}} </h3>
      </div>
      <mu-flex class="flex-inner" direction="column" justify-content="around" align-items="center">
        <mu-button class="demo-color-btn" color="success" href="#/basic"> {{$t('home.basic')}}</mu-button>
        <mu-button class="demo-color-btn" color="primary" href="#/work"> {{$t('home.work')}} </mu-button>
        <mu-button class="demo-color-btn" color="indigo400" href="#/project"> {{$t('home.project')}} </mu-button>
        <mu-button class="demo-color-btn" color="teal700" href="#/others"> {{$t('home.others')}} </mu-button>
      </mu-flex>
    </mu-flex>
</template>

<style scoped>
.flex-wrapper {
  height: 100%;
  width: 100%;
  background: #eee;
}
.flex-inner {
  height: 16rem;
}
.demo-color-btn {
  width: 13.5rem;
}
.self-wrapper {
  margin-bottom: 1rem;
  text-align: center;
}
.self-wrapper h3 {
  font-weight: 400;
}
</style>

