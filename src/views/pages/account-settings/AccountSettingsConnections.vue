<script lang="ts" setup>
import avatar1 from "@images/avatars/avatar-1.png";

const show1 = ref(false);

const accountDataLocal = ref({
  avatarImg: avatar1,
  file: "",
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
// changeAvatar function
const changeFile = (file: Event) => {
  const fileReader = new FileReader();
  const { files } = file.target as HTMLInputElement;

  if (files && files.length) {
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = () => {
      if (typeof fileReader.result === "string")
        accountDataLocal.value.file = fileReader.result;
    };
  }
};

// reset avatar image
const resetAvatar = () => {
  accountDataLocal.value.avatarImg = accountDataLocal.value.avatarImg;
};
//

const rules = {
  required: (value: string) => !!value || "لطفا رمز عبور خودرا وارد نمایید",
  sameAs: (value: string) =>
    value === accountDataLocal.value.new_password ||
    "تکرار رمز باید با رمز یکی باشد",
};
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
            <VCol>
              <div>
                <span class="text-3xl mb-5 inline-block peyda">
                  الزامات آپلود مدارک:
                </span>
                <VList class="bg-transparent gap-4 !flex flex-col">
                  <span class="relative pr-4">
                    <span
                      class="absolute right-0 top-50% w-5px h-5px rounded-full bg-white"
                    >
                    </span>
                    عکس واضح و با کیفیت اپلود شود.
                  </span>
                  <span class="relative pr-4">
                    <span
                      class="absolute right-0 top-50% w-5px h-5px rounded-full bg-white"
                    >
                    </span>
                    فایل در فرمت های jpg، pdf و png اپلود شود.
                  </span>
                  <span class="relative pr-4">
                    <span
                      class="absolute right-0 top-50% w-5px h-5px rounded-full bg-white"
                    >
                    </span>
                    حداکثر اندازه مجاز 800k
                  </span>
                </VList>
              </div>
            </VCol>
            <VRow class="mt-8">
              <VCol cols="12" md="6">
                <VFileInput
                  label="انتخاب فایل"
                  class="min-h-15"
                  @change="changeFile"
                />
              </VCol>
              <VCol cols="12" md="6">
                <VBtn class="rounded-15px min-h-15 min-w-43"
                  >بارگذاری مدارک</VBtn
                >
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
