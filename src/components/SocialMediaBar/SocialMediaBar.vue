<template>
    <div class="social-media-bar" >
        <SocialMediaIcon :imgName="'wa.png'" />
        <SocialMediaIcon :imgName="'fb.png'" />
        <SocialMediaIcon :imgName="'li.png'" />
        <SocialMediaIcon :imgName="'in.png'" />
        <SocialMediaIcon :imgName="'github.png'" />
    </div>
</template>
<script>
    import SocialMediaIcon from './SocialMediaIcon.vue';
    export default {
        components:{
            SocialMediaIcon,
        }
    }
</script>