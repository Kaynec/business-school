<script lang="ts" setup>
import NavBarI18n from '@core/components/I18n.vue';
import { useThemeConfig } from '@core/composable/useThemeConfig';
import type { I18nLanguage } from '@layouts/types';

const { isAppRtl } = useThemeConfig()

const i18nCompLanguages: I18nLanguage[] = [
  {
    label: 'English',
    i18nLang: 'en',
  },
  {
    label: 'French',
    i18nLang: 'fr',
  },
  {
    label: 'Persian',
    i18nLang: 'fa',
  },
]

const handleLangChange = (lang: string) => {
  isAppRtl.value = lang === 'fa'
}
</script>

<template>
  <NavBarI18n
    :languages="i18nCompLanguages"
    @change="handleLangChange"
  />
</template>
