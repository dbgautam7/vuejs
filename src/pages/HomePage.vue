<template>
  <div class="mt-32 space-y-4">
    <h1> Welcome to {{name}} </h1>
    <MyTodoForm />
    <MyTodoList />
    <DeleteModal />
  </div>
</template>

<script>
import MyTodoList from '../components/MyTodoList.vue';
import MyTodoForm from '../components/MyTodoForm';

export default {
    name: 'HomePage',
    components: {
        MyTodoList,
        MyTodoForm,
    },
    data() {
        return {
            name:"Home Page"
        }

    }
};
</script>
