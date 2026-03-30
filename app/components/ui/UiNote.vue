<script setup lang="ts">
import { BaseCheckbox } from '~/components/base';
import { TodoList } from '~/components/shared';
import type { UiNoteProps } from '~/types/components/ui/ui-note';

const { value } = defineProps<UiNoteProps>();

const checkedModel = defineModel<string[]>('checked');

const noteIsChecked = computed(
  () => checkedModel.value && checkedModel.value.includes(value)
);

const noteClasses = computed(() => ({
  'ui-note': true,
  'ui-note--checked': noteIsChecked.value
}));
</script>

<template>
  <div :class="noteClasses">
    <base-checkbox
      v-model="checkedModel" 
      :value="value"
    />

    <nuxt-link 
      class="ui-note__legend"
      :to="url"
    >
      <span>{{ title }}</span>

      <todo-list
        inactive
        :todos="todos"
      />
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/mixins/flex';
@use 'assets/mixins/font';
@use 'assets/vars/color';

.ui-note {
  display: flex;
  padding: 20px;
  border-radius: 15px;
  background-color: #f2f2f2;
  box-shadow: 0 7px 10px rgba(0, 0, 0, .1);
  transition: box-shadow .18s ease;

  &--checked {
    box-shadow: 0 7px 24px rgba(0, 0, 0, .2);
  }

  &__legend {
    @include flex.column;
    padding: 0 20px;
    width: 100%;
  }

  &__legend span {
    @include font.high;
    color: color.$purple;
    line-height: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>