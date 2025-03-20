<template>
    <GHeader class="eng-header ara-header"  :controllerClasses="['g-header_controller']" >
        <template #default>
            <router-link class="g-header-nav-bar_btn" to="/" >English</router-link>    
            <i class="fa fa-bars g-header_menu" @click="openMenuMobile" ></i>      
            <ul class="g-header-controller_nav-bar " >
                <router-link class="g-header-nav-bar_btn" to="#contactme" >تواصل معي</router-link>
                <router-link class="g-header-nav-bar_btn" to="#projects" >مشاريعي</router-link>
                <router-link class="g-header-nav-bar_btn" to="#skilles" >مهاراتي</router-link>
                <router-link class="g-header-nav-bar_btn" to="#aboutme" >معلومات عني</router-link>
                <router-link class="g-header-nav-bar_btn" to="#demo" >لمحة</router-link>
            </ul>
            <HeaderLogo :label="'أنس'" />
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