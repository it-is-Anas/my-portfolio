<template>
    <div class="g-page" >
        <EnglishHeader />
        <GSection :withHeader="true" id="demo" :controllerCls="['demo-section_controller']" >
            <template #default >
                <div class="demo-section_col demo-section_text-col">
                    <p class="demo-section-text-col_text-welcoming">
                        <transition   name="slide-up" >
                            <p v-if="demoSectionWelcome" class="demo-section-text_content" >
                                {{ getDemoSection.welcoming }}
                            </p>
                        </transition>
                    </p>
                    <p class="demo-section-text-col_text-name">
                        <transition   name="grow" >
                            <p v-if="demoSectionName" class="demo-section-text_content" >
                                {{ getDemoSection.name }}
                            </p>
                        </transition>
                    </p>
                    <p class="demo-section-text-col_text-role">
                        <transition   name="slide-up" >
                            <p v-if="demoSectionRole" class="demo-section-text_content" >
                                {{ getDemoSection.role }}
                            </p>
                        </transition>
                    </p>
                    <p class="demo-section-text-col_text-bio">
                        <transition   name="slide-up" >
                            <p v-if="demoSectionBio" class="demo-section-text_content" >
                                {{ getDemoSection.bio }}
                            </p>
                        </transition>
                    </p>
                    <div class="demo-section_btn-controller">
                        <transition name="slide-up" >
                            <GButton v-if="demoSectionBtn" :label="'Hire ME'" class="demo-section-text-col_text-btn" />
                        </transition>
                    </div>
                </div>
                <div class="demo-section_col demo-section_picture-col">
                    <span  class="demo-section-picture-col_before-circle"></span>
                    <img src="../assets/pic1.png" alt="" class="demo-section-picture-col_picture" loading="lazy" >
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
                        <div class="about-me-section-controller-row-2-col-1_text">
                            <transition name="grow" >
                                <p v-if="aboutMeSectionText" class="about-me-section-controller-row-2-col-1-text_content">
                                    {{ getAboutMeSection.text }}
                                </p>
                            </transition>
                        </div>
                        <GButton :urlToDownload="getAboutMeSection.cvUrl" :label="'Download CV'" class="demo-section-text-col_text-btn" />
                    </div>
                    <div class="g3-section-controller-row-2_col g3-section-controller-row-2_col-2 about-me-section-controller-row-2_col-2">
                        <span class="demo-section-picture-col_before-circle"></span>
                        <img src="../assets/pic2.png" alt="" class="demo-section-picture-col_picture about-me-section-controller-row-2-col-2_picture" loading="lazy" >
                    </div>
                </div>
            </template>
        </GSection>
        <GSection id="skilles" :controllerCls="['g3-section_controller','about-me-section-controller']" >
            <template #default >
                <div class="g3-section-controller_row g3-section-controller_row-1">
                    <GHeadLine :before="'Skilles'" :after="'What do I know'" />
                </div>
                <div class="g3-section-controller_row g3-section-controller_row-2">
                    <transition name="slide-up" >                    
                        <div v-if="skillSectionSkillBox" class="g3-section-controller-row-2_col g3-section-controller-row-2_col-1 g3-section-controller_row-2-flex ">
                            <Skill 
                                v-for="skill in getskills.skills"
                                :key="skill.id"
                                :id="skill.id"
                                :label="skill.label"
                                :imgUrl="skill.imgUrl"
                            />
                        </div>
                    </transition>

                </div>
            </template>
        </GSection>
        <GSection id="project" :controllerCls="['g3-section_controller','about-me-section-controller']" >
            <template #default >
                <div class="g3-section-controller_row g3-section-controller_row-1">
                    <GHeadLine :before="'Projects'" :after="'Projects I have built'" />
                </div>
                <div class="g3-section-controller_row g3-section-controller_row-2">
                    <transition name="slide-up" >
                        <div v-if="projectSectionProjectBox" class="g3-section-controller-row-2_col g3-section-controller-row-2_col-1 g3-section-controller_row-2-flex ">
                            <ProjectCard v-for="project in getProjects" 
                                :key="project.id"
                                :imgUrl="project.imgUrl"
                                :label="project.label"
                                :tech="project.tech"
                                :desc="project.desc"
                                :link="project.link"
                            />
                        </div>
                    </transition>
                </div>
            </template>
        </GSection>
        <GSection id="services" :controllerCls="['g3-section_controller','about-me-section-controller']" >
            <template #default >
                <div class="g3-section-controller_row g3-section-controller_row-1">
                    <GHeadLine :before="'Services'" :after="'What Can I Offer'" />
                </div>
                <div class="g3-section-controller_row g3-section-controller_row-2">
                    <transition name="slide-up" >
                        <div v-if="serviceSectionServiceBox" class="g3-section-controller-row-2_col g3-section-controller-row-2_col-1 g3-section-controller_row-2-flex ">
                            <ServiceCard v-for="service in getServices"
                                :key="service.id"
                                :id="service.id"
                                :imgUrl="service.imgUrl"
                                :lable="service.lable"
                            />
                        </div>
                    </transition>
                </div>
            </template>
        </GSection>
        <GSection id="contactme " :controllerCls="['g3-section_controller','about-me-section-controller']" >
            <template #default >
                <div class="g3-section-controller_row g3-section-controller_row-1">
                    <GHeadLine :before="'Contact Me'" :after="'Let\'s Start a project '" />
                </div>
                <div class="g3-section-controller_row g3-section-controller_row-2 contact-me-controller_row-2">
                    <InputFiled :label="'Your name : '" :placeholder="'Jhon'" />
                    <InputFiled :label="'Your email :'" :placeholder="'Jhon@example.com'"  />
                    <TextAreaFiled :label="'Message :'" placeholder="Message from Jhon"  /> 
                    <GButton :label="'Send'"  />
                </div>
            </template>
        </GSection>
        <eng-footer />
    </div>
</template>

<script>
    import EnglishHeader from '@/components/Headers/custom/EnglishHeader.vue';
    import GSection from '@/components/Sections/GSection.vue';
    import GButton from '@/components/Buttons/GButton.vue';
    import GHeadLine from '@/components/HeadLine/GHeadLine.vue';
    import Skill from '@/components/Skill/Skill.vue';
    import ProjectCard from '@/components/Project Card/ProjectCard.vue';
    import ServiceCard from '@/components/Service Card/ServiceCard.vue';
    import InputFiled from '@/components/Inputs/InputFiled.vue';
    import TextAreaFiled from '@/components/Inputs/TextAreaFiled.vue';
    import EngFooter from '@/components/Footers/EngFooter.vue';    
    import { mapGetters } from 'vuex';
    export default{
        components:{
            EnglishHeader,
            GSection,
            GButton,
            GHeadLine,
            Skill,
            ProjectCard,
            ServiceCard,
            InputFiled,
            TextAreaFiled,
            EngFooter,
        },computed:{
            ...mapGetters({
                'getDemoSection': 'englishStore/getDemoSection',
                'getAboutMeSection': 'englishStore/getAboutMeSection',
                'getskills': 'englishStore/getSkills',
                'getProjects': 'englishStore/getProjects',
                'getServices': 'englishStore/getServices',
            })
        },data(){
            return {
                scroll: 0,
                demoSectionWelcome: false,  
                demoSectionName: false,  
                demoSectionRole: false,  
                demoSectionBio: false,  
                demoSectionBtn: false,  
                aboutMeSectionText: false,  
                skillSectionSkillBox: false, 
                projectSectionProjectBox:false, 
                serviceSectionServiceBox:false, 
            };
        },mounted(){
            const time = 500;
            const demoSection = document.querySelector('#demo');
            demoSection.onmousemove =()=>{
                setTimeout(() => {
                    this.demoSectionWelcome = true;
                    setTimeout(() => {
                        this.demoSectionName = true;
                        setTimeout(() => {
                            this.demoSectionRole = true;
                            setTimeout(() => {
                                this.demoSectionBio = true;
                                setTimeout(() => {
                                    this.demoSectionBtn = true;
                                },time);
                            },time);
                        },time);
                    },time);
                });
            };
            
            const aboutMeSection = document.querySelector('#aboutme');
            aboutMeSection.onmouseenter = ()=>{
                setTimeout(() => {
                    this.aboutMeSectionText = true;
                }, time);
            };
            const projectSection = document.querySelector('#project');
            projectSection.onmouseenter = ()=>{
                setTimeout(() => {
                    this.projectSectionProjectBox = true;
                }, time);
            };
            const serviceSection = document.querySelector('#services');
            serviceSection.onmouseenter = ()=>{
                setTimeout(() => {
                    this.serviceSectionServiceBox = true;
                }, time);
            };
            const skillSection = document.querySelector('#skilles');
            skillSection.onmouseenter = ()=>{
                setTimeout(() => {
                    this.skillSectionSkillBox = true;
                }, time);
            };
        }
    }
</script>