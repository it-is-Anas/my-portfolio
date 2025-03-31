<template>
    <!-- <p class="header-logo" >
        {{ label }}
    </p> -->
    <router-link class="header-logo" :to="to" >
        {{ label }}
    </router-link>
</template>
<script>
export default {
    props:{
        label:{
            default: 'Label',
            type: String,
        },to:{
            default: '/',
            type: String
        }
    }
}
</script>