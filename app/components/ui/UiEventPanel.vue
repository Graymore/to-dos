<template>
  <div class="ui-event-panel">
    <div class="ui-event-panel__content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/mixins/grid';
@use 'assets/mixins/flex';
@use 'assets/mixins/device';
@use 'assets/vars/global';

.ui-event-panel {
  @include grid.z-front;
  background-color: white;
  bottom: 0;
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  width: 100%;

  &__content {
    @include flex.inline-right;
    padding: 20px 0;
    margin: 0 auto;
    max-width: global.$app_max_content_width;
    gap: 10px;
    width: 100%;

    @include device.tablet {
      padding: 20px;
    }

    @include device.phone {
      @include flex.column;
      align-items: unset;
      padding: 10px;
      flex-direction: column-reverse;
    }
  }
}
</style>