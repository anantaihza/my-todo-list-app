<script setup>
import axios from '../config/axiosInstance'
import CardActive from '@/components/CardActive.vue'
import Navbar from '@/components/NavbarGlobal.vue'
import { onMounted, ref } from 'vue'
import { toast } from 'vue3-toastify'

const todos = ref([])

const fetchTodo = async () => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: '/notes',
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`
      }
    })

    todos.value = data?.data
  } catch (error) {
    toast.error(error.response.data.message)
  }
}

onMounted(() => {
  fetchTodo()
})

const onDone = async (note_id) => {
  try {
    const { data } = await axios({
      method: 'PATCH',
      url: `/notes/${note_id}/archive`,
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`
      }
    })

    toast.success(data.message)
    fetchTodo()
  } catch (error) {
    toast.error(error.response.data.message)
  }
}

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
    fetchTodo()
  } catch (error) {
    toast.error(error.response.data.message)
  }
}
</script>

<template>
  <Navbar />
  <div class="container mx-auto px-10 lg:px-32 mt-20">
    <div class="flex gap-5 justify-between">
      <h1 class="font-black text-4xl">Todos</h1>
      <RouterLink to="/add-todo" class="btn bg-[#FE9345] rounded-full text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <span class="text-md">Add Todo</span>
      </RouterLink>
    </div>

    <div v-if="!todos.length">
      <div class="flex flex-col justify-center items-center mt-10">
        <img class="w-[60%] lg:w-[40%] xl:w-[30%]" src="/Notebook-bro.svg" alt="" />
        <h3 class="font-bold text-xl text-gray-400">Don't have a todo list yet</h3>
      </div>
    </div>
    <div v-else>
      <div v-for="todo in todos" :key="todo.id" class="my-10">
        <CardActive :todo="todo" :onDone="onDone" :onDelete="onDelete" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
