<script setup>
import { formatDate } from '@/helpers/formatDate'

defineProps({
  todo: Object,
  onDone: Function,
  onDelete: Function
})
</script>

<template>
  <div
    class="bg-[#EFF6FF] px-10 py-8 rounded-2xl flex flex-col lg:flex-row gap-5 justify-between items-center"
  >
    <div class="w-full lg:w-2/3">
      <h2 class="font-bold text-2xl">{{ todo?.title }}</h2>
      <h6 class="text-gray-500 font-medium">{{ formatDate(todo?.createdAt) }}</h6>
      <p class="mt-3">{{ todo?.body }}</p>
    </div>
    <div class="flex gap-4 w-full lg:w-1/3 justify-end">
      <div class="tooltip" data-tip="Done">
        <button class="btn btn-outline rounded-full" @click="onDone(todo.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          <span class="lg:hidden">Done</span>
        </button>
      </div>
      <div class="tooltip" data-tip="Delete todo">
        <button class="btn btn-outline rounded-full" @click="onDelete(todo.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          <span class="lg:hidden">Delete</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
