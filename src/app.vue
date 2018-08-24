<template>
   <div id="app">
       <div id="cover">
            <Header></Header>
            <todo></todo>
            <Footer></Footer>
       </div>
   </div>
</template>



<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'

export default { 
    components: {
        Header,
        Footer,
        Todo
    }
}
</script>



