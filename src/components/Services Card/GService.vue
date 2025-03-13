<template>
    <div class="g-service" >
        <img class="g-service_picture"  src="../../assets/logo.png" alt="">
        <p class="g-service_title" >{{ title }}</p>
        <p class="g-service_desc" >{{ desc }}</p>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            default: 'title',
            type: String,
        },desc:{
            default: 'desc',
            type: String,
        },imgUrl:{
            default: '../../assets/logo.png',
            type: String,
        }
    }
}
</script>