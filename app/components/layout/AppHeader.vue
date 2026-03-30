<template>
  <header class="app-header">
    <div class="app-header__content">
      <nuxt-link
        class="app-header__link"
        to="/"
      >
        To-dos App
      </nuxt-link>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use 'assets/mixins/flex';
@use 'assets/mixins/font';
@use 'assets/vars/global';
@use 'assets/vars/color';

.app-header {
  background-color: #f5f0ff;
  padding: 10px 20px;
  width: 100%;

  &__content {
    @include flex.inline;
    max-width: global.$app_max_content_width;
    margin: 0 auto;
    width: 100%;
  }

  &__link {
    @include font.middle;
    color: color.$primary;
    text-transform: uppercase;
  }
}
</style>