<template>

    <a v-if="urlToDownload" download="Anas Al Hourani" class="g-button"  :href="urlToDownload">
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
            }
        }
    }
</script>