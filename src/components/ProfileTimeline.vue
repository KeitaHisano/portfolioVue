<script setup lang="ts">
const years = [
  {
    color: 'cyan',
    title: '生誕',
    year: '1989',
    content: '九州の田舎で生まれる。子供の頃はサラサラ'
  },
  {
    color: 'green',
    title: '小学生',
    year: '',
    content: '３年生でソフトボールをはじめる。６年生で九州大会まで出場。'
  },
  {
    color: 'pink',
    title: '中学生',
    year: '',
    content:
      '陸上部に入部し、長距離（～3000m）を開始。当時の得意距離は400m,800m,1500m。駅伝で県大会まで出場。'
  },
  {
    color: 'amber',
    title: '高校生',
    year: '',
    content:
      'バドミントン部に入部。主将を務めるも高総体では惨敗。3年生の頃、女子バド部の顧問に足が太くなりすぎてガンダムと呼ばれる。'
  },
  {
    color: 'orange',
    title: '大学生',
    year: '',
    content:
      '九州内の地方国立大学に進学。塾のアルバイトに熱中する。アルバイト代でコンパクトカーを購入するも、駐車場に侵入する際にフェンスに後ろドアをえぐり取られる。'
  },
  {
    color: 'cyan',
    title: '社会人',
    year: '2013',
    content:
      '就職を期に大阪へ進出。機械製造・開発メーカーへ就職。アプリケーションエンジニアとして働き出す。'
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
