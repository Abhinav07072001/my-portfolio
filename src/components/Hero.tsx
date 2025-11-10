// import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import profilePic from "../assets/Abhi-Image.jpg";

// const Hero = () => {
//   const scrollToAbout = () => {
//     const aboutSection = document.getElementById('about');
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const handleResume = () => {
//     const resumeViewLink = 'https://drive.google.com/file/d/1kSac_ygMcAZFbnVty8mjNlYWRc2Fuwbn/view';
//     const resumeDownloadLink = 'https://drive.google.com/uc?export=download&id=1kSac_ygMcAZFbnVty8mjNlYWRc2Fuwbn';
    
//     // Open the resume in a new tab
//     window.open(resumeViewLink, '_blank');

//     // Trigger the download automatically
//     const link = document.createElement('a');
//     link.href = resumeDownloadLink;
//     link.download = 'AbhinavDixitResume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex flex-col justify-start sm:justify-center items-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 pt-8 sm:pt-16"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//         <div className="text-center">
//           {/* Profile Image */}
//           <div className="mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
//             <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl ring-4 ring-white">
//               <img
//                 src="/Abhi-Image.jpg"
//                 alt="Abhinav Dixit"
//                 className="w-40 h-40 mx-auto rounded-full shadow-2xl ring-4 ring-white object-cover"
//                 onError={(e) => {
//                   const target = e.target as HTMLImageElement;
//                   target.style.display = 'none';
//                   const parent = target.parentElement;
//                   if (parent) {
//                     parent.textContent = 'AD';
//                   }
//                 }}
//               />
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
//             <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
//               Hi, I'm{' '}
//               <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                 Abhinav Dixit
//               </span>
//             </h1>

//             <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold">
//               Full-Stack Software Engineer
//             </h2>

//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
//               Enthusiastic about developing robust web applications and implementing modern tech solutions.
//               Experienced in full-stack development, cloud platforms, and optimizing seamless user experiences.
//             </p>

//             {/* Key Highlights */}
//             <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
//               {['React & Node.js', 'Cloud', 'Full-Stack Development', 'Mongo & Firebase'].map((skill, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 text-blue-700 font-medium shadow-sm text-sm sm:text-base"
//                 >
//                   {skill}
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10 sm:mt-12">
//               <Button
//                 variant="outline"
//                 onClick={handleResume}
//                 className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg transition-all duration-300"
//               >
//                 <Download className="mr-2 h-5 w-5" />
//                 Download Resume
//               </Button>

//               <Button
//                 variant="outline"
//                 onClick={scrollToAbout}
//                 className="border-2 border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white px-8 py-4 text-lg transition-all duration-300"
//               >
//                 Explore My Work
//               </Button>
//             </div>

//             {/* Social Links */}
//             <div className="flex justify-center space-x-8 mt-10 sm:mt-12">
//               <a
//                 href="https://github.com/Abhinav07072001"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
//               >
//                 <Github className="h-8 w-8" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/abhinavdixit771/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
//               >
//                 <Linkedin className="h-8 w-8" />
//               </a>
//               <a
//                 href="mailto:dixitabhinav788@gmail.com"
//                 className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
//               >
//                 <Mail className="h-8 w-8" />
//               </a>
//             </div>
//           </div>

//           {/* Scroll Indicator */}
//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//             <button
//               onClick={scrollToAbout}
//               className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
//             >
//               <ArrowDown className="h-8 w-8" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePic from "../assets/Abhi-Image.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResume = () => {
    const resumeViewLink = 'https://drive.google.com/file/d/1kSac_ygMcAZFbnVty8mjNlYWRc2Fuwbn/view';
    const resumeDownloadLink = 'https://drive.google.com/uc?export=download&id=1kSac_ygMcAZFbnVty8mjNlYWRc2Fuwbn';
    
    window.open(resumeViewLink, '_blank');

    const link = document.createElement('a');
    link.href = resumeDownloadLink;
    link.download = 'AbhinavDixitResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative min-h-[90vh] pt-[4.5rem] sm:pt-[5rem] md:pt-[3rem] lg:pt-[6rem]"
    >
      {/* ✅ Custom iPad spacing fix */}
      <style jsx>{`
        @media only screen 
          and (min-device-width: 768px)
          and (max-device-width: 1366px)
          and (-webkit-min-device-pixel-ratio: 2) {
          section#home {
            padding-top: 2rem !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl ring-4 ring-white overflow-hidden">
              <img
                src={profilePic}
                alt="Abhinav Dixit"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.textContent = 'AD';
                  }
                }}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Abhinav Dixit
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">
              Full-Stack Software Engineer
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Enthusiastic about developing robust web applications and implementing modern tech solutions.
              Experienced in full-stack development, cloud platforms, and optimizing seamless user experiences.
            </p>

            {/* Key Highlights */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              {['React & Node.js', 'Cloud', 'Full-Stack Development', 'Mongo & Firebase'].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full border border-blue-200 text-blue-700 font-medium shadow-sm text-xs sm:text-sm md:text-base"
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-10 md:mt-12">
              <Button
                variant="outline"
                onClick={handleResume}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                onClick={scrollToAbout}
                className="border-2 border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300"
              >
                Explore My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 sm:space-x-8 mt-8 sm:mt-10 md:mt-12">
              <a
                href="https://github.com/Abhinav07072001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6 sm:h-8 sm:w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinavdixit771/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6 sm:h-8 sm:w-8" />
              </a>
              <a
                href="mailto:dixitabhinav788@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6 sm:h-8 sm:w-8" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
            >
              <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
