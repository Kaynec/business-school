<script lang="ts" setup>
import avatar1 from "@images/avatars/avatar-1.png";

const show1 = ref(false);

const accountDataLocal = ref({
  avatarImg: avatar1,
  old_password: "",
  new_password: "",
  new_repassword: "",
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
            class="d-flex flex-column justify-center w-full gap-3"
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
                <VTextField
                  v-model="accountDataLocal.old_password"
                  :append-inner-icon="
                    show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
                  "
                  :rules="[rules.required]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="رمز عبور فعلی"
                  @click:append-inner="show1 = !show1"
                />
              </VCol>
            </VRow>
            <VRow>
              <!-- 👉 Last Name -->
              <VCol md="6" cols="12">
                <VTextField
                  v-model="accountDataLocal.new_password"
                  :append-inner-icon="
                    show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
                  "
                  :rules="[rules.required]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="رمز عبور جدید"
                  @click:append-inner="show1 = !show1"
                />
              </VCol>
              <VCol cols="12" md="6">
                <VTextField
                  v-model="accountDataLocal.new_repassword"
                  :append-inner-icon="
                    show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
                  "
                  :rules="[rules.required, rules.sameAs]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="تکرار رمز عبور جدید"
                  hint="باید با رمز جدید یکی باشد"
                  @click:append-inner="show1 = !show1"
                />
              </VCol>

              <VCol>
                <div>
                  <span class="text-3xl mb-5 inline-block peyda">
                    الزامات رمز عبور:
                  </span>
                  <VList class="bg-transparent gap-4 flex flex-col">
                    <span class="relative pr-4">
                      <span
                        class="absolute right-0 top-50% w-5px h-5px rounded-full bg-white"
                      >
                      </span>
                      رمز عبور باید بیشتر از 8 کاراکتر باشد.
                    </span>
                    <span class="relative pr-4">
                      <span
                        class="absolute right-0 top-50% w-5px h-5px rounded-full bg-white"
                      >
                      </span>
                      حداقل از یک نماد و عدد استفاده کنید.
                    </span>
                    <span class="relative pr-4">
                      <span
                        class="absolute right-0 top-50% w-5px h-5px rounded-full bg-white"
                      >
                      </span>
                      حداقل از یک کاراکتر کوچک و یک کاراکتر بزرگ استفاده کنید.
                    </span>
                  </VList>
                </div>
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
