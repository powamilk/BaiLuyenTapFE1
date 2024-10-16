import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AddBookView from '@/views/AddBookView.vue';
import EditBookView from '@/views/EditBookView.vue';
import BookDetailView from '@/views/BookDetailView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/add', name: 'AddBook', component: AddBookView },
  { path: '/edit/:id', name: 'EditBook', component: EditBookView, props: true },
  { path: '/detail/:id', name: 'BookDetail', component: BookDetailView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
