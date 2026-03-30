<script setup lang="ts">
import { BaseButton } from '~/components/base';
import { UiModal } from '~/components/ui';
import type { ConfirmModalProps } from '~/types/components/shared/modals/confirm-modal';

defineProps<ConfirmModalProps>();

const emit = defineEmits<{
  'cancel': [];
  'confirm': [];
}>()
</script>

<template>
  <ui-modal
    :title="$t('confirm_action')"
    :name="name"
  >
    <div class="confirm-modal">
      <span>{{ label }}</span>

      <div class="confirm-modal-actions">
        <base-button
          variant="secondary"
          @click="emit('cancel')"
        >
          {{ $t('cancel') }}
        </base-button>

        <base-button @click="emit('confirm')">
          {{ $t('confirm') }}
        </base-button>
      </div>
    </div>
  </ui-modal>
</template>

<style scoped lang="scss">
@use 'assets/mixins/flex';
@use 'assets/mixins/font';
@use 'assets/mixins/device';

.confirm-modal {
  @include flex.column;
  min-width: 400px;

  @include device.phone {
    min-width: unset;
  }
}

.confirm-modal span {
  padding: 20px 0;
  @include font.inherit-500;
}

.confirm-modal-actions {
  @include flex.inline-right;
  margin-top: 30px;
  gap: 10px;
}
</style>