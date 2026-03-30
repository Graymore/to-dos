import { createI18n } from 'vue-i18n';
import ru from '~/i18n/ru';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'en',
    messages: { ru },
  });

  vueApp.use(i18n);
});