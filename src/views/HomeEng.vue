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
                        <transition   name="slide-up" >
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
                            <GButton v-if="demoSectionBtn" :link="'#contactme'" :label="`let's start a project`" class="demo-section-text-col_text-btn" />
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
                        <GButton :urlToDownload="cvUrl" :label="'Download CV'" class="demo-section-text-col_text-btn" />
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
                                :imgName="skill.img"
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
                                :imgName="project.imgName"
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
                                :imgName="service.imgName"
                                :lable="service.lable"
                            />
                        </div>
                    </transition>
                </div>
            </template>
        </GSection>
        <GSection id="contactme" :controllerCls="['g3-section_controller','about-me-section-controller']" >
            <template #default >
                <div class="g3-section-controller_row g3-section-controller_row-1">
                    <GHeadLine :before="'Contact Me'" :after="'Let\'s Start a project '" />
                </div>
                <div class="g3-section-controller_row g3-section-controller_row-2 contact-me-controller_row-2">
                    <div class="contact-me-contoller_send-box">
                        <InputFiled ref="nameFiled" :label="'Your name : '" :defaultValue="name" :placeholder="'Jhon'" :validator="nameValidator" :errMsg="'Name has to be at least 3 char at least can\'t have numbers'" :update="setName" />
                        <InputFiled ref="emailFiled" :label="'Your email :'" :defaultValue="email" :placeholder="'Jhon@example.com'" :validator="emailValidator" :errMsg="'Email is not valied'" :update="setEmail" />
                        <TextAreaFiled ref="msgFiled" :label="'Message :'"  placeholder="Message from Jhon" :validator="msgValidator" :errMsg="'msg have to be atleast 3 chars'" :defaultValue="msg"  :update="setMsg"  /> 
                        <GButton :label="'Send'" @click="sendEmail" />
                    </div>
                    <SocialMediaBar />
                </div>
            </template>
        </GSection>
        <eng-footer />
        <AppMsg ref="appMsg"  />
    </div>
    <AppLoader ref="appLoader" />
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
    import { mapActions, mapGetters, mapMutations } from 'vuex';
    import SocialMediaBar from '@/components/SocialMediaBar/SocialMediaBar.vue';

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
            SocialMediaBar,
        },computed:{
            ...mapGetters({
                'getDemoSection': 'englishStore/getDemoSection',
                'getAboutMeSection': 'englishStore/getAboutMeSection',
                'getskills': 'englishStore/getSkills',
                'getProjects': 'englishStore/getProjects',
                'getServices': 'englishStore/getServices',
                'cvUrl': 'glubalStore/getCvUrl',
                // form 
                'name': 'emailStore/getName',
                'email': 'emailStore/getEmail',
                'msg': 'emailStore/getMsg',
                'emailStoreErr': 'emailStore/getErr',
                'emailStoreLoader': 'emailStore/getLoader',
                'getReset': 'emailStore/getReset',
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
                gPageScroll: 0,
                gPageMaxScroll: 0,
                part: 0,
                time: 1000,
            };
        },mounted(){
            this.trackScroll();
            this.demoSectionAnimation();
        },methods:{
            nameValidator(val){
                const  regex=  /^(?!.*\d)[a-zA-Z ]{3,}$/ig;
                return regex.test(val);
            },
            emailValidator(val){
                const  regex=  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ig;
                return regex.test(val);
            },
            msgValidator(val) {
                const regex = /^(?=.*[a-zA-Z])[a-zA-Z0-9 ]{3,}$/ig;
                return regex.test(val);
            },
            ...mapMutations({
                'setName': 'emailStore/setName',
                'setEmail': 'emailStore/setEmail',
                'setMsg': 'emailStore/setMsg',
            }),
            ...mapActions({
                'sendEmail': 'emailStore/sendEmail'
            }),
            demoSectionAnimation(){
                setTimeout(() => {
                this.demoSectionWelcome = 1;
                setTimeout(() => {
                    this.demoSectionName = 1;
                    setTimeout(() => {
                        this.demoSectionRole = 1;
                        setTimeout(() => {
                            this.demoSectionBio = 1;
                            setTimeout(() => {
                                this.demoSectionBtn = 1;
                            }, this.time);
                        }, this.time);
                    }, this.time);
                }, this.time);
            }, this.time);
            },
            aboutMeSectionAnimation(){
                this.aboutMeSectionText = 1;
            },
            skillSectionAnimation(){
                this.skillSectionSkillBox = 1;
            },
            projectSectionAnimation(){
                this.projectSectionProjectBox = 1;
            },
            serviceSectionAnimation(){
                this.serviceSectionServiceBox = 1;
            },
            trackScroll(){
                const gPage= document.querySelector('.g-page');
                this.gPageMaxScroll = gPage.scrollHeight;
                this.part = this.gPageMaxScroll / 13.5;
                gPage.addEventListener('scroll',()=>{
                    this.gPageScroll = gPage.scrollTop;
                });
            },setMsgToPage(msg,time=null){
                this.$refs.appMsg.setMsg(msg,time);
            }
        },watch: {
            gPageScroll(val){
                if(val > 2 * this.part && val < 4 * this.part){
                    this.aboutMeSectionAnimation();
                }else if(val > 4 * this.part && val < 6 * this.part){
                    this.skillSectionAnimation();
                }else if(val > 6 * this.part && val < 8 * this.part){
                    this.projectSectionAnimation();
                }else if(val > 8 * this.part && val < 10 * this.part){
                    this.serviceSectionAnimation();
                }
            },
            emailStoreErr(val){
                if(val){
                    this.setMsgToPage(val,5000);
                }
            },emailStoreLoader(val){
                if(val){
                    this.$refs.appLoader.open();
                }else{
                    this.$refs.appLoader.close();
                }
            },getReset(val){
                console.log(val);
                if(val){
                    this.$refs.nameFiled.reset();
                    this.$refs.emailFiled.reset();
                    this.$refs.msgFiled.reset();
                    val = false;
                }
            }
        },provide(){
            return {
                setMsg: this.setMsgToPage,
            };
        }
    }
</script>