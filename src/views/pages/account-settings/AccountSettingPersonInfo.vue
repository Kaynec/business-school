<script lang="ts" setup>
import avatar1 from "@images/avatars/avatar-1.png";
const accountDataLocal = ref({
  avatarImg: avatar1,
  firstName: "john",
  lastName: "Doe",
  father_name: "johnDoe@example.com",
  birth_date: "1401/05/21",
  place_of_birth: "Pixinvent",
  student_number: "20156138",
  persion_id: "123 Main St, New York, NY 10001",
  name_in_english: "John Doe",
  national_code: "12345678910",
  gender: "مرد",
  progress: 68,
});

const refInputEl = ref<HTMLElement>();

const isConfirmDialogOpen = ref(false);
const isAccountDeactivated = ref(false);

const validateAccountDeactivation = [
  (v: string) => !!v || "Please confirm account deactivation",
];

const resetForm = () => {
  accountDataLocal.value = structuredClone(accountData);
};

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
            <!--  -->
            <div class="flex grow items-center gap-2">
              <VProgressLinear
                v-model="accountDataLocal.progress"
                rounded="xl"
                color="#52AE32"
                height="15"
                w="50%"
                max-w="130"
              />
              <span>
                شما 68% درصد از اطلاعات پروفایل خود را تکمیل کرده اید و 5
                امتیازگرفتید.
              </span>
            </div>
          </form>
        </VCardText>

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <!-- 👉 First Name -->
              <VCol md="6" cols="12">
                <VTextField v-model="accountDataLocal.firstName" label="نام" />
              </VCol>

              <!-- 👉 Last Name -->
              <VCol md="6" cols="12">
                <VTextField
                  v-model="accountDataLocal.lastName"
                  label="نام خانوادگی"
                />
              </VCol>

              <!-- 👉 Email -->
              <VCol cols="12" md="6">
                <VTextField
                  v-model="accountDataLocal.father_name"
                  label="نام پدر"
                />
              </VCol>

              <!-- 👉 Organization -->
              <VCol cols="12" md="6">
                <AppDateTimePicker
                  label="تاریخ تولد"
                  v-model="accountDataLocal.birth_date"
                  :config="{
                    dateFormat: 'Y/m/d',
                  }"
                />
              </VCol>

              <!-- 👉 Phone -->
              <VCol cols="12" md="6">
                <VTextField
                  v-model="accountDataLocal.national_code"
                  label="کد ملی"
                />
              </VCol>

              <!-- 👉 Address -->
              <VCol cols="12" md="6">
                <VTextField
                  v-model="accountDataLocal.student_number"
                  label="شماره دانشجویی"
                />
              </VCol>

              <!-- 👉 State -->
              <VCol cols="12" md="6">
                <VTextField
                  v-model="accountDataLocal.persion_id"
                  label="شماره شناسنامه"
                />
              </VCol>

              <!-- 👉 Zip Code -->
              <VCol cols="12" md="6">
                <VSelect
                  v-model="accountDataLocal.place_of_birth"
                  label="محل تولد"
                  :items="['USA', 'Canada', 'UK', 'India', 'Australia']"
                />
              </VCol>

              <!-- 👉 Country -->
              <VCol cols="12" md="6">
                <VSelect
                  v-model="accountDataLocal.gender"
                  label="مرد"
                  :items="['مرد', 'زن']"
                />
              </VCol>

              <!-- 👉 Language -->
              <VCol cols="12" md="6">
                <VTextField
                  v-model="accountDataLocal.name_in_english"
                  label="نام و نام خانوادگی به انگلیسی"
                />
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

    <VCol cols="12"> </VCol>
  </VRow>

  <!-- 👉 Confirm Dialog -->
  <ConfirmDialog
    v-model:isDialogVisible="isConfirmDialogOpen"
    confirmation-msg="Are you sure you want to deactivate your account?"
  />
</template>
