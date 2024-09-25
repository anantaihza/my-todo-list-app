<script setup>
import Navbar from '@/components/Navbar.vue';
import axios from '../config/axiosInstance';
import { toast } from 'vue3-toastify';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const title = ref("")
const body = ref("")

const addTodo = async () => {
  try {
    const { data } = await axios({
      method: "POST",
      url: "/notes",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`
      },
      data: {
        title: title.value,
        body: body.value
      }
    })

    toast.success(data.message)
    router.push("/")
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
      <h1 class="font-black text-4xl">Add Todo</h1>
    </div>
    <div class="breadcrumbs text-sm">
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>Add Todo</li>
      </ul>
    </div>
    <form class="mt-10" @submit.prevent="addTodo">
      <label class="form-control w-full mb-3">
        <div class="label">
          <span class="label-text">Title</span>
        </div>
        <input type="text" placeholder="Type here" v-model="title"
          class="input input-bordered w-full rounded-full focus:outline-[#FE9345] p-6" />
      </label>
      <label class="form-control mb-3">
        <div class="label">
          <span class="label-text">Description</span>
        </div>
        <textarea class="textarea textarea-bordered h-24 rounded-2xl focus:outline-[#FE9345] px-5 py-3"
          placeholder="Description todo" v-model="body"></textarea>
      </label>

      <div class="flex justify-end">
        <button type="submit" class="btn btn-lg rounded-full bg-[#FE9345] text-white text-md mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>

          <span>Add</span>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>