<template>
  <div class="mt-32">
    <h1> Welcome to Home page </h1>
    <MyTodoForm />
    <MyTodoList />
  </div>
</template>

<script>
import MyTodoList from '../components/MyTodoList.vue';
import MyTodoForm from '../components/MyTodoForm';

export default {
  name: 'HomePage',
  components: {
    MyTodoList,
    MyTodoForm
  },
};
</script>