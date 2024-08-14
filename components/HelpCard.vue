<script setup lang="ts">
const props = defineProps(['id'])

const { $directus, $readItem } = useNuxtApp();

const { data, status } = await useAsyncData(() => {
    return $directus.request(
    $readItem('helpcards', props.id, {
      fields: ['*', { '*': ['*'] }]
    })
  )
})

</script>

<template>
  <template v-if="status === 'success'">
<div class="w-100 m-4 p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-5 text-3xl font-bold text-gray-900 dark:text-white">{{ data?.title }}</h5>
    <p class="text-base sm:text-lg dark:text-gray-400">
        <ClientOnly>
            <span v-html="data?.help"></span>
        </ClientOnly>
    </p>
</div>
  </template>
  <template v-else>
    <div class="w-100 m-4 p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Loading...</h5>
    </div>
  </template>

</template>