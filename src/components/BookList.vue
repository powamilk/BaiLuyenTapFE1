<template>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.year }}</td>
          <td>
            <router-link :to="`/edit/${book.id}`" class="btn btn-warning btn-sm">Edit</router-link>
            <router-link :to="`/detail/${book.id}`" class="btn btn-info btn-sm">View</router-link>
            <button @click="deleteBook(book.id)" class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const books = ref([]);
  
  onMounted(async () => {
    await loadBooks();
  });
  
  const loadBooks = async () => {
  try {
    const response = await fetch('http://localhost:3000/books');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    books.value = await response.json();
    console.log("Books loaded:", books.value);
  } catch (error) {
    console.error("Failed to load books:", error);
  }
};

  
const deleteBook = async (id) => {
  if (confirm('Are you sure you want to delete this book?')) {
    try {
      const response = await fetch(`http://localhost:3000/books/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      books.value = books.value.filter(book => book.id !== id);
      console.log(`Book with id ${id} deleted successfully`); 
    } catch (error) {
      console.error("Failed to delete book:", error);
    }
  }
};

  </script>
  