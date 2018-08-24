<template>
    <section class="real-app">
        <input  type="text"
                class="add-input"
                autofocus="autofocus"
                placeholder="What's Next?"
                @keyup.enter="addTodo"                
        />
        <!-- 使用@方式来监听子组件的方法 -->
        <item   :todo="todo"
                v-for="todo in filteredTodos"
                :key="todo.id"
                @del="deleteTodo"                 
        />        

        <tabs   :filter="filter"
                :todos="todos"
                @toggle="toggleFilter"
                @clearAllCompleted="clearAllCompleted"
        />
    </section>

</template>


<script>
import Item from './item.vue'
import Tabs from './tabs.vue'

let id = 0;

export default {
    data(){
        return {
            todos: [],
            filter: 'all'
        }
    },
    components: {
        Item,
        Tabs
    },
    // 计算
    computed: {
        filteredTodos(){
            if (this.filter === 'all'){
                return this.todos
            } 
            const completed = this.filter === 'completed'
            return this.todos.filter(todo => completed === todo.completed)
        }
    },
    methods: {
        addTodo(e){
            if(e.target.value.trim()){
                this.todos.unshift({
                    id: id ++,
                    content: e.target.value.trim(),
                    completed: false
                })
            } else {
                console.info('输入不能为空 !');
            }
            
            e.target.value = ''
        },
        deleteTodo(id){
            this.todos.splice(this.todos.findIndex(todo => todo.id == id), 1)
        },
        toggleFilter(state) {
            this.filter = state;
        },
        clearAllCompleted(){
            this.todos = this.todos.filter(todo => !todo.completed)
        }
    }
}
</script>
