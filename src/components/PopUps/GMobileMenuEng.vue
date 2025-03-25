<template>
    <div v-if="on" class="g-pop-up g-mobile-menu" >
        <div class="g-pop-up_content">
            <div class="g-pop-up_close-btn" @click="close" >+</div>
            <div class="g-mobile-menu_group" >
                <HeaderLogo class="g-mobile-menu_logo" :label="'Anas'" />
                <router-link class="g-header-nav-bar_btn g-mobile-menu_btn"  @click="close" to="/lan-ara" >عربي</router-link>
            </div>
            <div class="g-mobile-menu_group" >
                <a class="g-header-nav-bar_btn g-mobile-menu_btn"  @click="close" href="#demo" >Demo</a>
            </div>
            <div class="g-mobile-menu_group" >
                <a class="g-header-nav-bar_btn g-mobile-menu_btn"  @click="close"  href="#aboutme" >About Me</a>
            </div>
            <div class="g-mobile-menu_group">
                <a class="g-header-nav-bar_btn g-mobile-menu_btn"  @click="close" href="#skilles" >Skilles</a>
            </div>
            <div class="g-mobile-menu_group">
                <a class="g-header-nav-bar_btn g-mobile-menu_btn"  @click="close" href="#project" >Projects</a>
            </div>
            <div class="g-mobile-menu_group">
                <a class="g-header-nav-bar_btn g-mobile-menu_btn"  @click="close" href="#services" >Services</a>
            </div>
            <div class="g-mobile-menu_group">
                <a class="g-header-nav-bar_btn g-mobile-menu_btn"  @click="close" href="#contactme" >Contact Me</a>
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