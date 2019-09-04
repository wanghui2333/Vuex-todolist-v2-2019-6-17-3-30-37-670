import axios from "axios"
export default {
    strict: true,
    state: {
        todoList: [
        ],
        currentFilter: 'all'
    },
    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        },
        currentFilter: function (state){
            return state.currentFilter;
        }
    },
    mutations: {
        handleCreateTodo: function (state, inputtingItem) {
            state.todoList.push({
                status: 'active',
                content: inputtingItem
            })
        },
        handleToggleActive: function (state, id){
            let list = state.todoList.filter(element => {
                return element.id === id;
            });
            list[0].status = list[0].status === 'completed' ? 'active' : 'completed';
        },
        updateCurrentFilter: function (state, currentFilter){
            state.currentFilter = currentFilter;
        },
        initTodoList: function (state, todoList){
            state.todoList = todoList;
        }
    },
    actions: {
        fetchTodoList: function (context){
            let url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";

            axios.get(url).then(function(response){
                context.commit("initTodoList", response.data);
            });
        }
    }
}
