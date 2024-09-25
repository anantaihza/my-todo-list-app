<script setup>
import CardArchived from '@/components/CardArchived.vue';
import Navbar from '@/components/Navbar.vue';

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

    <div class="my-10">
      <CardArchived />
    </div>


  </div>
</template>

<style scoped></style>