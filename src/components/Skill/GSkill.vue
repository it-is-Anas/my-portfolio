<template>
    <div class="g-skill" >
        <img class="g-skill_picture"  src="../../assets/logo.png" alt="">
        <p class="g-skill_label" >{{ label }}</p>
    </div>
</template>
<script>
export default {
    props:{
        label:{
            default: 'Label',
            type: String,
        },imgUrl:{
            default: '../../assets/logo.png',
            type: String,
        }
    }
}
</script>