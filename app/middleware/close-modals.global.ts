export default defineNuxtRouteMiddleware(() => {
  useModalsStore().closeModals();
});