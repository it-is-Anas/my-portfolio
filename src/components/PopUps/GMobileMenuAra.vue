<template>
    <div v-if="on" class="g-pop-up g-mobile-menu arabic" >
        <div class="g-pop-up_content">
            <div class="g-pop-up_close-btn arabic" @click="close" >+</div>
            <div class="g-mobile-menu_group" >
                <HeaderLogo class="g-mobile-menu_logo" :label="'أنس'" />
                <router-link class="g-header-nav-bar_btn g-mobile-menu_btn" to="/" @click="close" >English</router-link>
            </div>
            <div class="g-mobile-menu_group arabic" >
                <router-link class="g-header-nav-bar_btn g-mobile-menu_btn" to="#demo"  @click="close" >لمحة</router-link>
            </div>
            <div class="g-mobile-menu_group arabic" >
                <router-link class="g-header-nav-bar_btn g-mobile-menu_btn" to="#aboutme"  @click="close" >معلومات عني</router-link>
            </div>
            <div class="g-mobile-menu_group arabic">
                <router-link class="g-header-nav-bar_btn g-mobile-menu_btn" to="#skilles"  @click="close" >مهاراتي</router-link>
            </div>
            <div class="g-mobile-menu_group arabic">
                <router-link class="g-header-nav-bar_btn g-mobile-menu_btn" to="#projects"  @click="close" >مشاريع</router-link>
            </div>
            <div class="g-mobile-menu_group arabic">
                <router-link class="g-header-nav-bar_btn g-mobile-menu_btn" to="#contactme"  @click="close" >تواصل معي</router-link>
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