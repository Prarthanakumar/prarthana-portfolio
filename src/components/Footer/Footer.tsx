import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Optional typing if you're using TypeScript
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-6 sm:px-12 md:px-[7vw] lg:px-[20vw] bg-black">
      <div className="text-center">
        {/* Logo / Name */}
        <h2 className="text-xl font-semibold text-purple-500">Prarthana Kumar</h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/prarthana-kumar-06a35330b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl hover:text-purple-500 transform hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/itz.pra_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-xl hover:text-purple-500 transform hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Prarthana Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
