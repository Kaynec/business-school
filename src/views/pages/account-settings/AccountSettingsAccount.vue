<script setup lang="ts">
import img1 from "@/assets/images/svg/profile/1.svg";
import img2 from "@/assets/images/svg/profile/2.svg";
import img3 from "@/assets/images/svg/profile/3.svg";

import Connection from "../user-profile/profile/Connection.vue";
import UserProfileHeader from "../user-profile/UserProfileHeader.vue";
</script>

<template>
  <div>
    <UserProfileHeader class="mb-5" />
    <VRow class="justify-end">
      <VCol cols="12" md="4">
        <Connection
          :connections-data="[
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img1,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img2,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img3,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img1,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img2,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img3,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img1,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img2,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img3,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img1,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img2,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img3,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img1,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img2,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img3,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img1,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img2,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img3,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img1,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img2,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img3,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img1,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img2,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img3,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img1,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img2,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img3,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img1,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img2,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img3,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img1,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img2,
            },
            {
              name: 'دکتر علی ناصر حجتی، انتشار پست',
              relativeTime: '13 دقیقه پیش',
              img: img3,
            },
          ]"
        />
      </VCol>
      <VCol cols="12" md="8">
        <VCard class="bg-#3F3F3F rounded-30px">
          <textarea
            bg="#272626"
            w-full
            h-full
            resize-none
            p-6
            bg-color="#323232"
            placeholder="متن خود را بنویسید..."
            class="!placeholder-text-gray-4 !rounded-tr-30px !rounded-tl-30px peyda"
            rows="8"
          ></textarea>

          <div class="flex justify-between px-8 py-5">
            <div class="flex gap-3">
              <VIcon size="35" icon=" mdi-image" />
              <VIcon size="35" icon=" mdi-account" />
              <VIcon size="35" icon=" mdi-map-marker" />
            </div>
            <VBtn class="rounded-20px"> انتشار </VBtn>
          </div>
        </VCard>
      </VCol>
      <VCol cols="12" md="8">
        <VCard class="rounded-30px bg-#3F3F3F p-3" v-auto-animate>
          <VListItem>
            <template #prepend>
              <VAvatar size="65" :image="img1" />
            </template>

            <VListItemTitle class="text-lg font-weight-semibold mb-1 peyda">
              علی بابائی انتشار پست
            </VListItemTitle>
            <VListItemSubtitle> یک ساعت پیش </VListItemSubtitle>
          </VListItem>
          <VListItem>
            <VImg
              src="https://img.freepik.com/free-photo/happy-bunny-with-many-easter-eggs-grass-festive-background-decorative-design_90220-1091.jpg?size=626&ext=jpg"
              size="201"
              cover
              rounded="20px"
            />
          </VListItem>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
