<script setup lang="ts">
import type { BaseButtonProps } from '~/types/components/base/base-button';

const { 
  variant = 'primary',
  disabled = false
} = defineProps<BaseButtonProps>();

const buttonClasses = computed(() => ({
  'base-button': true,
  'base-button--disabled': disabled,
  [`base-button--${variant}`]: variant
}));
</script>

<template>
  <button
    :class="buttonClasses"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use 'assets/mixins/font';
@use 'assets/mixins/device';
@use 'assets/vars/color';

.base-button {
  @include font.inherit-500;
  border-radius: 10px;
  padding: 10px 15px;
  cursor: pointer;

  @include device.phone {
    padding: 8px 10px;
  }

  &--disabled {
    opacity: .5;
    pointer-events: none;
  }

  &--primary {
    background-color: color.$primary;
    color: #fff;
  }

  &--primary:hover {
    background-color: color.$primary-active;
  }

  &--secondary {
    background-color: color.$secondary;
    color: black;
  }

  &--secondary-red {
    background-color: color.$secondary;
    color: red;
  }

  &--secondary:hover {
    background-color: color.$secondary-active;
  }
}
</style>