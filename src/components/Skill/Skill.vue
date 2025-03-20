<template>
    <div class="g-skill" >
        <img class="g-skill_img" v-if="imgUrl" :src="imgUrl" alt="" loading="lazy" >
        <img class="g-skill_img" v-else src="../../assets/logo.png" alt="" loading="lazy" >
        <p class="g-skill_label" >{{ label }}</p>
    </div>
</template>

<script>
export default {
    props:{
        label:{
            type: String,
            default: 'Skill'
        },imgUrl:{
            type: String,
            default: null,
        },id:{}
    }
}
</script>