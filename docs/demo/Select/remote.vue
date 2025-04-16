<script setup>
import Select from '@/components/Select/Select.vue'
import { ref, computed } from 'vue'
import axios from 'axios'
const test2 = ref('')
const handleRemote = (query) => {
  if (!query) return Promise.resolve([])
  else {
    //axios在返回值外包装了一层data
    return axios.get(`https://api.github.com/search/repositories?q=${query}`).then((res) => {
      return res.data.items.slice(0, 10).map((item) => ({ label: item.name, value: item.node_id }))
    })
  }
}
</script>
<template>
  <Select
    v-model="test2"
    remote
    placeholder="远程请求"
    :remote-method="handleRemote"
    filterable
  ></Select>
</template>
