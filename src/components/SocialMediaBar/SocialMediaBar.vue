<template>
    <div class="social-media-bar" >
        <SocialMediaIcon :imgName="'fb.png'" :link="'https://www.facebook.com/share/18cwqbvyBr/'" />
        <SocialMediaIcon :imgName="'li.png'" link="https://www.linkedin.com/in/anas-al-hourani-70a129364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
        <SocialMediaIcon :imgName="'in.png'"  :link="'https://www.instagram.com/it_is_anas7?igsh=MTJlcDZpbHcyd2cwbQ=='"  />
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