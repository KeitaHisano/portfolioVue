<script setup lang="ts">
const colorList = [
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brown',
  'blue-grey',
  'grey'
]
const items = [
  {
    title: '社外研修',
    start: '2013/4',
    end: '2014/3',
    position: '',
    role: ['設計', 'コーディング'],
    environment: [''],
    explanation: 'CE研修(6ヶ月)、製造研修(6ヶ月)'
  },
  {
    title: '地方銀行向けシステムの生産中止対応',
    start: '2014/7',
    end: '2014/7',
    position: 'プログラマー',
    role: ['設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0']
  },
  {
    title: 'タクシー会社向けシステムの機能改善',
    start: '2014/7',
    end: '2014/10',
    position: 'プログラマー',
    role: ['設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0']
  },
  {
    title: '地方銀行向けシステムの生産中止対応',
    start: '2014/11',
    end: '2015/2',
    position: 'プログラマー',
    role: ['設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0']
  },
  {
    title: '大手警備会社向けシステムの機能改善',
    start: '2015/2',
    end: '2015/6',
    position: 'プログラマー',
    role: ['設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0']
  },
  {
    title: '地方銀行向けシステムの生産中止対応',
    start: '2015/6',
    end: '2015/8',
    position: 'プログラマー',
    role: ['設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0']
  },
  {
    title: '銀行向け現金保管装置の開発',
    start: '2015/6',
    end: '2016/5',
    position: 'プログラマー',
    role: ['設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0']
  },
  {
    title: '大手スタジアム向けシステムの機能改善',
    start: '2016/11',
    end: '2017/1',
    position: 'SE、プログラマー',
    role: ['仕様整合', '設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0']
  },
  {
    title: '大手警備会社向けシステムの機能改善',
    start: '2017/1',
    end: '2017/3',
    position: 'プログラマー',
    role: ['設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0']
  },
  {
    title: '大手警備会社向けシステムの機能改善',
    start: '2017/3',
    end: '2017/4',
    position: 'プログラマー',
    role: ['設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0']
  },
  {
    title: '大手警備会社向けシステムの機能改善',
    start: '2017/7',
    end: '2017/8',
    position: 'プログラマー',
    role: ['設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0']
  },
  {
    title: '大手警備会社向けシステムの機能改善',
    start: '2017/9',
    end: '2019/11',
    position: 'SE、プログラマー',
    role: ['仕様整合', '設計', 'コーディング', 'テスト', '現地立ち合い'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0', 'C#.NET 4.5']
  },
  {
    title: '地方銀行向けシステムの生産中止対応',
    start: '2017/12',
    end: '2018/2',
    position: 'プログラマー',
    role: ['設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0']
  },
  {
    title: '大手警備会社向けシステムの機能改善',
    start: '2018/3',
    end: '2018/4',
    position: 'プログラマー',
    role: ['設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0']
  },
  {
    title: '大手警備会社向けシステムの開発',
    start: '2018/5',
    end: '2018/7',
    position: 'SE、プログラマー',
    role: ['仕様整合', '設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'C#.NET 4.5']
  },
  {
    title: '地方スーパー向けシステムの開発',
    start: '2018/7',
    end: '2019/8',
    position: 'SE、プログラマー',
    role: ['仕様整合', '設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'PostgreSQL 10', 'C#.NET 4.5']
  },
  {
    title: '大手警備会社向けシステムの開発',
    start: '2019/3',
    end: '2019/4',
    position: 'SE、プログラマー',
    role: ['仕様整合', '設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'C#.NET 4.5']
  },
  {
    title: '大手警備会社向けシステムの機能改善',
    start: '2019/11',
    end: '2019/12',
    position: 'プログラマー',
    role: ['設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0']
  },
  {
    title: '地方スーパー向けシステムの機能改善',
    start: '2019/12',
    end: '2020/6',
    position: 'SE、プログラマー',
    role: ['仕様整合', '設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'PostgreSQL 10', 'C#.NET 4.5']
  },
  {
    title: '地方銀行向けシステムのリファクタリング',
    start: '2020/7',
    end: '2020/12',
    position: 'プログラマー',
    role: ['設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0', 'C#.NET 4.5']
  },
  {
    title: '大手警備会社向けシステムの機能改善',
    start: '2020/11',
    end: '2021/3',
    position: 'プログラマー',
    role: ['設計', 'コーディング', 'テスト'],
    environment: ['windows7', 'MS ACCESS', 'SQLAnywhere', 'vb6.0']
  },
  {
    title: '銀行ATM 連携システムの開発',
    start: '2021/3',
    end: '2022/4',
    position: 'SE、プログラマー',
    role: ['仕様整合', '設計', 'コーディング', 'テスト'],
    environment: [
      'windows10',
      'PostgreSQL 13',
      'C#',
      'Javascript',
      'Typescript',
      'HTML',
      'CSS',
      'Vue 2',
      'Nuxt 2'
    ]
  },
  {
    title: 'リテール向け システムの開発',
    start: '2022/5',
    end: '現在',
    position: 'SE、プログラマー',
    role: ['技術調査', 'プロトタイプ作成'],
    environment: [
      'windows10',
      'PostgreSQL 13',
      'C#',
      'Javascript',
      'Typescript',
      'HTML',
      'CSS',
      'React 18'
    ]
  }
]
</script>

<template>
  <v-timeline side="end">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :dot-color="colorList[i % colorList.length]"
      size="small"
    >
      <template v-slot:opposite>
        <div
          :class="`pt-1 headline font-weight-bold text-${colorList[i % colorList.length]}`"
          v-text="`${item.start}～${item.end}`"
        ></div>
      </template>
      <div>
        <h3
          :class="`mt-n1 headline font-weight-light mb-4 text-${colorList[i % colorList.length]}`"
          v-text="item.title"
        ></h3>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
