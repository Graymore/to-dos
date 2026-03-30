<script setup lang="ts">
import type { BaseCheckboxProps } from '~/types/components/base/base-checkbox';

const {
  variant = 'square',
  value = 'checkbox',
} = defineProps<BaseCheckboxProps>();

const emit = defineEmits<{
  'input': [];
}>();

const model = defineModel<string[]>();

const labelClasses = computed(() => ({
  'base-checkbox__label': true,
  [`base-checkbox__label--${variant}`]: variant
}));
</script>

<template>
  <div class="base-checkbox">
    <input
      :id="value"
      v-model="model" 
      type="checkbox"
      class="base-checkbox__input"
      :value="value"
      :checked="checked"
      @input="emit('input')"
    >

    <label
      :for="value"
      :class="labelClasses"
    >
      <span>
        <svg viewBox="0 0 12 10" height="10px" width="12px">
          <polyline points="1.5 6 4.5 9 10.5 1" />
        </svg>
      </span>
      
      <span v-show="label">
        {{ label }}
      </span>
    </label>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/mixins/flex';
@use 'assets/mixins/font';
@use 'assets/vars/color';

.base-checkbox {
  &__label {
    @include flex.inline;
    cursor: pointer;
    margin: auto;
    user-select: none;
    -webkit-user-select: none;

    &--rounded span:first-child {
      border-radius: 50%;
    }

    &--square span:first-child {
      border-radius: 5px;
    }

    &:hover span:first-child {
      border-color: color.$primary;
      transition: border-color .25s ease;
    }
  }

  &__label span {
    display: inline-block;
    vertical-align: middle;
  }

  &__label span:first-child {
    border: 1px solid color.$dirty;
    position: relative;
    flex-shrink: 0;
    height: 21px;
    width: 21px;
  }

  &__label span:first-child svg {
    position: absolute;
    top: 5px;
    left: 4px;
    fill: none;
    stroke: white;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all .3s ease;
  }

  &__label span:last-child {
    @include font.inherit-500;
    color: black;
    padding: 0 10px;
    word-break: break-word;
  }

  &__input {
    display: none;
    visibility: hidden;
  }

  &__input:checked + &__label span:first-child {
    background: color.$primary;
    border-color: color.$primary;
    transition: background .25s ease;
  }

  &__input:checked + &__label svg {
    stroke-dashoffset: 0;
  }

  &__input:checked + &__label span:last-child {
    text-decoration: line-through;
    color: color.$green;
  }
}
</style>