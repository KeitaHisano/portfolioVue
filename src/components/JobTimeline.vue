<script setup lang="ts">
const years = [
  {
    color: 'cyan',
    title: 'タイトル',
    year: '1960',
    position: 'ポジション',
    role: ['コーディング', '設計'],
    explanation: 'プロジェクト内容'
  },
  {
    color: 'green',
    title: 'タイトル',
    year: '1970',
    position: 'ポジション',
    role: ['コーディング', '設計'],
    explanation: 'プロジェクト内容'
  },
  {
    color: 'pink',
    title: 'タイトル',
    year: '1980',
    position: 'ポジション',
    role: ['コーディング', '設計'],
    explanation: 'プロジェクト内容'
  },
  {
    color: 'amber',
    title: 'タイトル',
    year: '1990',
    position: 'ポジション',
    role: ['コーディング', '設計'],
    explanation: 'プロジェクト内容'
  },
  {
    color: 'orange',
    title: 'タイトル',
    year: '2000',
    position: 'ポジション',
    role: ['コーディング', '設計'],
    explanation: 'プロジェクト内容'
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
        <div>担当</div>
        <div v-text="year.explanation"></div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
