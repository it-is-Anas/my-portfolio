<template>
    <div class="g-input-box">
        <label for="" class="g-input-box_label">{{ label }}</label>
        <textarea :placeholder="placeholder"   class="g-input-box_text-area" cols="20" rows="10"></textarea>
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
        }
    }
</script>