<template>
    <div>
        <div class="todo-computed-list">
            <div class="todo-computed-item" v-for="todo in mytodos" :key="todo.id">
                <p :style="{ 'text-decoration': todo.completed ? 'line-through' : 'none' }">{{ todo.title }}</p>
                <input type="checkbox"  class="check-box" name="todo.id" v-on:change="updateTodo(todo)" v-bind:checked="todo.completed" />
            </div>
            <div>
                <h4 class="todo-completed">You have completed: {{ todoComplete }} tasks.</h4>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    computed: {
        mytodos() {
            return this.$store.state.myTodoList;
        },
        todoComplete() {
            return this.$store.getters.finalTodosLength;
        },
    },
    methods: {
        updateTodo: function (todo) {
            this.$store.commit('updateTodo', todo.id);
        },
        submitTodo: function (event) {
            event.preventDefault();
            this.$store.commit('addTodo', this.todo);
            this.todo = '';
        },
    },
};
</script>
  
  
<style scoped>
.todo-computed-list {
    margin-top: 20px;
}

.todo-computed-item {
    width: 40em;
    margin-bottom: 10px;
    padding: 8px;
    border: 2px solid #03344c;
    border-radius: 0.5em;
    font-size: 20px;
    color: #1393d4;
    display: flex;
    justify-content: space-between;
}

.check-box {
    width: 2em;
    border: 1px solid #1393d4;
}

.todo-computed-item p {
    margin: 0;
}

.todo-completed {
    font-size: 20px;
    text-align: center;
}
</style>
  