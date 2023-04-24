<script setup lang="ts">
import "@majidh1/jalalidatepicker/dist/jalalidatepicker.min.css";
import "@majidh1/jalalidatepicker/dist/jalalidatepicker.min.js";

(window as any).jalaliDatepicker.startWatch();
// // @ts-expect-error There won't be declaration file for it
import {
  filterFieldProps,
  makeVFieldProps,
} from "vuetify/lib/components/VField/VField";

// @ts-expect-error There won't be declaration file for it
import {
  filterInputProps,
  makeVInputProps,
} from "vuetify/lib/components/VInput/VInput";

// @ts-expect-error There won't be declaration file for it
import { filterInputAttrs } from "vuetify/lib/util/helpers";

const props = defineProps({
  ...makeVInputProps({
    hideDetails: "auto",
  }),
  ...makeVFieldProps({
    variant: "outlined",
    color: "primary",
  }),
});

const emit = defineEmits<Emit>();

interface Emit {
  (e: "update:modelValue", val: string): void;
  (e: "click:clear", el: MouseEvent): void;
}

const attrs = useAttrs();

const [rootAttrs, compAttrs] = filterInputAttrs(attrs);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [{ modelValue: _, ...inputProps }] = filterInputProps(props);
const [fieldProps] = filterFieldProps(props);

const refFlatPicker = ref();
const { focused } = useFocus(refFlatPicker);
const isCalendarOpen = ref(false);
const isInlinePicker = ref(true);

// v-field clear prop
const onClear = (el: MouseEvent) => {
  el.stopPropagation();

  nextTick(() => {
    emit("update:modelValue", "");

    emit("click:clear", el);
  });
};
const valueChanged = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>

<template>
  <!-- v-input -->
  <VInput
    v-bind="{ ...inputProps, ...rootAttrs }"
    :model-value="modelValue"
    :hide-details="props.hideDetails"
    class="position-relative"
  >
    <template #default="{ isDirty, isValid, isReadonly }">
      <!-- v-field -->
      <VField
        v-bind="fieldProps"
        :active="focused || isDirty.value || isCalendarOpen"
        :focused="focused || isCalendarOpen"
        role="textbox"
        :dirty="isDirty.value || props.dirty"
        :error="isValid.value === false"
        @click:clear="onClear"
      >
        <template #default="{ props: vFieldProps }">
          <div v-bind="vFieldProps">
            <input
              v-if="isInlinePicker"
              :value="modelValue"
              class="flat-picker-custom-style w-full h-full outline-none b-none"
              type="text"
              data-jdp
              @change="valueChanged"
            />
          </div>
        </template>
      </VField>
    </template>
  </VInput>
</template>
