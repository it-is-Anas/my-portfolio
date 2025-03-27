<template>
    <transition name="fade" >
        <div class="g-app-msg" v-if="appear" >
            {{msg}}
        </div>
    </transition>
</template>
<script>
    export default {
        data(){
            return{
                msg: '',
                defaultTime: 3000,
                appear: 0,
            };
        },methods:{
            setMsg(msg,time){
                this.msg = msg;
                this.appear = 1;
                setTimeout(() => {
                    this.appear = 0;
                    this.msg = '';
                }, time ||this.defaultTime);
            }
        }
    }
</script>