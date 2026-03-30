<script setup lang="ts">
import { UiModal } from '~/components/ui';
import { BaseInput, BaseButton } from '~/components/base';
import type { TitleModalProps } from '~/types/components/shared/modals/title-modal';

defineProps<TitleModalProps>();

const emit = defineEmits<{
  'onCancel': [];
  'onConfirm': [];
  'onModalOpened': [];
}>();

const { closeModals } = useModalsStore();

const titleModel = defineModel<string>();

const onModalClosed = () => titleModel.value = '';
const onModalOpened = () => emit('onModalOpened'); 
</script>

<template>
  <ui-modal
    :name="name"
    :title="title"
    @closed="onModalClosed"
    @opened="onModalOpened"
  >
    <div class="title-modal">
      <base-input
        v-model="titleModel"
        autofocus
        :placeholder="$t('title')"
        @enter="emit('onConfirm')"
      />

      <div class="title-modal__actions">
        <base-button
          variant="secondary"
          @click="closeModals"
        >
          {{ $t('cancel') }}
        </base-button>

        <base-button
          @click="emit('onConfirm')"
        >
          {{ $t('ok') }}
        </base-button>
      </div>
    </div>
  </ui-modal>
</template>

<style scoped lang="scss">
@use 'assets/mixins/flex';
@use 'assets/mixins/device';

.title-modal {
  @include flex.column;
  margin-top: 20px;
  min-width: 350px;
  gap: 10px;

  @include device.phone {
    min-width: unset;
  }

  &__actions {
    @include flex.inline-right;
    margin-top: 30px;
    gap: 10px;
  }
}
</style>