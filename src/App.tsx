
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience.tsx/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Work from "./components/work/Work";





const App = () => {

 return (

 <div className="bg-[#050414]">





<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>



<div className="relative pt-20">
 <Navbar />

<About/>

<Skills />

<Experience/>

<Work/>

<Education/>

<Footer/>

 <Contact/>


 </div>



</div>
 );

};



export default App;