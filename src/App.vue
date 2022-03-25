<template>
    <h1>{{ message }}</h1>
    <HelloWorld/>
</template>

<script>
import HelloWorld from '~/components/HelloWorld'
export default {
    components:{
        HelloWorld
    },
    data(){// data 메소드
        return {
            message: 'Hello Vue!!!'
        }
    } 
}
</script>
