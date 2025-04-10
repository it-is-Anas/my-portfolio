<template> 
    <div class="g-page arabic" ref="page" >
        <AraHeader />
        <GSection :withHeader="true" id="demo" :controllerCls="['demo-section_controller','']" >
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
                            <GButton v-if="demoSectionBtn" :link="'#contactme'" :label="'وظفني'" class="demo-section-text-col_text-btn " />
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
                    <GHeadLine :before="'معلومات عني'" :after="'لمحة صغيرة عني'" />
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
                        <GButton :urlToDownload="cvUrl" :label="'تحميل السيرة الذاتية'" class="demo-section-text-col_text-btn" />
                    </div>
                    <div class="g3-section-controller-row-2_col g3-section-controller-row-2_col-2 about-me-section-controller-row-2_col-2">
                        <img src="../assets/pic2.png" alt="" class="demo-section-picture-col_picture about-me-section-controller-row-2-col-2_picture" loading="lazy" >
                    </div>
                </div>
            </template>
        </GSection>
        <GSection id="skilles" :controllerCls="['g3-section_controller','about-me-section-controller']" >
            <template #default >
                <div class="g3-section-controller_row g3-section-controller_row-1">
                    <GHeadLine :before="'مهاراتي'" :after="'ماذا أعرف'" />
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
                    <GHeadLine :before="'مشاريعي'" :after="'مشاريعي التي قمت بها'" />
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
                    <GHeadLine :before="'خداماتي'" :after="'مالذي يمككني فعله'" />
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
                    <GHeadLine :before="'تواصل معي'" :after="'هيا نبدأ مشروع جديد '" />
                </div>
                <div class="g3-section-controller_row g3-section-controller_row-2 contact-me-controller_row-2">
                    <div class="contact-me-contoller_send-box">
                        <InputFiled  ref="nameFiled" :label="'الاسم : '" :placeholder="'حسن'"  :defaultValue="name" :validator="nameValidator" :errMsg="'الاسم يجب أن يكون على الأقل 3 أحرف و بدون أرقام'" :update="setName" />
                        <InputFiled ref="emailFiled" :label="'بريدك الإلكتروني :'" :placeholder="'Jhon@example.com'" :defaultValue="email" :validator="emailValidator" :errMsg="'البريد الإلكتروني غير صحيح'" :update="setEmail"  />
                        <TextAreaFiled ref="msgFiled" :label="'رسالتك :'" placeholder="مرحبا أنا حسن"   :validator="msgValidator" :errMsg="'الرسالة يجب أن تكون على الأقل 3 أحرف'" :defaultValue="msg"  :update="setMsg"   /> 
                        <GButton class="arabic" :label="'إرسال'"  @click="sendEmail"  />
                    </div>
                    <SocialMediaBar />
                </div>
            </template>
        </GSection>
        <transition name="fade" >
            <div  v-if="upBtn" class="g-controller g-controller_down-btn"  >
                    <i class="fa fa-arrow-right g-down-btn" @click="upBtnClickHandler" ></i>
                </div>
        </transition>
        <eng-footer />
        <AppMsg ref="appMsg"  />
    </div>
    <AppLoader ref="appLoader" />
</template>

<script>
    import AraHeader from '@/components/Headers/custom/ArabicHeader.vue';
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
            AraHeader,
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
                'getDemoSection': 'arabicStore/getDemoSection',
                'getAboutMeSection': 'arabicStore/getAboutMeSection',
                'getskills': 'arabicStore/getSkills',
                'getProjects': 'arabicStore/getProjects',
                'getServices': 'arabicStore/getServices',
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
                upBtn: 0,
            };
        },mounted(){
            this.trackScroll();
            this.demoSectionAnimation();
        },methods:{
            nameValidator(val){
                const  regex = /^(?!.*\d)[a-zA-Z\u0600-\u06FF ]{3,}$/ig;
                return regex.test(val);
            },
            emailValidator(val){
                const  regex=  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ig;
                return regex.test(val);
            },
            msgValidator(val) {
                const regex = /^(?=.*[a-zA-Z\u0600-\u06FF])[a-zA-Z0-9\u0600-\u06FF ]{3,}$/ig;
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
            },upBtnClickHandler(){
                this.$refs.page.scrollTop = 0;
            }
        },watch: {
            gPageScroll(val){
                if(val === 0){
                    this.upBtn = 0;
                }
                else if(val){
                    this.upBtn = 1;
                }


                if(val > 2 * this.part && val < 4 * this.part){
                    this.aboutMeSectionAnimation();
                }else if(val > 4 * this.part && val < 6 * this.part){
                    this.skillSectionAnimation();
                }else if(val > 6 * this.part && val < 8 * this.part){
                    this.projectSectionAnimation();
                }else if(val > 8 * this.part && val < 10 * this.part){
                    this.serviceSectionAnimation();
                }
            },emailStoreErr(val){
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
                if(val){
                    this.$refs.nameFiled.reset();
                    this.$refs.emailFiled.reset();
                    this.$refs.msgFiled.reset();
                    val = false;
                }
            }
        },
        provide(){
            return {
                setMsg: this.setMsgToPage,
            };
        }
    }
</script>