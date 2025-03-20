<template>
    <div class="g-project-card" >
        <img  class="g-project-card_img" v-if="imgUrl" :src="imgUrl" alt="" loading="lazy" />
        <img  class="g-project-card_img" v-else  src="../../assets/logo.png" alt="" loading="lazy" />
        <p class="g-project-card_label">{{ label }}</p>
        <p class="g-project-card_desc">{{ desc }}</p>
    </div>
</template>
<script> 
export default {
    props:{
        label:{
            type: String,
            default: 'project label'
        },desc:{
            type: String,
            default: 'project description',
        },imgUrl:{
            type: String,
            default: null,
        }
    }
}
</script>