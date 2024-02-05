<template>
  <form
    class="mb-8"
    @submit="addTodo"
  >
    <input
      name="taskTodo"
      class="w-[30em] p-5 mr-2 border-2 rounded-2xl text-sm border-[#1393d4]"
      v-model="taskTodo"
      placeholder="Add a new todo..."
      required
    />
    <button
      class="w-[10em] p-5 mr-2 border-2 rounded-2xl text-sm border-[#1393d4] cursor-pointer bg-blue-500"
      type="submit"
    >Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      taskTodo: '',
    };
  },
  methods: {
    addTodo: function (e) {
      console.log(this.$store.state.myTodoList, "myTodoList")
      e.preventDefault();
      this.$store.commit('addTodo', this.taskTodo);
      this.taskTodo = '';
    },
  },
};
</script>
