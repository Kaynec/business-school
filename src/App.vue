<script setup lang="ts">
import { useThemeConfig } from "@core/composable/useThemeConfig";
import { hexToRgb } from "@layouts/utils";
import { provide } from "vue";
import { useTheme } from "vuetify";

const showBackgroundImage = ref(false);

function updateBg(boolean: boolean) {
  showBackgroundImage.value = boolean;
}

provide("showBackgroundImage", {
  showBackgroundImage,
  updateBg,
});

const {
  syncInitialLoaderTheme,
  syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme,
  isAppRtl,
} = useThemeConfig();

const { global } = useTheme();

// ℹ️ Sync current theme with initial loader theme
syncInitialLoaderTheme();
syncConfigThemeWithVuetifyTheme();
</script>

<template>
  <VLocaleProvider :rtl="isAppRtl">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp
      :style="`--v-global-theme-primary: ${hexToRgb(
        global.current.value.colors.primary
      )}`"
      relative
    >
      <div class="demo-bg" v-if="showBackgroundImage"></div>
      <RouterView />
    </VApp>
  </VLocaleProvider>
</template>

<style>
.demo-bg {
  position: absolute;
  z-index: -1;
  background: url("@/assets/images/bg/calendar.png");
  background-position: center;
  background-size: cover;
  block-size: auto;
  inline-size: 100%;
  inset: 0;
  inset-block-start: 0;
  inset-inline-start: 0;
  opacity: 0.2;
}

.demo-content {
  position: relative;
}
</style>
