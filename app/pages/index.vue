<script setup lang="ts">
import { HomeEventPanel, HomeHeadPanel, HomeNoteList } from '~/components/pages/home';
</script>

<template>
  <div class="page">
    <home-head-panel />

    <div class="page__content">
      <home-note-list />
    </div>

    <home-event-panel />
  </div>
</template>

<style scoped lang="scss">
@use 'assets/mixins/page';

@include page.content-center;
</style>