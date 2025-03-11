<template>
    <div class="g-head-line" >
        <p class="g-head-line_before">
            {{ before }}
        </p>
        <p class="g-head-line_after">
            {{ after }}
        </p>
    </div>
</template>
<script>
    export default {
        props:{
            before:{
                default: 'Before',
                type: String,
            },
            after:{
                default: 'After',
                type: String,
            },
        }
    }
</script>