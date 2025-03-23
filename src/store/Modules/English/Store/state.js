export default function (){
    return {
        demoSection: { 
            welcoming: 'Welcome to my Portofolio', 
            name:'It\'s Anas Al Hourani',
            role: 'Full-Stack Web Develope',
            bio: `
                I'm a passionate Full-Stack Web Developer and a student at Damascus University in the ITF department. With expertise in Vue.js, Express.js, and modern web technologies, I craft seamless and dynamic digital experiences. I specialize in UI/UX design, frontend and backend development, and database management, creating efficient and user-friendly applications`,
            
        },
        aboutMeSection: {
            text: `As a dedicated Full-Stack Developer, I have experience in HTML, CSS, JavaScript, Java, C++, SQL, MongoDB, OOP, Data Structures, and UI/UX design using Adobe XD. I enjoy transforming ideas into interactive and functional web applications, ensuring intuitive user experiences and scalable backend architectures. My development approach emphasizes clean code, performance optimization, and usability.
                    With a strong foundation in both frontend and backend technologies, I have built projects that integrate modern UI/UX principles with robust backend solutions. I strive to create applications that are efficient, responsive, and user-centric.`,
            cvUrl: 'data:image/jpeg;base64,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',
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
                    tech: 'Tech Stack: Vue.js, Express.js, MySQL',
                    imgUrl: '',
                    desc: `A personal portfolio showcasing my UI/UX design expertise and development skills. The project highlights interactive user interfaces, clean layouts, and structured information architecture to deliver an engaging user experience.`,
                    link: 'https://github.com/it-is-Anas',
                },
                {
                    id: 1,
                    label: 'Shopy (Full Stack)',
                    tech: 'Tech Stack: Vue.js and Adobe XD',
                    imgUrl: '',
                    desc: 'SHOPY is a full-stack e-commerce platform that allows users to register, log in, browse products, and manage their purchases. It includes advanced filtering, a favorites & cart system, order tracking, and a user profile page for managing personal listings and sales'
                    ,
                    link: 'https://github.com/it-is-Anas',
                },
            ],
        },ServiceSection: {
            services: [
                {
                    id: 0,
                    imgName: 'Front.png',
                    lable: 'Front End Development',
                },
                {
                    id: 1,
                    imgName: 'back.png',
                    lable: 'Back End Development',
                },
                {
                    id: 2,
                    imgName: 'UI.png',
                    lable: 'UI && UX',
                },
            ]
        }
    };
};