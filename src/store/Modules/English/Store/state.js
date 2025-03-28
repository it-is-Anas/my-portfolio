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
            cvUrl: 'https://drive.google.com/uc?export=download&id=1nQhf896vY1J5TmS1UejTXVmVHFJP68iq',
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
                    label: 'JavaScript',
                },
                {
                    id: 4,
                    img: 'ts.png',
                    label: 'TypeScript',
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
                    imgName: 'Porto.png',
                    desc: `A personal portfolio showcasing my UI/UX design expertise and development skills. The project highlights interactive user interfaces, clean layouts, and structured information architecture to deliver an engaging user experience.`,
                    link: 'https://github.com/it-is-Anas',
                },
                { 
                    id: 1,
                    label: 'Shopy (Full Stack)',
                    tech: 'Tech Stack: Vue.js and Adobe XD',
                    imgName: 'Shopy.png',
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