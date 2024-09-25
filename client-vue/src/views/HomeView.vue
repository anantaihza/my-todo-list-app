<script setup>
import CardActive from '@/components/CardActive.vue';
import Navbar from '@/components/Navbar.vue';

</script>

<template>
  <Navbar />
  <div class="container mx-auto px-10 lg:px-32 mt-20">
    <div class="flex gap-5 justify-between">
      <h1 class="font-black text-4xl">Todos</h1>
      <RouterLink to="/add-todo" class="btn bg-[#FE9345] rounded-full text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <span class="text-md">Add Todo</span>
      </RouterLink>
    </div>

    <div class="my-10">
      <CardActive />
      <CardActive />
    </div>


  </div>
</template>

<style scoped></style>