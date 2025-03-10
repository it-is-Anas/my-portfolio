<template>
    <div class="g-section" :class="{'g-section--header': withHeader}">
        <div class="g-controller">
            <slot name="default">
                
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        withHeader: {
            default: false,
            type: Boolean,
        }
    }
}
</script>