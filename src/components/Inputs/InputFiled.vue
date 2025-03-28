<template>
    <div class="g-input-box">
        <label for="" class="g-input-box_label">{{ label }}</label>
        <input class="g-input-box_input" :class="[{'err':err},{'ok':ok}]" v-model="value" :placeholder="placeholder" @blur="validatorHandler" :type="type">
    </div>
</template>

<script>
    export default {
        props:{
            label:{
                type: String,
                default: 'Label',
            },
            placeholder:{
                type: String,
                default: ''
            },
            type:{
                type: String,
                default: 'text'
            },defaultValue:{
                type: String,
                default: ''
            },validator: {
                type: Function,
                default: null
            },errMsg:{
                type: String,
                default: 'Err in validation',
            },update:{
                type: Function,
                default: null
            }
        },data(){
            return {
                value: this.defaultValue,
                err: 0,
                ok: 0,
            };
        },watch: {
            value(val){
                if(this.update){
                    this.update(val);
                }
            }
        },methods:{
            validatorHandler(){
                if(this.validator){
                    if(this.validator(this.value)){
                        this.err = 0;
                        this.ok = 1;
                    }else{
                        this.err = 1;
                        this.ok = 0 ;
                        this.setMsg(this.errMsg,5000);
                    }
                }
            },reset(){
                this.ok = 0;
                this.err = 1;
            }
        },inject: ['setMsg']
    }
</script>