<template>
    <GHeader class="eng-header"  :controllerClasses="['g-header_controller']" >
        <template #default>
            <HeaderLogo :label="'Anas'" />
            <ul class="g-header-controller_nav-bar" >
                <a class="g-header-nav-bar_btn" href="#demo" >Demo</a>
                <a class="g-header-nav-bar_btn" href="#aboutme" > About Me  </a>
                <a class="g-header-nav-bar_btn" href="#skilles" >Skilles</a>
                <a class="g-header-nav-bar_btn" href="#project" >Projects</a>
                <a class="g-header-nav-bar_btn" href="#services" >Services</a>
                <a class="g-header-nav-bar_btn" href="#contactme" >  Contact Me</a>
            </ul>
            <router-link class="g-header-nav-bar_btn" to="/lan-ara" >عربي</router-link>    
            <i class="fa fa-bars g-header_menu" @click="openMenuMobile" ></i>        
        </template>
    </GHeader>
    <GMobileMenu ref="menuMobile" />
</template>


<script>

import GHeader from '@/components/Headers/GHeader.vue';
import HeaderLogo from '@/components/Logos/HeaderLogo.vue';
import GMobileMenu from '@/components/PopUps/GMobileMenuEng.vue';
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