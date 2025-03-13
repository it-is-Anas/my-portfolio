<template>
    <div class="g-page" >
        <EnglishHeader />
        <GSection :withHeader="true" id="demo" :controllerCls="['demo-section_controller']" >
            <template #default >
                <div class="demo-section_col demo-section_text-col">
                    <p class="demo-section-text-col_text-welcoming">Welcome to my Portofolio</p>
                    <p class="demo-section-text-col_text-name">It's Anas Al Hourani</p>
                    <p class="demo-section-text-col_text-role">A Front End Developer</p>
                    <p class="demo-section-text-col_text-bio">
                        Passionate Full Stack Developer with expertise in
                        Vue.js, Express.js, HTML, CSS, and JavaScript. Skilled in 
                        building responsive, user-friendly web applications with 
                        clean, efficient code. Experienced in creating dynamic UI
                        components, optimizing performance, and
                        implementing modern design principles. Always
                        eager to learn and stay updated with the latest web
                        technologies to enhance user experiences.
                    </p>
                    <GButton :label="'Hire ME'" class="demo-section-text-col_text-btn" />
                </div>
                <div class="demo-section_col demo-section_picture-col">
                    <span class="demo-section-picture-col_before-circle"></span>
                    <img src="../assets/pic1.png" alt="" class="demo-section-picture-col_picture">
                </div>
            </template>
        </GSection>
        <GSection id="aboutme" :controllerCls="['g3-section_controller','about-me-section-controller']" >
            <template #default>
                <div class="g3-section-controller_row g3-section-controller_row-1">
                    <GHeadLine :before="'About Me'" :after="'Small Bio'" />
                </div>
                <div class="g3-section-controller_row g3-section-controller_row-2">
                    <div class="g3-section-controller-row-2_col g3-section-controller-row-2_col-1 about-me-section-controller-row-2_col-1">
                        <p class="about-me-section-controller-row-2-col-1_text">
                            Passionate Front-End Developer with expertise in 
                            Vue.js, HTML, CSS, and JavaScript. Skilled in building 
                            responsive, user-friendly web applications with clean, 
                            efficient code. Experienced in creating dynamic UI
                            components, optimizing performance, and 
                            implementing modern design principles. Always
                            eager to learn and stay updated with the latest web
                            technologies to enhance user experiences
                        </p>
                        <GButton :label="'Download CV'" class="demo-section-text-col_text-btn" />
                    </div>
                    <div class="g3-section-controller-row-2_col g3-section-controller-row-2_col-2 about-me-section-controller-row-2_col-2">
                        <span class="demo-section-picture-col_before-circle"></span>
                        <img src="../assets/pic2.png" alt="" class="demo-section-picture-col_picture about-me-section-controller-row-2-col-2_picture">
                    </div>
                </div>
            </template>
        </GSection>
        <GSection id="skilles" :controllerCls="['g3-section_controller' ]" >
            <template #default >
                <div class="g3-section-controller_row g3-section-controller_row-1">
                    <GHeadLine :before="'Skilles'" :after="'What do I know'" />
                </div>
                <div class="g3-section-controller_row g3-section-controller_row-2">
                    <div class="g3-section-controller-row-2_col g3-section-controller-row-2_col-1 skilles-section-controller-row-2 ">
                        <GSkill v-for="skill in skills" :key="skill.label" :label="skill.label" :imgUrl="skill.imgUrl" />
                    </div>
                </div>
            </template>
        </GSection>
        <GSection id="services" :controllerCls="['g3-section_controller']" >
            <template #default >
                <div class="g3-section-controller_row g3-section-controller_row-1">
                    <GHeadLine :before="'Projects'" :after="'What I Did'" />
                </div>
                <div class="g3-section-controller_row g3-section-controller_row-2">
                    <div class="g3-section-controller-row-2_col g3-section-controller-row-2_col-1 skilles-section-controller-row-2">
                        <GProject v-for="serv in services" :title="serv.title" :desc="serv.desc" :key="serv" />
                    </div>
                </div>
            </template>
        </GSection>
        <GSection id="services" :controllerCls="['g3-section_controller']" >
            <template #default >
                <div class="g3-section-controller_row g3-section-controller_row-1">
                    <GHeadLine :before="'Services'" :after="'What Can I Offer'" />
                </div>
                <div class="g3-section-controller_row g3-section-controller_row-2">
                    <div class="g3-section-controller-row-2_col g3-section-controller-row-2_col-1 skilles-section-controller-row-2">
                        <GService v-for="serv in services" :title="serv.title" :desc="serv.desc" :key="serv" />
                    </div>
                </div>
            </template>
        </GSection>
    </div>
</template>

<script>
    import EnglishHeader from '@/components/Headers/custom/EnglishHeader.vue';
    import GSection from '@/components/Sections/GSection.vue';
    import GButton from '@/components/Buttons/GButton.vue';
    import GHeadLine from '@/components/HeadLine/GHeadLine.vue';
    import GSkill from '@/components/Skill/GSkill.vue';
    import GProject from '@/components/Projects/GProject.vue';
    import GService from '@/components/Services Card/GService.vue';
    export default{
        components:{
            EnglishHeader,
            GSection,
            GButton,
            GHeadLine,
            GSkill,
            GProject,
            GService,
        },data(){
            return{
                skills:[
                    {
                        label: 'HTML',
                        imgUrl: null,
                    },
                    {
                        label: 'CSS',
                        imgUrl: null,
                    },
                    {
                        label: 'JAVASCRIPT',
                        imgUrl: null,
                    },
                    {
                        label: 'TYPESCRIPT',
                        imgUrl: null,
                    },
                    {
                        label: 'JAVA',
                        imgUrl: null,
                    },
                    {
                        label: 'C++',
                        imgUrl: null,
                    },
                    {
                        label: 'EXPRESS.JS',
                        imgUrl: null,
                    },
                    {
                        label: 'VUE.JS',
                        imgUrl: null,
                    },
                ],
                services:[
                    {
                        title: 'Title',
                        desc:  'DEscription',
                    },
                    {
                        title: 'Title 2',
                        desc:  'DEscription 2',
                    },
                    {
                        title: 'Title',
                        desc:  'DEscription',
                    },
                ],
            };
        }
    }
</script>