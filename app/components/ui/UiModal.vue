<script setup lang="ts">
import { UiIcon } from '~/components/ui';
import type { UiModalProps } from '~/types/components/ui/ui-modal';

const { 
  name, 
  closable = true 
} = defineProps<UiModalProps>();

const emit = defineEmits<{
  'opened': [];
  'closed': [];
}>();

const modalsStore = useModalsStore();
const { activeModal } = storeToRefs(modalsStore);
const { closeModals } = modalsStore;

const isActive = computed(() => name === activeModal.value);

watch(() => isActive.value, value => value ? emit('opened') : emit('closed'));
</script>

<template>
  <teleport to="body" :disabled="!isActive">
    <div
      v-if="isActive"
      class="ui-modal"
    >
      <div class="ui-modal__window">
        <ui-icon
          v-if="closable"
          class="ui-modal__close"
          name="close"
          @click="closeModals"
        />

        <span 
          v-if="title"
          class="ui-modal__title"
        >
          {{ title }}
        </span>

        <slot />
      </div>
    </div>
  </teleport>
</template>

<style scoped lang="scss">
@use 'assets/mixins/flex';
@use 'assets/mixins/device';
@use 'assets/mixins/font';
@use 'assets/mixins/grid';
@use 'assets/vars/color';

.ui-modal {
  @include flex.center;
  @include grid.z-global;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, .6);

  &__window {
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    position: relative;

    @include device.phone {
      padding: 20px;
      border-radius: 0;
      height: 100%;
      width: 100%;
    }
  }

  &__title {
    @include font.high;
    color: black;
  }

  &__close {
    color: color.$gray;
    width: 26px;
    height: 26px;
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
  }

  &__close:hover {
    color: color.$gray-active;
  }
}
</style>