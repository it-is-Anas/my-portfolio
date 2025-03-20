<template>
    <div class="g-section"  :class="[withHeader?'g-section--header':'']">
        <div class="g-controller" :class="[...controllerCls]" >
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
        },controllerCls:{
            default: [],
            type: Array
        }
    }
}
</script>