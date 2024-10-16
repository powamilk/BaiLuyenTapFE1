<template>
    <form @submit.prevent="submitForm" class="border p-4 rounded bg-light">
      <div class="form-group mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" id="title" v-model="book.title" class="form-control" required />
      </div>
      <div class="form-group mb-3">
        <label for="author" class="form-label">Author</label>
        <input type="text" id="author" v-model="book.author" class="form-control" required />
      </div>
      <div class="form-group mb-3">
        <label for="year" class="form-label">Year</label>
        <input type="number" id="year" v-model="book.year" class="form-control" required />
      </div>
      <div class="form-group mb-3">
        <label for="coverImage" class="form-label">Cover Image URL</label>
        <input type="url" id="coverImage" v-model="book.coverImage" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">{{ isEditing ? 'Update' : 'Add' }} Book</button>
    </form>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const props = defineProps({
    bookId: {
      type: Number,
      default: null
    }
  });
  
  const router = useRouter();
  const book = ref({
    title: '',
    author: '',
    year: '',
    coverImage: ''
  });
  const isEditing = ref(false);
  
  onMounted(async () => {
    if (props.bookId) {
      isEditing.value = true;
      const response = await fetch(`http://localhost:3000/books/${props.bookId}`);
      if (response.ok) {
        book.value = await response.json();
      } else {
        console.error('Failed to load book data');
      }
    }
  });
  
  const submitForm = async () => {
    const method = isEditing.value ? 'PUT' : 'POST';
    const url = isEditing.value
      ? `http://localhost:3000/books/${props.bookId}`
      : 'http://localhost:3000/books';
  
    const response = await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book.value)
    });
  
    if (response.ok) {
      router.push('/');
    } else {
      console.error('Failed to submit book data');
    }
  };
  </script>
  