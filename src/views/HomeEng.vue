<template>
    <div class="g-page" >
        <EnglishHeader />
        <GSection :withHeader="true" id="demo" >
            <template #default >
                
            </template>
        </GSection>
    </div>
</template>

<script>
    import EnglishHeader from '@/components/Headers/custom/EnglishHeader.vue';
    import GSection from '@/components/Sections/GSection.vue';
    export default{
        components:{
            EnglishHeader,
            GSection,
        }
    }
</script>