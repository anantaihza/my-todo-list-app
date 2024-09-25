<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const onLogout = () => {
  localStorage.clear()
  router.push("/login")
}
</script>

<template>
  <div class="navbar bg-base-100 container mx-auto px-10 lg:px-32">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="mr-5 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li class="font-bold">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="font-bold">
            <RouterLink to="/archived">Archived</RouterLink>
          </li>
        </ul>
      </div>
      <a class="text-xl font-black"><span class="text-[#FE9345]">Todo</span> List</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li class="font-bold">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="font-bold">
          <RouterLink to="/archived">Archived</RouterLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="Avatar" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" />
          </div>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><button @click="onLogout">Logout</button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>