<template>
    <div class="container">
        L O L
        <div class="ui grid centered contents">
            <div class="loading" v-if="loading">
                Loading..
            </div>
            
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    name: 'MainPage',
    data(){
        return {
            loading: true
        }
    }
    
}
</script>
