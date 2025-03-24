<template>
    <img @click="clickHanlder" v-if="imgName" class="social-media-bar_icon"  :src="imgSrc" alt="">
    <img @click="clickHanlder" v-else class="social-media-bar_icon"  src="../../assets/logo.png" alt="">
    <a :href="'https://'+link" target="auto_blank" ref="link" ></a>
</template>
<script>
    export default{
        props:{
            imgName: {
                default: null,
                type:String,
            },link:{
                default: 'www.google.com',
                type: String,
            }
        },computed: {
            imgSrc(){
                return require('@/assets/Social Media/'+this.imgName);
            }
        },methods:{
            clickHanlder(){
                this.$refs.link.click();
                // console.log(this.$refs.link);
            }
        }
    }
</script>