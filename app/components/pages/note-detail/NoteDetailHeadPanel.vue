<script setup lang="ts">
import { UiPageHead } from '~/components/ui';
import { NoteDetailEditModal } from '~/components/pages/note-detail';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const { setActiveModal } = useModalsStore();

const pageHeadTitle = computed(
  () => `${t('my_note')} #${useRoute().params.id}`
);
</script>

<template>
  <note-detail-edit-modal />

  <ui-page-head
    :button-text="$t('edit')"
    :title="pageHeadTitle"
    @on-button-click="setActiveModal('note-edit')"
  />
</template>