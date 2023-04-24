<script lang="ts" setup>
import type { ProfileHeader } from "@/@fake-db/types";
import axios from "@axios";

const profileHeaderData = ref<ProfileHeader>();

const fetchHeaderData = () => {
  axios.get("/pages/profile-header").then((response) => {
    profileHeaderData.value = response.data;
  });
};

fetchHeaderData();
</script>

<template>
  <VCard v-if="profileHeaderData" class="bg-#3F3F3F">
    <VImg
      :src="profileHeaderData.coverImg"
      min-height="125"
      max-height="250"
      cover
    />

    <VCardText class="d-flex flex-sm-row flex-column gap-x-6">
      <VAvatar
        rounded
        size="175"
        :image="profileHeaderData.profileImg"
        class="user-profile-avatar mx-auto rounded-20px"
      />
      <div class="grow min-h-45 !items-end pb-18 justify-start flex">
        <div
          class="!flex flex-col md:flex-row gap-3rem md:gap-7rem lg:gap-10rem md:justify-start items-center"
        >
          <div class="!flex flex-col">
            <span class="text-3xl peyda"> علی بابائی </span>
            <span class="!text-gray-3"> مدیر فنی </span>
          </div>
          <div class="flex gap-5">
            <img
              min-w-15
              src="@/assets/images/svg/profile/designation.svg"
              alt="designation"
            />
            <div class="!flex flex-col">
              <span class="text-3xl peyda"> حوزه فعالیت </span>
              <span class="!text-gray-3"> صنعت آموزش </span>
            </div>
          </div>
          <div class="flex gap-3">
            <img
              min-w-15
              src="@/assets/images/svg/profile/follower.svg"
              alt="designation"
            />
            <div class="!flex flex-col">
              <span class="text-3xl peyda">دنبال کننده</span>
              <span class="!text-gray-3"> 150</span>
            </div>
          </div>
          <div class="flex gap-3">
            <img
              min-w-15
              src="@/assets/images/svg/profile/point.svg"
              alt="designation"
            />
            <div class="!flex flex-col">
              <span class="text-3xl peyda"> امتیاز شما</span>
              <span class="!text-gray-3"> 2563800</span>
            </div>
          </div>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.user-profile-avatar {
  border: 5px solid rgb(var(--v-theme-surface));
  background-color: rgb(var(--v-theme-surface));
  inset-block-start: -3rem;

  .v-img__img {
    border-radius: 0.125rem;
  }
}
</style>
