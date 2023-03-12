<script setup lang="ts">
const appSlkilSet = [
  { title: 'C#', span: '3years', flex: 6 },
  { title: 'VB6.0', span: '3years', flex: 6 },
  { title: 'VB6.0', span: '3years', flex: 6 },
  { title: 'VB6.0', span: '3years', flex: 6 }
]
</script>

<template>
  <div class="d-flex align-center flex-column">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="skill in appSlkilSet" :key="skill.title" :cols="skill.flex">
          <v-card>
            <v-card-title>{{ skill.title }}</v-card-title>
            <v-card-text>{{ skill.span }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>
              <v-btn size="small" variant="text" icon="mdi-bookmark"></v-btn>
              <v-btn
                size="small"
                color="surface-variant"
                variant="text"
                icon="mdi-share-variant"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
