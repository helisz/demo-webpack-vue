<template>
    <div v-bind:class="['todo-item', todo.completed ? 'completed' : '']">
        <input  type="checkbox"
                class="toggle"
                v-model="todo.completed"
        >
        <label>{{todo.content}}</label>
        <button class="destroy" v-on:click="deleteTodo"></button>
    </div>
</template>


<script>
export default {
    props:{
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteTodo(){
            // 与父组件交互
            //1、父组件可以使用 props 把数据传给子组件。
            //2、子组件可以使用 $emit 触发父组件的自定义事件。
            this.$emit('del', this.todo.id)
        }
    }
}
</script>

