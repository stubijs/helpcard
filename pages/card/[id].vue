<script setup lang="ts">
const route = useRoute()
const routeId = route.params.id as string
</script>

<template>
    <HelpCard :id="routeId" />
</template>