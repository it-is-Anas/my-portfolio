<template>
    <header class="g-header" >
        <div class="g-controller" :class="controllerClasses" >
            <slot name="default" >

            </slot>
        </div>
    </header>
</template>

<script>
export default {
    props:{
        controllerClasses:{
            default: '',
            type: Array,
        }
    }
}
</script>