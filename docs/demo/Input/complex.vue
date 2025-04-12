<script setup>
import Input from '@/components/Input/Input.vue'
import Icon from '@/components/Icon/Icon.vue'
import { ref } from 'vue'
const valinput1 = ref('')
const valinput2 = ref('')
</script>

<template>
  <Input placeholder="输入网址" v-model="valinput1">
    <template #prepend>https://</template>
    <template #append>.com</template>
  </Input>
  <Input placeholder="prefix suffix" v-model="valinput2">
    <template #prefix>
      <Icon icon="fa-user" />
    </template>
    <template #suffix>
      <Icon icon="fa-user" />
    </template>
  </Input>
</template>
