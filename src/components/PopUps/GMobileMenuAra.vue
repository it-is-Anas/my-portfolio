<template>
    <div v-if="on" class="g-pop-up g-mobile-menu arabic" >
        <div class="g-pop-up_content">
            <div class="g-pop-up_close-btn arabic" @click="close" >+</div>
            <div class="g-mobile-menu_group" >
                <HeaderLogo class="g-mobile-menu_logo" :label="'أنس'" />
                <router-link class="g-header-nav-bar_btn g-mobile-menu_btn" to="/" @click="close" >English</router-link>
            </div>
            <div class="g-mobile-menu_group arabic" >
                <a class="g-header-nav-bar_btn g-mobile-menu_btn" href="#demo" @click="close" >لمحة</a>
            </div>
            <div class="g-mobile-menu_group arabic" >
                <a class="g-header-nav-bar_btn g-mobile-menu_btn" href="#aboutme" @click="close" >معلومات عني</a>
            </div>
            <div class="g-mobile-menu_group arabic">
                <a class="g-header-nav-bar_btn g-mobile-menu_btn" href="#skilles" @click="close" > مهاراتي</a>
            </div>
            <div class="g-mobile-menu_group arabic">
                <a class="g-header-nav-bar_btn g-mobile-menu_btn" href="#project" @click="close" > مشاريع</a>
            </div>
            <div class="g-mobile-menu_group arabic">
                <a class="g-header-nav-bar_btn g-mobile-menu_btn" href="#services" @click="close" > خداماتي</a>
            </div>
            <div class="g-mobile-menu_group arabic">
                <a class="g-header-nav-bar_btn g-mobile-menu_btn" href="#contactme" @click="close" > تواصل معي</a>
            </div>
        </div>
    </div>
    <teleport to='body' >
        <div v-if="on" class="g-pop-up_back" @click="close" ></div>
    </teleport>
</template>


<script>
    import HeaderLogo from '@/components/Logos/HeaderLogo.vue';
    export default {
        components:{
            HeaderLogo,
        },data(){ 
            return{
                on: false,
            };
        },methods:{
            open(){
                this.on = true;
                document.querySelector('body').style.overflowY = 'hidden';
            },close(){
                this.on = false;
                document.querySelector('body').style.overflowY = 'auto';
            }
        }
    }
</script>