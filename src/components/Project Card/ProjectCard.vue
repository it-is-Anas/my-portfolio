<template>
    <div class="g-project-card" >
        <img  class="g-project-card_img" v-if="imgName" :src="imgSrc" alt="" loading="lazy" />
        <img  class="g-project-card_img" v-else  src="../../assets/logo.png" alt="" loading="lazy" />
        <p class="g-project-card_label">{{ label }}</p>
        <!-- <p class="g-project-card_tech">{{ tech }}</p>  -->
        <div class="g-project-card_desc">
            {{ shortDesc }}
        </div>
        <GButton class="g-project-card_btn proj-btn git-btn" v-if="link" :link="link" :label="'Open in Git Hub'" />
        <GButton class="g-project-card_btn proj-btn" v-else @click="setMsg('Sorry this git repo is private')"  :label="'You are in'" />
    </div>
</template> 
<script> 
import GButton from '../Buttons/GButton.vue';
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
        },link: {
            type: String,
            default: null
        }
    },
    inject:['setMsg']
    ,computed:{
        imgSrc(){
            return require('@/assets/ProjectsImgs/'+ this.imgName);
        },shortDesc(){
            if(this.desc.length > 228){
                return this.desc.slice(0,224) + ' ...';
            }
            return this.desc;
        }
    },components: {
        GButton,
    }
}
</script>