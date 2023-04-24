<script lang="ts" setup>
import AccountSettingPassword from "@/views/pages/account-settings/AccountSettingPassword.vue";
import AccountSettingPersonInfo from "@/views/pages/account-settings/AccountSettingPersonInfo.vue";
import AccountSettingWork from "@/views/pages/account-settings/AccountSettingWork.vue";
import AccountSettingsAccount from "@/views/pages/account-settings/AccountSettingsAccount.vue";
import AccountSettingsBillingAndPlans from "@/views/pages/account-settings/AccountSettingsBillingAndPlans.vue";
import AccountSettingsConnections from "@/views/pages/account-settings/AccountSettingsConnections.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const activeTab = ref(route.params.tab);

// tabs
const tabs = [
  { title: "پروفایل کاربری", icon: "mdi-account-outline", tab: "account" },
  { title: "اطلاعات هویتی", icon: "mdi-account-question", tab: "security" },
  { title: "اطلاعات تماس", icon: "mdi-phone", tab: "billing-plans" },
  { title: "اطلاعات محل کار", icon: "mdi-finance", tab: "notification" },
  { title: "آپلود مدارک", icon: "mdi-folder-plus-outline", tab: "connection" },
  { title: "تنظیمات امنیتی", icon: "mdi-lock", tab: "password" },
];
</script>

<template>
  <div>
    <VTabs v-model="activeTab" class="v-tabs-pill">
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'pages-account-settings-tab', params: { tab: item.tab } }"
        class="mx-4 !rounded-2.4rem"
      >
        <VIcon size="20" start :icon="item.icon" />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-5 disable-tab-transition"
      :touch="false"
    >
      <!-- Account -->
      <VWindowItem value="account">
        <AccountSettingsAccount />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="security">
        <AccountSettingPersonInfo />
      </VWindowItem>

      <!-- Billing -->
      <VWindowItem value="billing-plans">
        <AccountSettingsBillingAndPlans />
      </VWindowItem>

      <!-- Notification -->
      <VWindowItem value="notification">
        <AccountSettingWork />
      </VWindowItem>

      <!-- Connections -->
      <VWindowItem value="connection">
        <AccountSettingsConnections />
      </VWindowItem>
      <VWindowItem value="password">
        <AccountSettingPassword />
      </VWindowItem>
    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: pages-account-settings-tab
</route>
