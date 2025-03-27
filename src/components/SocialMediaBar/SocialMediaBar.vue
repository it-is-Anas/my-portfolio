<template>
    <div class="social-media-bar" >
        <SocialMediaIcon :imgName="'fb.png'" :link="'https://www.facebook.com/profile.php?id=61574223360706'" />
        <!-- <SocialMediaIcon :imgName="'li.png'" /> -->
        <SocialMediaIcon :imgName="'in.png'"  :link="'https://www.instagram.com/its.anas777/?__pwa=1'"  />
        <SocialMediaIcon :imgName="'github.png'" :link="'https://github.com/it-is-Anas'" />
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