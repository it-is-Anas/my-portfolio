<template>
    <div class="g-page" >
        <AraHeader />
        <GSection :withHeader="true" id="demo" :controllerCls="['demo-section_controller']" >
            <template #default >
                <div class="demo-section_col demo-section_picture-col">
                    <span class="demo-section-picture-col_before-circle"></span>
                    <img src="../assets/pic1.png" alt="" class="demo-section-picture-col_picture" loading="lazy" >
                </div>
                <div class="demo-section_col arabic demo-section_text-col">
                    <p class="demo-section-text-col_text-welcoming">مرحبا في معرض أعمالي</p>
                    <p class="demo-section-text-col_text-name">إنه أنس الحوراني</p>
                    <p class="demo-section-text-col_text-role">مطور واجهات أمامية</p>
                    <p class="demo-section-text-col_text-bio">
                        مطور واجهات أمامية شغوف مطور و
                        اجهات أمامية شغوف مطور واجهات أمامية 
                        شغوف مطور واجهات أمامية شغوف مطور واجهات أمامية شغوف مطور واجهات أمامية شغوف مطور واجهات أمامية شغوف 
                        مطور واجهات أمامية شغوف 
                        مطور واجهات أمامية شغوف 
                        رمطور واجهات أمامية شغوف 
                        ررررمطور واجهات 
                        أمامية شغوف مطور واجهات أمامية شغوف مطور 
                        واجهات أمامية شغوف مطور واجهات أمامية شغوف مطور واجهات أمامية شغوف 
                    </p>
                    <GButton :label="'وظفني'" class="demo-section-text-col_text-btn arabic" />
                </div>
            </template>
        </GSection>
        <GSection id="aboutme" :controllerCls="['g3-section_controller','about-me-section-controller']" >
            <template #default>
                <div class="g3-section-controller_row g3-section-controller_row-1">
                    <GHeadLine :before="'معلومات عني'" :after="'لمحة صغيرة'" />
                </div>
                <div class="g3-section-controller_row g3-section-controller_row-2 ">
                    <div class="g3-section-controller-row-2_col g3-section-controller-row-2_col-2 about-me-section-controller-row-2_col-2">
                        <span class="demo-section-picture-col_before-circle"></span>
                        <img src="../assets/pic2.png" alt="" class="demo-section-picture-col_picture about-me-section-controller-row-2-col-2_picture" loading="lazy" >
                    </div>
                    <div class="g3-section-controller-row-2_col g3-section-controller-row-2_col-1 about-me-section-controller-row-2_col-1 arabic">
                        <p class="about-me-section-controller-row-2-col-1_text">
                            مطور واجهات أمامية شغوف مطور و
                            اجهات أمامية شغوف مطور واجهات أمامية 
                            شغوف مطور واجهات أمامية شغوف مطور واجهات أمامية شغوف مطور واجهات أمامية شغوف مطور واجهات أمامية شغوف 
                            مطور واجهات أمامية شغوف 
                            مطور واجهات أمامية شغوف 
                            رمطور واجهات أمامية شغوف 
                            ررررمطور واجهات 
                            أمامية شغوف مطور واجهات أمامية شغوف مطور 
                            واجهات أمامية شغوف مطور واجهات أمامية شغوف مطور واجهات أمامية شغوف 
                        </p>
                        <GButton :urlToDownload="getAboutMeSection.cvUrl" :label="'تحميل السيرة الذاتية'" class="demo-section-text-col_text-btn arabic" />
                    </div>
                </div>
            </template>
        </GSection>
        <GSection id="skilles" :controllerCls="['g3-section_controller','about-me-section-controller']" >
            <template #default >
                <div class="g3-section-controller_row g3-section-controller_row-1">
                    <GHeadLine :before="'مهاراتي'" :after="'ماذا أعرف'" />
                </div>
                <div class="g3-section-controller_row g3-section-controller_row-2 arabic">
                    <div class="g3-section-controller-row-2_col g3-section-controller-row-2_col-1 g3-section-controller_row-2-flex ">
                        <Skill v-for="skill in getskills.skills"
                            :key="skill.id"
                            :id="skill.id"
                            :label="skill.label"
                            :imgUrl="skill.imgUrl"
                            />
                    </div>
                </div>
            </template>
        </GSection>
        <GSection id="project" :controllerCls="['g3-section_controller','about-me-section-controller']" >
            <template #default >
                <div class="g3-section-controller_row g3-section-controller_row-1">
                    <GHeadLine :before="'مشاريعي'" :after="'مشاريعي التي قمت بها'" />
                </div>
                <div class="g3-section-controller_row g3-section-controller_row-2 ">
                    <div class="g3-section-controller-row-2_col g3-section-controller-row-2_col-1 g3-section-controller_row-2-flex arabic">
                        <ProjectCard v-for="project in getProjects" 
                            :key="project.id"
                            :imgUrl="project.imgUrl"
                            :label="project.label"
                            :desc="project.desc"
                        />
                    </div>
                </div>
            </template>
        </GSection>
        <GSection id="services" :controllerCls="['g3-section_controller','about-me-section-controller']" >
            <template #default >
                <div class="g3-section-controller_row g3-section-controller_row-1">
                    <GHeadLine :before="'خداماتي'" :after="'مالذي يمككني فعله'" />
                </div>
                <div class="g3-section-controller_row g3-section-controller_row-2 ">
                    <div class="g3-section-controller-row-2_col g3-section-controller-row-2_col-1 g3-section-controller_row-2-flex arabic">
                        <ServiceCard v-for="service in getServices"
                            :key="service.id"
                            :id="service.id"
                            :imgUrl="service.imgUrl"
                            :lable="service.lable"
                        />
                    </div>
                </div>
            </template>
        </GSection>
        <GSection id="contactme" :controllerCls="['g3-section_controller','about-me-section-controller']" >
            <template #default >
                <div class="g3-section-controller_row g3-section-controller_row-1">
                    <GHeadLine :before="'تواصل معي'" :after="'هيا نبدأ مشروع جديد'" />
                </div>
                <div class="g3-section-controller_row g3-section-controller_row-2 contact-me-controller_row-2 arabic">
                    <InputFiled :label="'الاسم :'" :placeholder="'حسن'" />
                    <InputFiled :label="'بريدك الإلكتروني :'" :placeholder="'Jhon@example.com'"  />
                    <TextAreaFiled :label="'رسالتك :'" placeholder="مرحبا أنا حسن"  /> 
                    <GButton :label="'إرسال'"  />
                </div>
            </template>
        </GSection>
        <ara-footer />
    </div>
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
    import AraFooter from '@/components/Footers/ِAraFooter.vue';
    import { mapGetters } from 'vuex';
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
            AraFooter,
        },computed:{
            ...mapGetters({
                'getDemoSection': 'englishStore/getDemoSection',
                'getAboutMeSection': 'englishStore/getAboutMeSection',
                'getskills': 'englishStore/getSkills',
                'getProjects': 'englishStore/getProjects',
                'getServices': 'englishStore/getServices',
            })
        }
    }
</script>