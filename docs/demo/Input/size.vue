<script setup>
import Input from '@/components/Input/Input.vue'
import { ref } from 'vue'
const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
</script>

<template>
  <div class="show">
    <Input size="large" placeholder="大的input" v-model="val1"></Input>
    <Input size="large" placeholder="普通的input" v-model="val2"></Input>
    <Input size="small" placeholder="小的input" v-model="val3"></Input>
  </div>
</template>
<style scoped>
.show {
  display: flex;
  align-items: center;
}
</style>
