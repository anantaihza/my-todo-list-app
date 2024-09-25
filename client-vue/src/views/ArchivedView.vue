<script setup>
import axios from '../config/axiosInstance'
import { toast } from 'vue3-toastify'
import CardArchived from '@/components/CardArchived.vue'
import Navbar from '@/components/NavbarGlobal.vue'
import { onMounted, ref } from 'vue'

const todosArchived = ref([])
const isLoading = ref(false)

const fetchArchived = async () => {
  try {
    isLoading.value = true
    const { data } = await axios({
      method: 'GET',
      url: '/notes/archived',
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`
      }
    })

    todosArchived.value = data?.data
  } catch (error) {
    toast.info(error.response.data.message)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchArchived()
})

const onDelete = async (note_id) => {
  try {
    const { data } = await axios({
      method: 'DELETE',
      url: `/notes/${note_id}`,
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`
      }
    })

    toast.success(data.message)
    fetchArchived()
  } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)
  }
}
</script>

<template>
  <Navbar />
  <div class="container mx-auto px-10 lg:px-32 mt-20">
    <div class="flex gap-5 justify-between">
      <h1 class="font-black text-4xl">Archived Todos</h1>
    </div>
    <div class="breadcrumbs text-sm">
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>Archived</li>
      </ul>
    </div>

    <div v-if="isLoading">
      <div class="w-full h-96 flex justify-center items-center">
        <span class="loading loading-spinner loading-lg"></span>
      </div>
    </div>
    <div v-else>
      <div v-if="!todosArchived.length">
        <div class="flex flex-col justify-center items-center mt-10">
          <img class="w-[60%] lg:w-[40%] xl:w-[30%]" src="/Notebook-bro.svg" alt="" />
          <h3 class="font-bold text-xl text-gray-400">Don't have a todo list yet</h3>
        </div>
      </div>
      <div v-else>
        <div v-for="todo in todosArchived" :key="todo.id" class="my-10">
          <CardArchived :todo="todo" :onDelete="onDelete" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
