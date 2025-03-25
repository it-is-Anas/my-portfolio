<template>
    <GHeader class="eng-header ara-header"  :controllerClasses="['g-header_controller']" >
        <template #default>
            <HeaderLogo :label="'أنس'" />
            <ul class="g-header-controller_nav-bar " >
                <a class="g-header-nav-bar_btn" href="#demo" >لمحة</a>
                <a class="g-header-nav-bar_btn" href="#aboutme" >معلومات عني</a>
                <a class="g-header-nav-bar_btn" href="#skilles" >مهاراتي</a>
                <a class="g-header-nav-bar_btn" href="#project" >مشاريعي</a>
                <a class="g-header-nav-bar_btn" href="#services" >خداماتي</a>
                <a class="g-header-nav-bar_btn" href="#contactme" >تواصل معي</a>
            </ul>
            <router-link class="g-header-nav-bar_btn" to="/" >English</router-link>    
            <i class="fa fa-bars g-header_menu" @click="openMenuMobile" ></i>      
        </template>
    </GHeader>
    <GMobileMenu ref="menuMobile" />
</template>


<script>

import GHeader from '@/components/Headers/GHeader.vue';
import HeaderLogo from '@/components/Logos/HeaderLogo.vue';
import GMobileMenu from '@/components/PopUps/GMobileMenuAra.vue';
export default{
    components:{
        GHeader,
        HeaderLogo,
        GMobileMenu,
    },
    methods:{
        openMenuMobile(){
            this.$refs.menuMobile.open();
        },
        closeMenuMobile(){
            this.$refs.menuMobile.close();
        },
    }
}

</script>