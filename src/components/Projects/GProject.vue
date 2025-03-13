<template>
    <div class="g-project" >
        <img class="g-project_picture"  src="../../assets/logo.png" alt="">
        <p class="g-project_title" >{{ title }}</p>
        <p class="g-project_desc" >{{ desc }}</p>
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