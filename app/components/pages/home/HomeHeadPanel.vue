<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiPageHead } from '~/components/ui';

const { t } = useI18n();

const notesStore = useNotesStore();

const { checkedNotes, notes } = storeToRefs(notesStore);
const { toggleCheckedNotes } = notesStore;

const toggleNotesText = computed(
  () => !checkedNotes.value.length ? t('select_all') : t('unselect_all')
);

const toggleButtonDisabled = computed(() => !notes.value.length);
</script>

<template>
  <ui-page-head
    :title="$t('my_notes')"
    :button-text="toggleNotesText"
    :button-disabled="toggleButtonDisabled"
    @on-button-click="toggleCheckedNotes"
  />
</template>