<template>
    <button class="g-button" >
        {{ label }}
    </button>
</template>

<script>
    export default {
        props:{
            label:{
                type: String,
                default: 'Label',
            }
        }
    }
</script>