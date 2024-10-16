<template>
    <div>
      <h1>Edit Book</h1>
      <BookForm :bookId="id" />
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'; 
  import BookForm from '@/components/BookForm.vue';
  const route = useRoute();
  const id = route.params.id; 
  </script>
  