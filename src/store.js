import Vuex from 'vuex';

export const store = new Vuex.Store({
    state: {
        myTodoList: [],
    },
    mutations: {
        addTodo(state, todo) {
            state.myTodoList = [
                ...state.myTodoList,
                {
                    id: Math.random(),
                    title: todo,
                    completed: false,
                },
            ];
        },
        updateTodo(state, todoId) {
            state.myTodoList = state.myTodoList.map((item) => {
                if (item.id === todoId) {
                    item.completed = !item.completed;
                }
                return item;
            });
        },
    },
    actions: {
        //No actions for to-do applications...
    },
    getters: {
        finalTodosLength: (state) => {
            const myCompleteTodos = state.myTodoList.filter((item) => item.completed);
            return myCompleteTodos.length;
        },
    },
});


export default store;
