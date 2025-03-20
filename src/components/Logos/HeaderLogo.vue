<template>
    <p class="header-logo" >
        {{ label }}
    </p>
</template>
<script>
export default {
    props:{
        label:{
            default: 'Label',
            type: String,
        }
    }
}
</script>