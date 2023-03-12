<script setup lang="ts">
const appEnvironment = [
  { title: 'Windows XP/7/10', flex: 12 },
  { title: 'Windows Server 2003/2008/2008R2/2016', flex: 12 }
]
const appSlkilSet = [
  { title: 'VB6.0', span: '業務にて8年', slider: 8 * 10, flex: 6 },
  { title: 'C#', span: '業務にて5年', slider: 5 * 10, flex: 6 },
  { title: 'C++', span: '大学にて2年', slider: 2 * 10, flex: 6 },
  { title: 'JAVA', span: '大学にて1年', slider: 1 * 10, flex: 6 },
  { title: 'Python', span: 'プライベートにて半年', slider: 0.5 * 10, flex: 6 },
  { title: 'HTML/CSS', span: '業務にて2年', slider: 2 * 10, flex: 6 },
  { title: 'Javascript/Typescript', span: '業務にて2年', slider: 2 * 10, flex: 6 }
]
const appFramework = [
  { title: '.NET Framework', span: '業務にて5年', slider: 5 * 10, flex: 6 },
  { title: 'Vue.js(v2)/Nuxt.js(v2)', span: '業務にて1年', slider: 1 * 10, flex: 6 },
  { title: 'React(v18)/Next', span: '業務にて1年', slider: 1 * 10, flex: 6 },
  { title: 'FastAPI', span: 'プライベートにて数回', slider: 0.5 * 10, flex: 6 },
  { title: 'Spring', span: 'プライベートにて数回', slider: 0.5 * 10, flex: 6 }
]
const appToolSet = [
  { title: 'VisualSourceSafe', flex: 4 },
  { title: 'Git', flex: 4 },
  { title: 'GitBucket', flex: 4 },
  { title: 'SQLAnywhere', flex: 4 },
  { title: 'PostgreSQL', flex: 4 },
  { title: 'Hyper-V', flex: 4 },
  { title: 'Redmine', flex: 4 }
]
const licenseSet = [
  { title: '普通自動車運転免許', year: '2010年取得', flex: 12 },
  { title: '応用情報技術者試験', year: '2022年秋期　合格', flex: 12 }
]
</script>

<template>
  <v-lazy :min-height="200" :options="{ threshold: 0.5 }" transition="fade-transition">
    <div class="d-flex align-center flex-column">
      <v-card class="mx-auto" width="700">
        <v-card-title class="bg-green-darken-1">開発環境(OS)</v-card-title>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="skill in appEnvironment" :key="skill.title" :cols="skill.flex">
              <v-card>
                <v-card-title>{{ skill.title }}</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-card-title class="bg-green-darken-1">開発言語</v-card-title>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="skill in appSlkilSet" :key="skill.title" :cols="skill.flex">
              <v-card>
                <v-card-title>{{ skill.title }}</v-card-title>
                <v-card-text>{{ skill.span }}</v-card-text>
                <v-progress-linear
                  v-model="skill.slider"
                  :height="5"
                  color="green"
                ></v-progress-linear>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-card-title class="bg-green-darken-1">フレームワーク</v-card-title>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="skill in appFramework" :key="skill.title" :cols="skill.flex">
              <v-card>
                <v-card-title>{{ skill.title }}</v-card-title>
                <v-card-text>{{ skill.span }}</v-card-text>
                <v-progress-linear
                  v-model="skill.slider"
                  :height="5"
                  color="green"
                ></v-progress-linear>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-card-title class="bg-green-darken-1">ツール</v-card-title>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="skill in appToolSet" :key="skill.title" :cols="skill.flex">
              <v-card>
                <v-card-title>{{ skill.title }}</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-card-title class="bg-green-darken-1">保有資格</v-card-title>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="skill in licenseSet" :key="skill.title" :cols="skill.flex">
              <v-card>
                <v-card-title>{{ skill.title }}</v-card-title>
                <v-card-text>{{ skill.year }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </v-lazy>
</template>
