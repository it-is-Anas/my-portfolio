<template>
    <div class="g-service-card" >
        <img v-if="imgName" :src="imgSrc" alt="" class="g-service-card_img" loading="lazy" >
        <img v-else src="../../assets/logo.png" alt="" class="g-service-card_img" loading="lazy" >
        <div class="g-service-card_label">
            {{ lable }}
        </div>
    </div>
</template>
<script>
export default {
    props:{
        imgName:{
            default: null,
            type: String
        },lable:{
            default:'Label',
            type: String
        }
    },computed: {
        imgSrc(){
            return require('@/assets/ServicesImgs/' + this.imgName);
        }
    }
}
</script>