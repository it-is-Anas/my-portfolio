<template>
    <a :href="link" target="auto_blank" ref="link" >
        <img  v-if="imgName" class="social-media-bar_icon"  :src="imgSrc" alt="">
        <img  v-else class="social-media-bar_icon"  src="../../assets/logo.png" alt="">
    </a>
</template>
<script>
    export default{
        props:{
            imgName: {
                default: null,
                type:String,
            },link:{
                default: 'https://www.google.com',
                type: String,
            }
        },computed: {
            imgSrc(){
                return require('@/assets/Social Media/'+this.imgName);
            }
        }
    }
</script>