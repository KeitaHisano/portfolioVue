<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
      <v-tabs color="basil" bg-color="transparent" align-tabs="center">
        <v-tab v-on:click="gotoHome">Home</v-tab>
        <v-tab v-on:click="gotoAbout">生い立ち</v-tab>
        <v-tab v-on:click="gotoSkill">スキルセット</v-tab>
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

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
