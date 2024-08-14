<script setup lang="ts">
const route = useRoute()
const routeId = route.params.id as string
</script>

<template>
   <div class="h-screen flex items-center justify-center">
    <HelpCard :id="routeId" />
    </div>
</template>