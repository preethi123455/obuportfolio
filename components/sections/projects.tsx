'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const projects = [
    {
      title: 'Senior citizen portal',
      description: 'A dedicated platform offering essential services, healthcare support, and community engagement for senior citizens.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/preethi123455/Senior__citizen__portal',
      demo: 'https://senior-citizen-portal-frontend.onrender.com',
      image: 'https://obupreethi.netlify.app/assets/p2-Cym8R_5o.jpg',
       learnMore: '/blood-donation-details' ,
    },
    {
      title: 'Blood Donation Platform',
      description: 'A secure and real-time platform connecting blood donors with recipients, featuring user authentication, instant notifications, and emergency blood request management.',
      tags: ['Python', 'Machine Learning', 'NLP', 'Data Analysis', 'AI', 'Scikit-learn', 'Pandas', 'NumPy'],
      github: 'https://github.com/Praneesh773/Blood.git',
      demo: 'https://bloodbank-g10h.onrender.com/',
      image: 'https://repository-images.githubusercontent.com/228405622/b739ad00-211d-11ea-958d-d3400a7ea1dc',
        learnMore: '/blood-donation-details' ,
    },
    
    {
      title: 'EduConnect Platform with the help of AI',
      description: 'EduConnect is an AI-powered platform designed to enhance personalized learning experiences, connecting students with tailored educational resources and opportunities for growth.',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'RAG','Groq api'],
      github: 'https://github.com/preethi123455/Educonnect__Platform.git',
      demo: ' https://educonnect-platform-frontend.onrender.com',
      image: 'https://obupreethi.netlify.app/assets/p1-Ccqc7931.jpg',
        learnMore: '/blood-donation-details' ,
    },
    {
      title: 'Math visualization with the help of AI',
      description: 'This project leverages AI to create interactive visualizations that simplify complex mathematical concepts for enhanced understanding and learning.',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'RAG','Groq api'],
      github: ' https://github.com/preethi123455/visual__math',
      demo: 'https://visual-frontend-bsfk.onrender.com',
      image: 'https://obupreethi.netlify.app/assets/p10-OxdkNjox.png',
        learnMore: '/blood-donation-details' ,
    },
   {
  title: 'LinguaLearn – AI-Powered Language Learning Platform',
  description: 'LinguaLearn is an AI-driven, gamified language learning platform designed to improve vocabulary, pronunciation, and grammar through interactive lessons, quizzes, speech recognition, and personalized feedback. The platform includes multilingual support, real-time translation, and progress tracking.',
  tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AI/ML', 'NLP'],
  github: 'https://github.com/preethi123455/lingua-learn-final.git',
  demo: 'https://lingua-learn-final-frontend.onrender.com/',
  image: 'https://images01.nicepagecdn.com/page/74/31/website-template-preview-74317.jpg',
    learnMore: '/blood-donation-details' ,
},
{ title: 'Orangyy – Orange Juice Website', description: 'Orangyy is a full-stack e-commerce web application built for learning purposes. Users can browse, select, and order a variety of orange juice products through a responsive and interactive interface.', tags: ['React', 'Node.js', 'MongoDB', 'Express.js'], 
  github: 'https://github.com/preethi123455/orangyy',
   demo: 'https://orangyy-frontend-nirv.onrender.com/', 
   image: 'https://img.freepik.com/premium-psd/summer-fresh-drink-special-new-menu-promotion-orange-juice-website-landing-page-banner-template_485905-724.jpg', 
     learnMore: '/blood-donation-details' ,
  },
  {
  title: 'FaceAuth – AI Powered Face Recognition Login System',
  description: 'FaceAuth is an AI-driven authentication system that uses Face Recognition to enable secure login and signup. Users can register with facial biometrics, and the system matches face data using deep learning-based embeddings for identity verification. Built with MERN stack and integrated with Face API for intelligent recognition.',
  tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'FaceAPI', 'AI'],
  github: 'https://github.com/preethi123455/face-recognition-signup-and-login',
  demo: 'https://face-recognition-signup-and-login-1.onrender.com',
  image: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2023/12/Screenshot_from_2023-12-18_06-22-33.png',
    learnMore: '/blood-donation-details' ,
},
{
  title: "My Portfolio – Personal Developer Website",
  description:"A clean and modern personal portfolio website built to showcase my skills, projects, achievements, and contact details. It has smooth animations, a responsive design, and separate sections like About, Technologies, Projects, and Contact.",
  tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  github: "https://github.com/preethi123455/obuportfolio",
  demo: "https://obuportfolio.onrender.com",
  image:"https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg",
  learnMore: "/portfolio-details",
},
{
  title: "Cognissance – CSE Department Event Promotion Website",
  description:
    "An interactive event promotion website built for the CSE Department to showcase event details, schedules, rules, and registrations. Instead of using traditional forms or a MERN backend, we integrated Google Sheets with Node.js to store and manage registrations seamlessly. The site includes smooth animations, a responsive UI, and a clean structure for better engagement and participation.",
  tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Node.js", "Google Sheets API"],
  github: "https://github.com/Gurukprs/Cognissance_Website.git",
  demo: "https://cognissance25.vercel.app",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2xx2LBv0guBqw2w38Db_BIZyym1Y1lsMGg&s",
  learnMore: "/portfolio-details",
},
{
  title: "Bus Booking Platform – Figma UI Design",
  description:"An intuitive and user-friendly bus booking interface designed in Figma to simplify ticket booking and travel planning. The design includes smooth navigation flows, seat selection screens, route listings, payment steps, and responsive layouts focused on delivering a seamless user experience.",
  tags: ["Figma", "UI/UX Design", "Prototyping", "User Flow"],
  //github: "https://github.com/preethi123455/obuportfolio",
  demo: "https://www.figma.com/design/NEgDF0N2OlDa6D619HudK0/Untitled?node-id=0-1&t=hO1htFRrvs2BAiKM-1",
  image:"https://static.abhibus.com/images/herosection/operators/seo-mobile-default.webp",
  learnMore: "/portfolio-details",
},
{
  title: "Online Bookstore Platform – Figma UI Design",
  description:"A modern and visually engaging online bookstore interface designed in Figma to deliver a seamless shopping experience for book enthusiasts. The design includes organized category browsing, detailed book pages, smooth checkout flows, and intuitive navigation to improve user engagement and accessibility.",
  tags: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
  //github: "https://github.com/preethi123455/obuportfolio",
  demo: "https://www.figma.com/design/ozrx9GHHH8lVps0KMlCXSW/Untitled?node-id=12-36&t=hf1C75OyPzuylqGe-1",
  image:"https://images.unsplash.com/photo-1518373714866-3f1478910cc0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N0b3JlfGVufDB8fDB8fHww",
  learnMore: "/portfolio-details",
}
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold mb-16 text-center"
        >
          Featured{' '}
          <span className="bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group h-full flex flex-col"
            >
              <div className="glass rounded-2xl overflow-hidden border border-white/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 glow-border flex flex-col h-full">
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-neutral-dark text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                   <div className="flex gap-3 pt-4 mt-auto border-t border-white/20">
                    <a
                      href={project.github}
                      className="flex-1 px-4 py-2 bg-foreground text-white text-sm font-semibold rounded-lg hover:bg-primary transition-colors text-center"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center"
                    >
                      Demo
                    </a>
                    <a
                     href={project.learnMore}
                      className="flex-1 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center"
                    >
                      Learn more
                    </a>
                  </div> 
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
