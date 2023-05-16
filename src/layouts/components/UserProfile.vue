<script setup lang="ts">
import { initialAbility } from "@/plugins/casl/ability";
import { useAppAbility } from "@/plugins/casl/useAppAbility";

const router = useRouter();
const ability = useAppAbility();
const userData = JSON.parse(localStorage.getItem("userData") || "null");

const logout = () => {
  // Remove "userData" from localStorage
  localStorage.removeItem("userData");

  // Remove "accessToken" from localStorage
  localStorage.removeItem("accessToken");

  // Redirect to login page
  router.push("/login").then(() => {
    // ℹ️ We had to remove abilities in then block because if we don't nav menu items mutation is visible while redirecting user to login page
    // Remove "userAbilities" from localStorage
    localStorage.removeItem("userAbilities");

    // Reset ability to initial ability
    ability.update(initialAbility);
  });
};
</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="2"
    offset-y="2"
    color="success"
    bordered
    @click="$router.push('/pages/account-settings/account')"
  >
    <VAvatar
      class="cursor-pointer max-w-7 max-h-7 aspect-1"
      color="primary"
      variant="tonal"
      @click="$router.push('/pages/account-settings/account')"
    >
      <VImg v-if="userData && userData.avatar" :src="userData.avatar" />
      <VIcon v-else icon="mdi-account-outline" />
    </VAvatar>
  </VBadge>
</template>
