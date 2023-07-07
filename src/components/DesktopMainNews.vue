<script setup lang="ts">
const props = defineProps<{
  news: {
    title: string;
    abstract: string;
    image: string;
  };
  index: number;
}>();
</script>
<template>
  <a class="inline-block relative" :href="`#${props.news.title}`">
    <img
      :src="props.news.image"
      class="absolute object-cover w-full h-full"
      :alt="props.news.title"
    />
    <p
      class="flex items-end absolute p-[12px] max-h-[45%] w-full h-full bottom-0 text-white bg-gradient-to-b from-transparent to-[rgb(0_0_0/.8)]"
      :class="{
        'text-[20px]': index === 0,
      }"
    >
      {{ props.news.title }}
    </p>
  </a>
</template>
