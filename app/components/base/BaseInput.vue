<script setup lang="ts">
import type { BaseInputProps } from '~/types/components/base/base-input';

const {
  placeholder = '',
  autofocus = false
} = defineProps<BaseInputProps>();

const model = defineModel<string>();

const emit = defineEmits<{
  'enter': []
}>();

const inputRef = useTemplateRef('input');

const onEnter = () => emit('enter');

onMounted(() => {
  if (autofocus) {
    inputRef.value?.focus();
  }
})
</script>

<template>
  <input
    ref="input"
    v-model="model"
    class="base-input"
    type="text"
    :placeholder="placeholder"
    @keyup.enter="onEnter"
  >
</template>

<style scoped lang="scss">
@use 'assets/mixins/font';
@use 'assets/vars/color';

.base-input {
  @include font.inherit-500;
  border: 1px solid color.$dirty;
  padding: 10px;
  border-radius: 10px;

  &:focus {
    border-color: color.$primary;
  }
}
</style>