<template>
    <div class="home">
        <h1>{{text}}</h1>
        <p>{{desc}}</p>
        <div>
            <img class="image" v-bind:src="res.image" /> 
        </div>
        <hr>
        
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
            desc: 'abdSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.',
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
