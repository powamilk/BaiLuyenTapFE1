<template>
  <div>
    <h1>Books Management</h1>
    <router-link to="/add" class="btn btn-primary mb-4">Add New Book</router-link>
    <BookList />
  </div>
</template>

<script setup>
import BookList from '@/components/BookList.vue';
</script>
