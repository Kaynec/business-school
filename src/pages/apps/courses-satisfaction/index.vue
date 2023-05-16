<script setup lang="ts">
import avatar1 from "@images/avatars/avatar-1.png";
import { ref } from "vue";

const avatars = [avatar1];

const selectedOptions = ref(["Alabama"]);

const states = ["Alabama", "Alaska", "American Samoa"];
</script>

<template>
  <VSelect
    v-model="selectedOptions"
    :items="states"
    label="دوره ها"
    style="border-radius: 250px; margin-block-end: 2rem"
    class="rounded-xl"
  />

  <VRow>
    <VCol cols="12" md="4" lg="3">
      <VCard class="rounded-xl gap-5 !flex flex-col">
        <!-- <VImg :src="avatar1" height="201" cover /> -->

        <VCardItem class="d-flex justify-center">
          <VProgressCircular
            :rotate="90"
            :size="125"
            :width="7"
            model-value="75"
            color="primary"
          >
            <img
              :src="avatar1"
              style="border-radius: 999rem; inline-size: 90%; object-fit: cover"
            />
          </VProgressCircular>
        </VCardItem>

        <div class="!flex flex-col justify-center align-center gap-2">
          <span>کددوره : 414</span>
          <h2 class="peyda" style="color: white">Self leadership</h2>
        </div>

        <!--  -->
        <div class="flex gap-3 justify-center">
          <VBtn
            color="primary"
            variant="outlined"
            class="rounded-lg basis-45% peyda"
            style="block-size: 2.75rem; padding-inline: 4rem"
            @click="
              $router.push({
                name: 'apps-courses-satisfaction-id',
                params: {
                  id: 0,
                },
              })
            "
          >
            گفتگو با کارشناس
          </VBtn>
          <VBtn
            class="rounded-lg basis-45% peyda"
            style="block-size: 2.75rem; padding-inline: 4rem"
            color="primary"
            @click="
              $router.push({
                name: 'apps-courses-description',
              })
            "
          >
            جزئیات دوره
          </VBtn>
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
i.v-icon.v-icon {
  color: red;
}

.avatar-center {
  position: absolute;
  border: 5px solid rgb(var(--v-theme-surface));
  inset-block-start: -2rem;
  inset-inline-start: 1rem;
}

// membership pricing
.member-pricing-bg {
  position: relative;
  background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}

.membership-pricing {
  sup {
    inset-block-start: 9px;
  }
}
</style>
