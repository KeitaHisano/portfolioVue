<script setup lang="ts">
import { RouterView } from 'vue-router'
import router from './router/index'
import HelloWorld from './components/HelloWorld.vue'

const gotoHome = () => router.push('/')
const gotoAbout = () => router.push('/about')
const gotoJob = () => router.push('/job')
const gotoSkill = () => router.push('/skill')
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="Keita's Profile" />
      <v-tabs color="green" bg-color="transparent" align-tabs="center">
        <v-tab v-on:click="gotoHome">Home</v-tab>
        <v-tab v-on:click="gotoAbout">生い立ち</v-tab>
        <v-tab v-on:click="gotoSkill">スキル・資格</v-tab>
        <v-tab v-on:click="gotoJob">職務経歴</v-tab>
      </v-tabs>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
