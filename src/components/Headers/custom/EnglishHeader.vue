<template>
    <GHeader class="eng-header"  :controllerClasses="['g-header_controller']" >
        <template #default>
            <HeaderLogo :label="'Anas'" />
            <ul class="g-header-controller_nav-bar" >
                <router-link class="g-header-nav-bar_btn" to="#demo" >Demo</router-link>
                <router-link class="g-header-nav-bar_btn" to="#aboutme" >About Me</router-link>
                <router-link class="g-header-nav-bar_btn" to="#skilles" >Skilles</router-link>
                <router-link class="g-header-nav-bar_btn" to="#projects" >Projects</router-link>
                <router-link class="g-header-nav-bar_btn" to="#contactme" >Contact Me</router-link>
            </ul>
            <router-link class="g-header-nav-bar_btn" to="" >عربي</router-link>    
            <i class="fa fa-bars g-header_menu" @click="openMenuMobile" ></i>        
        </template>
    </GHeader>
    <GMobileMenu ref="menuMobile" />
</template>


<script>

import GHeader from '@/components/Headers/GHeader.vue';
import HeaderLogo from '@/components/Logos/HeaderLogo.vue';
import GMobileMenu from '@/components/PopUps/GMobileMenu.vue';
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