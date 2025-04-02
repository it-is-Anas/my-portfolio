<template>

    <a v-if="urlToDownload" download="Anas Al Hourani" class="g-button"  :href="urlToDownload">
        {{ label }}
    </a>
    <a v-else-if="link" target="new window"  class="g-button" :href="link">
            {{ label }}
    </a>
    <button v-else class="g-button" >
        {{ label }}
    </button>
</template>

<script>
    export default {
        props:{
            label:{
                type: String,
                default: 'Label',
            },urlToDownload:{
                type: String,
                default: null,
            },link:{
                type: String,
                default: null
            }
        }
    }
</script>