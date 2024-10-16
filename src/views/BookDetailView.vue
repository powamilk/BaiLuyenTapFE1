<template>
    <div>
      <h1>Book Details</h1>
      <div v-if="book">
        <p><strong>ID:</strong> {{ book.id }}</p>
        <p><strong>Title:</strong> {{ book.title }}</p>
        <p><strong>Author:</strong> {{ book.author }}</p>
        <p><strong>Year:</strong> {{ book.year }}</p>
        <img :src="book.coverImage" alt="Book Cover" width="200" />
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const book = ref(null);
  
  onMounted(async () => {
    const response = await fetch(`http://localhost:3000/books/${route.params.id}`);
    book.value = await response.json();
  });
  </script>
  