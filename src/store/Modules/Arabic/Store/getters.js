export default {
    getDemoSection(state){
        return state.demoSection;
    },
    getAboutMeSection(state){
        return state.aboutMeSection;
    },
    getSkills(state){
        return state.skillsSection;
    },
    getProjects(state){
        return state.projectSection.projects;
    },
    getServices(state){
        return state.ServiceSection.services;
    },

};