<template>
  <div class="search-form">
    <el-form label-width="100px" size="large">
      <el-row :gutter="20">
        <template v-for="formItem in searchFormConfig" :key="formItem.field">
          <el-col :span="8">
            <el-form-item :label="formItem.label">
              <!-- input或password -->
              <template
                v-if="formItem.type === 'input' || formItem.type === 'password'"
              >
                <el-input
                  :model-value="modelValue[`${formItem.field}`]"
                  :placeholder="formItem.placeholder"
                  :show-password="formItem.type === 'password'"
                  @update:modelValue="handleValueChange($event, formItem.field)"
                />
              </template>
              <!-- select -->
              <template v-else-if="formItem.type === 'select'">
                <el-select
                  :model-value="modelValue[`${formItem.field}`]"
                  class="m-2"
                  placeholder="Select"
                  size="large"
                  @update:modelValue="handleValueChange($event, formItem.field)"
                >
                  <el-option
                    v-for="optionItem in formItem.options"
                    :key="optionItem.value"
                    :label="optionItem.title"
                    :value="optionItem.value"
                  />
                </el-select>
              </template>

              <!-- datepicker -->
              <template v-else-if="formItem.type === 'datepicker'">
                <el-date-picker
                  :end-placeholder="formItem.otherOptions.endPlaceholder"
                  :model-value="modelValue[`${formItem.field}`]"
                  :range-separator="formItem.otherOptions.rangeSeparator"
                  :start-placeholder="formItem.otherOptions.startPlaceholder"
                  :type="formItem.otherOptions.type"
                  size="large"
                  @update:modelValue="handleValueChange($event, formItem.field)"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
import { ElForm } from 'element-plus'

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  searchFormConfig: {
    type: Array,
    default: () => [],
    required: true
  },
  modelValue: {
    type: Object,
    required: true
  }
})

//双向数据绑定
function handleValueChange(value: any, field: string) {
  emits('update:modelValue', { ...props.modelValue, [field]: value })
}
</script>
<style scoped></style>
