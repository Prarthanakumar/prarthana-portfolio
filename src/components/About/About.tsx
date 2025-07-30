
import { motion } from 'framer-motion'; // For smooth animations
// Import your profile image. Adjust the path if your image is in a different location.
import profileImage from '../Navbar/profile.png'

const About = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Background elements for visual flair */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Side: About Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
            variants={itemVariants}
          >
            Hello! I'm <span className="font-semibold text-purple-300">Prarthana Kumar</span>, a passionate and dedicated software developer with expertise in building dynamic and responsive web applications. I thrive on creating intuitive user experiences and solving complex problems with elegant code.
          </motion.p>
          <motion.p
            className="text-md md:text-lg text-gray-400 leading-relaxed mb-8"
            variants={itemVariants}
          >
            My journey in technology has equipped me with a strong foundation in{" "}
            <span className="font-medium text-blue-300">React, Tailwind CSS, JavaScript, and more</span>. I am constantly exploring new technologies and methodologies to enhance my skills and deliver high-quality solutions.
          </motion.p>
          <motion.a
            href="#contact" // Link to your contact section
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            variants={itemVariants}
          >
            Let's Connect!
          </motion.a>
        </div>

        {/* Right Side: Profile Image */}
        <motion.div
          className="flex-1 flex justify-center mt-8 md:mt-0" // Added margin top for smaller screens
          variants={itemVariants}
        >
          <img
            src={profileImage}
            alt="Profile of Prarthana Kumar"
            className="rounded-lg shadow-md max-w-full h-auto md:max-h-96 object-cover" // Adjust max-h as needed
          />
        </motion.div>
      </motion.div>

      {/* Tailwind CSS keyframes for blob animation */}
      
    </section>
  );
};

export default About;
