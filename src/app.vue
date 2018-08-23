<template>
    <div class="home">
        <h1>{{text}}</h1>
        <p>{{desc}}</p>
        <hr>


        <p>test</p>
        <button v-on:click="count -= 1">-</button>
        <span>{{ count }}</span>
        <button v-on:click="count += 1">+</button>
        <span>{{count + 2}}</span>

        <div>
            <img class="image" v-bind:src="res.image" /> 
        </div>
        
    </div>
    
</template>


<script>
const RESPATH =  "./src/assets/"

export default {    
    created(){
        console.log("fuced");
    },
    data(){
        return{
            text: 'VUE DEMO 20180823',
            desc: 'abdc',
            count: 0,
            res: {
                image: RESPATH + 'images/boy.png'
            }            
        }
    }
}
</script>

<style>
.test{
    color: red;
}
</style>
