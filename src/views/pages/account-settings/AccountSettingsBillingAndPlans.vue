<script lang="ts" setup>
import stateAndCities from "@/@fake-db/apps/cities";
import avatar1 from "@images/avatars/avatar-1.png";

const accountDataLocal = ref({
  avatarImg: avatar1,
  state: "تهران",
  city: "تهران",
  address: "آیت الله کاشانی، خیابان حبیب الله زاده، پلاک، 18، واحد4",
  fixed_phone: "02144964734",
  phone: "09122821265",
  email: "AliakbarBabaei@gmail.com",
});

const refInputEl = ref<HTMLElement>();

// changeAvatar function
const changeAvatar = (file: Event) => {
  const fileReader = new FileReader();
  const { files } = file.target as HTMLInputElement;

  if (files && files.length) {
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = () => {
      if (typeof fileReader.result === "string")
        accountDataLocal.value.avatarImg = fileReader.result;
    };
  }
};

// reset avatar image
const resetAvatar = () => {
  accountDataLocal.value.avatarImg = accountDataLocal.value.avatarImg;
};
//
const currentCitiesOfState = computed(() => {
  return (stateAndCities as any)[accountDataLocal.value.state];
});
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Account Details">
        <VCardText class="d-flex">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            size="120"
            class="me-6"
            :image="accountDataLocal.avatarImg"
          />

          <!-- 👉 Upload Photo -->
          <form
            ref="refForm"
            class="!flex flex-col justify-center w-full gap-3"
          >
            <div class="d-flex flex-wrap gap-4">
              <VBtn
                class="rounded-15px"
                color="primary"
                @click="refInputEl?.click()"
              >
                <VIcon icon="mdi-cloud-upload-outline" class="d-sm-none" />
                <span class="d-none d-sm-block peyda">بارگذاری عکس</span>
              </VBtn>

              <input
                ref="refInputEl"
                type="file"
                name="file"
                accept=".jpeg,.png,.jpg,GIF"
                hidden
                @input="changeAvatar"
              />

              <VBtn
                class="rounded-15px"
                type="reset"
                color="error"
                variant="tonal"
                @click="resetAvatar"
              >
                <span class="d-none d-sm-block peyda">حذف تصویر</span>
                <VIcon icon="mdi-refresh" class="d-sm-none" />
              </VBtn>
            </div>

            <p class="mb-0 peyda">PNG یا JPEG مجاز است. حداکثر اندازه 800K</p>
          </form>
        </VCardText>

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <VCol cols="12" md="6">
                <VSelect
                  v-model="accountDataLocal.state"
                  label="استان"
                  :items="Object.keys(stateAndCities)"
                />
              </VCol>
              <VCol cols="12" md="6">
                <VSelect
                  v-model="accountDataLocal.city"
                  label="شهر"
                  :items="currentCitiesOfState"
                />
              </VCol>

              <!-- 👉 Last Name -->
              <VCol md="6" cols="12">
                <VTextField v-model="accountDataLocal.address" label="آدرس" />
              </VCol>
              <VCol cols="12" md="6">
                <VTextField
                  v-model="accountDataLocal.fixed_phone"
                  label="تلفن ثابت"
                  type="tel"
                />
              </VCol>

              <!-- 👉 Phone -->
              <VCol cols="12" md="6">
                <VTextField
                  v-model="accountDataLocal.phone"
                  label="تلفن "
                  type="tel"
                />
              </VCol>

              <VCol cols="12" md="6">
                <VTextField v-model="accountDataLocal.email" label="ایمیل" />
              </VCol>

              <!-- 👉 Form Actions -->
              <VCol cols="12" class="d-flex flex-wrap gap-4">
                <VBtn class="rounded-15px peyda">ثبت اطلاعات</VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
