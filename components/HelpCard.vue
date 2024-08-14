<script setup lang="ts">
const props = defineProps(['id'])

const { $directus, $readItem } = useNuxtApp();
console.log($directus);

const { data: card, status } = await useAsyncData('card', () => {
    return $directus.request(
    $readItem('helpcards', props.id, {
      fields: ['*', { '*': ['*'] }]
    })
  )
})

</script>

<template>
  <template v-if="status === 'success'">
<div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{{ data?.title }}</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400"><span v-html="data?.help"></span></p>
</div>
  </template>
  <template v-else>
    <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Loading...</h5>
    </div>
  </template>
</template>