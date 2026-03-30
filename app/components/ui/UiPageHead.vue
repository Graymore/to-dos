<script setup lang="ts">
import type { UiPageHeadProps } from '~/types/components/ui/ui-page-head';

const { 
  buttonText,
  buttonDisabled = false 
} = defineProps<UiPageHeadProps>();

const emit = defineEmits<{
  'on-button-click': [];
}>();

const onButtonClick = () => emit('on-button-click');
</script>

<template>
  <div class="ui-page-head">
    <div class="ui-page-head__wrapper">
      <span>
        {{ title }}
      </span>
      
      <base-button
        variant="secondary"
        :disabled="buttonDisabled"
        @click="onButtonClick"
      >
        {{ buttonText }}
      </base-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/mixins/flex';
@use 'assets/mixins/grid';
@use 'assets/mixins/device';
@use 'assets/mixins/font';
@use 'assets/vars/global';

.ui-page-head {
  @include flex.inline-between;
  @include grid.z-front;
  background-color: white;
  position: sticky;
  position: -webkit-sticky;
  top: 0;

  &__wrapper {
    @include flex.inline-between;
    max-width: global.$app_max_content_width;
    margin: 0 auto;
    padding: 15px 0;
    width: 100%;

    @include device.tablet {
      padding: 15px 20px;
    }
  }

  &__wrapper span {
    @include font.title;
    color: black;
  }
}
</style>