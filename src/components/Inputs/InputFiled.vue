<template>
    <div class="g-input-box">
        <label for="" class="g-input-box_label">{{ label }}</label>
        <input class="g-input-box_input" :value="defaultValue" :placeholder="placeholder" :type="type">
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
            }
        }
    }
</script>