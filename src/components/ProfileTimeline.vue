<script setup lang="ts">
const years = [
  {
    color: 'cyan',
    title: '出生',
    year: '1989',
    content: '九州の田舎で生まれる。保育園時代はサラサラキノコヘアーでした。'
  },
  {
    color: 'green',
    title: '小学生',
    year: '1996～2002',
    content: '地元の公立小学校に進学。3年生でソフトボールをはじめ、6年生で九州大会まで出場。'
  },
  {
    color: 'pink',
    title: '中学生',
    year: '2002～2005',
    content:
      '地元の公立中学校に進学。陸上部に入部し、長距離（～3000m）を始める。当時の得意距離は400m,800m,1500m。駅伝で県大会まで出場。'
  },
  {
    color: 'amber',
    title: '高校生',
    year: '2005～2008',
    content:
      '地元の進学校に進学。バドミントン部に入部。先輩の引退とともに主将を務めるも高総体では惨敗。3年生の頃、足が太くなりすぎて女子バド部の男性顧問にガンダムと呼ばれる。'
  },
  {
    color: 'orange',
    title: '大学生',
    year: '2008～2013',
    content:
      '九州内の地方国立大学 情報系学科に進学。塾のアルバイトに熱中する。アルバイト代でコンパクトカーを購入するも、駐車場に侵入する際、フェンスに後ろドアをえぐられる経験あり。'
  },
  {
    color: 'cyan',
    title: '社会人',
    year: '2013',
    content:
      '就職で大阪へ。機械製造・開発メーカーへ就職。アプリケーションエンジニアとして働き出す。'
  }
]
</script>

<template>
  <v-timeline align="start">
    <v-timeline-item v-for="(year, i) in years" :key="i" :dot-color="year.color" size="small">
      <template v-slot:opposite>
        <div :class="`pt-1 headline font-weight-bold text-${year.color}`" v-text="year.year"></div>
      </template>
      <div>
        <h2
          :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`"
          v-text="year.title"
        ></h2>
        <div v-text="year.content"></div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
