export default function (){
    return {
        demoSection: { 
            welcoming: 'مرحباً بكم في معرض أعمالي', 
            name:'إنه أنس الحوراني',
            role: 'مطور الويب الكامل',
            bio: `
                أنا مطور ويب متكامل، شغوف، وطالب في جامعة دمشق بقسم تكنولوجيا المعلومات. بخبرتي في Vue.js وExpress.js وتقنيات الويب الحديثة، أصمم تجارب رقمية سلسة وديناميكية. أتخصص في تصميم واجهة المستخدم وتجربة المستخدم، وتطوير الواجهات الأمامية والخلفية، وإدارة قواعد البيانات، وإنشاء تطبيقات فعّالة وسهلة الاستخدام.`,
            
        },
        aboutMeSection: {
            text: `بصفتي مطورًا متكاملًا ومتخصصًا، أتمتع بخبرة في HTML وCSS وJavaScript وJava وC++ وSQL وMongoDB وOOP وهياكل البيانات وتصميم واجهات المستخدم وتجربة المستخدم باستخدام Adobe XD. أستمتع بتحويل الأفكار إلى تطبيقات ويب تفاعلية وعملية، مما يضمن تجربة مستخدم بديهية وهندسة خلفية قابلة للتطوير. يركز أسلوبي في التطوير على الكود البرمجي النظيف، وتحسين الأداء، وسهولة الاستخدام. بفضل خبرتي المتينة في تقنيات الواجهة الأمامية والخلفية، قمتُ ببناء مشاريع تدمج مبادئ واجهات المستخدم وتجربة المستخدم الحديثة مع حلول خلفية فعّالة. أسعى جاهدًا لإنشاء تطبيقات فعّالة ومتجاوبة وتركز على المستخدم.`,
        },
        skillsSection:{
            skills:[
                {
                    id: 0,
                    img: 'html.png',
                    label: 'html',
                },
                {
                    id: 1,
                    img: 'css.png',
                    label: 'css',
                },
                {
                    id: 2,
                    img: 'java.png',
                    label: 'java',
                },
                {
                    id: 3,
                    img: 'cpp.png', 
                    label: 'c++',
                },
                {
                    id: 4,
                    img: 'js.png',
                    label: 'javascript',
                },
                {
                    id: 4,
                    img: 'ts.png',
                    label: 'TypeScript',
                },
                {
                    id: 4,
                    img: 'github.png',
                    label: 'Git Hub',
                },
                {
                    id: 5,
                    img: 'node.png',
                    label: 'node js',
                },
                {
                    id: 6,
                    img: 'exp.png',
                    label: 'express js',
                },
                {
                    id: 7,
                    img: 'vue.png',
                    label: 'vue.js',
                },
            ]
        },projectSection:{
            projects: [
                {
                    id: 0,
                    label: 'Portofolio (Front end)',
                    imgName: 'Porto.png',
                    desc: `A personal portfolio showcasing my UI/UX design expertise and development skills. The project highlights interactive user interfaces, clean layouts, and structured information architecture to deliver an engaging user experience.`,
                    // link: 'https://github.com/it-is-Anas',
                },
                { 
                    id: 1,
                    label: 'Shopy (Full Stack)',
                    link: 'https://github.com/it-is-Anas',
                    imgName: 'Shopy.png',
                    desc: 'SHOPY is a full-stack e-commerce platform that allows users to register, log in, browse products, and manage their purchases. It includes advanced filtering, a favorites & cart system, order tracking, and a user profile page for managing personal listings and sales'
                    ,
                },
            ],
        },ServiceSection: {
            services: [
                {
                    id: 0,
                    imgName: 'Front.png',
                    lable: 'تطوير واجهات أمامية',
                },
                {
                    id: 1,
                    imgName: 'back.png',
                    lable: 'تطوير واجهات خلفية',
                },
                {
                    id: 2,
                    imgName: 'UI.png',
                    lable: 'رسم واجهات المستخدم',
                },
            ]
        }
    };
};