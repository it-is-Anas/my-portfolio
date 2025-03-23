<template>
    <div class="g-project-card" >
        <img  class="g-project-card_img" v-if="imgName" :src="imgSrc" alt="" loading="lazy" />
        <img  class="g-project-card_img" v-else  src="../../assets/logo.png" alt="" loading="lazy" />
        <p class="g-project-card_label">{{ label }}</p>
        <p class="g-project-card_tech">{{ tech }}</p> 
        <div class="g-project-card_desc">
            {{ desc }}
        </div>
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
        },imgName:{
            type: String,
            default: null,
        },tech:{
            type: String,
            default: null,
        }
    },computed:{
        imgSrc(){
            return require('@/assets/ProjectsImgs/'+ this.imgName);
        }
    }
}
</script>