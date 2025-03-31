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
                    label: '(Front end) معرض أعمالي ',
                    tech: 'Tech Stack: Vue.js and Adobe XD ',
                    imgName: 'Porto.png',
                    desc: `ملف أعمال شخصي يُبرز خبرتي في تصميم واجهات المستخدم وتجربة المستخدم ومهاراتي في التطوير. يُبرز المشروع واجهات المستخدم التفاعلية، والتخطيطات الأنيقة، وهيكلية المعلومات المنظمة لتقديم تجربة مستخدم تفاعلية.`,
                    link: 'https://github.com/it-is-Anas',
                },
                { 
                    id: 1,
                    label: '(Full Stack) شوبي',
                    tech: 'Tech Stack: Vue.js, Express.js, MySQL',
                    imgName: 'Shopy.png',
                    desc: 'شوبي منصة تجارة إلكترونية متكاملة تتيح للمستخدمين التسجيل وتسجيل الدخول وتصفح المنتجات وإدارة مشترياتهم. تتضمن تصفية متقدمة، ونظامًا للمفضلة وسلة التسوق، وتتبع الطلبات، وصفحة ملف تعريف المستخدم لإدارة قوائمهم الشخصية والمبيعات.'
                    ,
                    link: 'https://github.com/it-is-Anas',
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