<template>
    <transition name="fade" >
        <div class="g-app-loader" v-if="appear" >
            <div class="g-app-loader_bkg"></div>
            <div class="g-app-loader_loader"></div>
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return{
            appear: 0,
        };
    },methods:{
        close(){
            this.appear= 0;
        },
        open(){
            this.appear= 1;
        },
    }
}
</script>