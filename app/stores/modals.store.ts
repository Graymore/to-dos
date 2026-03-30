import type { TModal } from '~/types/shared/modals';

export const useModalsStore = defineStore('modals', () => {
  const activeModal = ref<TModal>();

  const setActiveModal = (modal: TModal) => {
    activeModal.value = modal;
  }

  const closeModals = () => {
    activeModal.value = undefined;
  }

  return {
    activeModal,
    setActiveModal,
    closeModals
  }
});