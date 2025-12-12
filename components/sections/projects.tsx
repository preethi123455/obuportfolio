'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref: inViewRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Senior citizen portal',
      description: 'A dedicated platform offering essential services, healthcare support, and community engagement for senior citizens.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/preethi123455/Senior__citizen__portal',
      demo: 'https://senior-citizen-portal-frontend.onrender.com',
      image: 'https://obupreethi.netlify.app/assets/p2-Cym8R_5o.jpg',
      learnMore: '/blood-donation-details',
    },
    {
      title: 'Blood Donation Platform',
      description: 'A secure real-time system connecting blood donors with recipients.',
      tags: ['Python', 'Machine Learning', 'AI', 'Pandas', 'NumPy'],
      github: 'https://github.com/Praneesh773/Blood.git',
      demo: 'https://bloodbank-g10h.onrender.com/',
      image: 'https://repository-images.githubusercontent.com/228405622/b739ad00-211d-11ea-958d-d3400a7ea1dc',
      learnMore: '/blood-donation-details',
    },
    {
      title: 'EduConnect – AI Learning Platform',
      description: 'AI-powered personalized learning with course recommendations.',
      tags: ['React', 'Node.js', 'MongoDB', 'RAG', 'AI'],
      github: 'https://github.com/preethi123455/Educonnect__Platform.git',
      demo: 'https://educonnect-platform-frontend.onrender.com',
      image: 'https://obupreethi.netlify.app/assets/p1-Ccqc7931.jpg',
      learnMore: '/blood-donation-details',
    },
    {
      title: 'Math Visualization – AI Tools',
      description: 'AI-generated math visualizations for deeper understanding.',
      tags: ['React', 'Node.js', 'MongoDB', 'AI'],
      github: 'https://github.com/preethi123455/visual__math',
      demo: 'https://visual-frontend-bsfk.onrender.com',
      image: 'https://obupreethi.netlify.app/assets/p10-OxdkNjox.png',
      learnMore: '/blood-donation-details',
    },
    {
      title: 'LinguaLearn – AI Language Learning',
      description: 'Gamified AI-powered learning for 5 languages.',
      tags: ['React', 'Node.js', 'NLP', 'AI'],
      github: 'https://github.com/preethi123455/lingua-learn-final.git',
      demo: 'https://lingua-learn-final-frontend.onrender.com/',
      image: 'https://images01.nicepagecdn.com/page/74/31/website-template-preview-74317.jpg',
      learnMore: '/blood-donation-details',
    },
    {
      title: 'Orangyy – Juice Store',
      description: 'Responsive e-commerce store for orange juice.',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/preethi123455/orangyy',
      demo: 'https://orangyy-frontend-nirv.onrender.com/',
      image: 'https://img.freepik.com/premium-psd/summer-fresh-drink-special-new-menu-promotion-orange-juice-website-landing-page-banner-template_485905-724.jpg',
      learnMore: '/blood-donation-details',
    },
    {
      title: 'FaceAuth – AI Face Login',
      description: 'Face recognition based login and signup using MERN.',
      tags: ['React', 'Node.js', 'MongoDB', 'AI'],
      github: 'https://github.com/preethi123455/face-recognition-signup-and-login',
      demo: 'https://face-recognition-signup-and-login-1.onrender.com',
      image: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2023/12/Screenshot_from_2023-12-18_06-22-33.png',
      learnMore: '/blood-donation-details',
    },
    {
      title: 'My Portfolio Website',
      description: 'Modern portfolio built with animations and responsive UI.',
      tags: ['Next.js', 'React', 'Tailwind CSS'],
      github: 'https://github.com/preethi123455/obuportfolio',
      demo: 'https://obuportfolio.onrender.com',
      image: 'https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg',
      learnMore: '/portfolio-details',
    },
    {
      title: 'Cognissance Event Website',
      description: 'Event website integrated with Google Sheets API.',
      tags: ['Next.js', 'Google Sheets API'],
      github: 'https://github.com/Gurukprs/Cognissance_Website.git',
      demo: 'https://cognissance25.vercel.app',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2xx2LBv0guBqw2w38Db_BIZyym1Y1lsMGg&s',
      learnMore: '/portfolio-details',
    },
    {
      title: 'Bus Booking – Figma UI',
      description: 'End-to-end Figma UI flow for bus ticket booking.',
      tags: ['Figma', 'UI/UX'],
      demo: 'https://www.figma.com/design/NEgDF0N2OlDa6D619HudK0/Untitled?node-id=0-1&t=hO1htFRrvs2BAiKM-1',
      image: 'https://static.abhibus.com/images/herosection/operators/seo-mobile-default.webp',
      learnMore: '/portfolio-details',
    },
    {
      title: 'Online Bookstore – Figma UI',
      description: 'Elegant UI design for online book shopping.',
      tags: ['Figma', 'UI/UX'],
      demo: 'https://www.figma.com/design/ozrx9GHHH8lVps0KMlCXSW/Untitled?node-id=12-36&t=hf1C75OyPzuylqGe-1',
      image: 'https://images.unsplash.com/photo-1518373714866-3f1478910cc0',
      learnMore: '/portfolio-details',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      ref={inViewRef}
      initial="visible"
      animate="visible"
      className="min-h-screen py-20 px-6 bg-background"
    >
      <div className="w-full max-w-6xl mx-auto">

        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center text-foreground">
          Featured <span className="bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">Projects</span>
        </h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group h-full flex flex-col"
            >
              <div className="glass rounded-2xl overflow-hidden border border-white/20 hover:border-primary/50 transition-all hover:shadow-xl flex flex-col h-full">

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-neutral-dark text-sm mb-4 leading-relaxed">{project.description}</p>

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

                  <div className="flex gap-3 pt-4 mt-auto border-t border-white/20">
                    {project.github && (
                      <a href={project.github} className="flex-1 px-4 py-2 bg-foreground text-white text-sm font-semibold rounded-lg text-center">
                        GitHub
                      </a>
                    )}
                    <a href={project.demo} className="flex-1 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg text-center">
                      Demo
                    </a>
                    <a href={project.learnMore} className="flex-1 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg text-center">
                      Learn more
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Projects;
