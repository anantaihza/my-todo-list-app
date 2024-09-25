<script setup>
import axios from '../config/axiosInstance'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

const router = useRouter()
const email = ref('')
const password = ref('')

const onLogin = async () => {
  try {
    const { data } = await axios({
      method: 'POST',
      url: '/login',
      data: {
        email: email.value,
        password: password.value
      }
    })
    localStorage.setItem('access_token', data.data.access_token)
    toast.info(data.message)
    router.push('/')
  } catch (error) {
    toast.error(error.response.data.message)
  }
}
</script>

<template>
  <main class="min-h-screen w-full flex">
    <section class="w-full lg:w-[50%] flex flex-col justify-center items-center">
      <h1 class="text-4xl font-black text-center">Login</h1>
      <h4 class="text-3xl font-black text-[#FE9345] text-center">Welcome to Todo list</h4>
      <form class="mt-10 w-[60%]" @submit.prevent="onLogin">
        <label class="form-control w-full mb-3">
          <div class="label">
            <span class="label-text font-bold">Email</span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Type here"
            v-model="email"
            class="input input-bordered w-full rounded-full focus:outline-[#FE9345] p-6"
          />
        </label>
        <label class="form-control w-full mb-3">
          <div class="label">
            <span class="label-text font-bold">Password</span>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Type here"
            v-model="password"
            class="input input-bordered w-full rounded-full focus:outline-[#FE9345] p-6"
          />
        </label>

        <button
          type="submit"
          class="btn btn-lg btn-block rounded-full bg-[#FE9345] text-white mt-10"
        >
          Login
        </button>
      </form>
      <p class="mt-5">
        Don't have an account?
        <RouterLink to="/register" class="text-[#FE9345] hover:text-gray-400">Register</RouterLink>
      </p>
    </section>
    <section class="hidden w-full lg:flex lg:w-[50%] justify-center items-center">
      <img class="w-[95%]" src="/Notes-bro.svg" alt="notes image" />
    </section>
  </main>
</template>

<style scoped></style>
