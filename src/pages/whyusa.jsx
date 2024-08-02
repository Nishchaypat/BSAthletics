// import React from "react";
// import { Typography, Card, CardBody } from "@material-tailwind/react";
// import { PageTitle, Footer } from "@/widgets/layout";
// import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaBriefcase, FaGlobe } from 'react-icons/fa';

// export function WhyUsa() {
//   return (
//     <>
//       <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 bg-gradient-to-r from-[#ffffff] to-[#ffffff]">
//         <div className="absolute top-0 h-full w-full bg-[url('/img/02-Entry-Hall.jpg')] bg-cover bg-center opacity-70" />
//         <div className="relative z-10 container mx-auto text-center text-black">
//           <Typography variant="h1" className="mb-8 font-bold text-4xl md:text-5xl lg:text-6xl">
//             Academic Excellence in U.S. Colleges
//           </Typography>
//         </div>
//       </div>

//       <section className="bg-gray-100 text-gray-900 px-6 py-16">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap items-center">
//             <div className="mx-auto w-full px-4 text-center md:w-5/12">
//               <Typography className="mb-8 font-normal text-blue-gray-500">
//                 A World-Class Education
//                 The United States is renowned for its world-class education system, offering a wide range of academic programs and opportunities that empower students to achieve their career goals. At BSathletics, we understand the importance of academic success, and we are committed to helping student-athletes excel both in and out of the classroom.
//               </Typography>
//               <br /><br />
//               <Typography className="mb-8 font-normal text-blue-gray-500">
//                 Diverse Degree Options
//               </Typography>
//             </div>
//           </div>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
//               <div className="bg-blue-500 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-white font-bold flex items-center">
//                   <FaGraduationCap className="mr-2" /> Arts and Humanities
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-900 mb-4 font-semibold">
//                   Programs in literature, history, philosophy, and more provide a deep understanding of culture and society, fostering critical thinking and communication skills.
//                 </Typography>
//               </CardBody>
//             </Card>

//             <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
//               <div className="bg-blue-500 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-white font-bold flex items-center">
//                   <FaGraduationCap className="mr-2" /> Sciences
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-900 mb-4 font-semibold">
//                   Degrees in biology, chemistry, physics, and environmental science offer rigorous training in scientific principles and research.
//                 </Typography>
//               </CardBody>
//             </Card>

//             <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
//               <div className="bg-blue-500 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-white font-bold flex items-center">
//                   <FaGraduationCap className="mr-2" /> Business
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-900 mb-4 font-semibold">
//                   Business administration, finance, marketing, and entrepreneurship programs prepare students for leadership roles in the corporate world.
//                 </Typography>
//               </CardBody>
//             </Card>

//             <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
//               <div className="bg-blue-500 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-white font-bold flex items-center">
//                   <FaGraduationCap className="mr-2" /> Engineering and Technology
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-900 mb-4 font-semibold">
//                   Cutting-edge programs in engineering, computer science, and information technology equip students with the skills needed for today’s high-demand tech careers.
//                 </Typography>
//               </CardBody>
//             </Card>

//             <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
//               <div className="bg-blue-500 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-white font-bold flex items-center">
//                   <FaGraduationCap className="mr-2" /> Social Sciences
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-900 mb-4 font-semibold">
//                   Fields like psychology, sociology, and political science explore human behavior and societal dynamics, offering insights into complex social issues.
//                 </Typography>
//               </CardBody>
//             </Card>

//             <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
//               <div className="bg-blue-500 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-white font-bold flex items-center">
//                   <FaGraduationCap className="mr-2" /> AI and Machine Learning
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-900 mb-4 font-semibold">
//                   Programs in AI and machine learning focus on advanced algorithms, data analysis, and real-world applications, preparing students for careers in this cutting-edge field.
//                 </Typography>
//               </CardBody>
//             </Card>

//             <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
//               <div className="bg-blue-500 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-white font-bold flex items-center">
//                   <FaGraduationCap className="mr-2" /> Cloud Computing
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-900 mb-4 font-semibold">
//                   Cloud computing programs teach students about cloud services, data management, and scalable infrastructure, essential for modern IT solutions.
//                 </Typography>
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-50 text-gray-900 px-6 py-16">
//         <div className="container mx-auto">
//           <Typography variant="h2" className="text-center mb-12 text-3xl font-bold">
//             Academic Support and Resources
//           </Typography>
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
//               <div className="bg-blue-500 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-white font-bold flex items-center">
//                   <FaChalkboardTeacher className="mr-2" /> Tutors
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-900 mb-4 font-semibold">
//                   <strong>Subject-Specific Tutoring:</strong> Tutors are available for individual subjects, providing personalized assistance to help students grasp complex concepts and improve their grades.
//                 </Typography>
//                 <Typography className="text-gray-900 font-semibold">
//                   <strong>Writing Centers:</strong> Many colleges have writing centers where students can receive guidance on writing assignments, essays, and research papers.
//                 </Typography>
//               </CardBody>
//             </Card>

//             <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
//               <div className="bg-blue-500 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-white font-bold flex items-center">
//                   <FaBook className="mr-2" /> Advisors
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-900 mb-4 font-semibold">
//                   <strong>Academic Advisors:</strong> Advisors help students navigate their academic path, offering guidance on course selection, degree requirements, and career planning.
//                 </Typography>
//                 <Typography className="text-gray-900 font-semibold">
//                   <strong>Career Advisors:</strong> Career services provide resources and support for internships, job searches, and career development, ensuring students are well-prepared for life after college.
//                 </Typography>
//               </CardBody>
//             </Card>

//             <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
//               <div className="bg-blue-500 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-white font-bold flex items-center">
//                   <FaChalkboardTeacher className="mr-2" /> Additional Resources
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-900 mb-4 font-semibold">
//                   <strong>Library Access:</strong> Students have access to extensive library resources, including digital libraries and research databases.
//                 </Typography>
//                 <Typography className="text-gray-900 font-semibold">
//                   <strong>Online Learning Platforms:</strong> Many institutions offer online courses and resources to supplement classroom learning.
//                 </Typography>
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-100 text-gray-900 px-6 py-16">
//         <div className="container mx-auto">
//           <Typography variant="h2" className="text-center mb-12 text-3xl font-bold">
//             Opportunities After College
//           </Typography>
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
//               <div className="bg-blue-500 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-white font-bold flex items-center">
//                   <FaBriefcase className="mr-2" /> Employment Prospects
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-900 mb-4 font-semibold">
//                   <strong>High Demand for Graduates:</strong> U.S. degrees are highly respected worldwide, and graduates often find themselves in high demand by employers seeking skilled and educated professionals.
//                 </Typography>
//                 <Typography className="text-gray-900 mb-4 font-semibold">
//                   <strong>Internship and Job Placement:</strong> Many colleges have strong connections with industry leaders and offer internship and job placement programs that give students a head start in their careers.
//                 </Typography>
//               </CardBody>
//             </Card>

//             <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
//               <div className="bg-blue-500 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-white font-bold flex items-center">
//                   <FaGraduationCap className="mr-2" /> Graduate Studies
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-900 mb-4 font-semibold">
//                   <strong>Advanced Education:</strong> Graduates who wish to continue their education have access to a wide range of graduate and professional programs, further enhancing their knowledge and skills.
//                 </Typography>
//               </CardBody>
//             </Card>

//             <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
//               <div className="bg-blue-500 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-white font-bold flex items-center">
//                   <FaGlobe className="mr-2" /> Networking Opportunities
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-900 mb-4 font-semibold">
//                   <strong>Alumni Networks:</strong> U.S. colleges have extensive alumni networks that offer valuable connections and opportunities for mentorship, collaboration, and career advancement.
//                 </Typography>
//                 <Typography className="text-gray-900 font-semibold">
//                   <strong>Professional Organizations:</strong> Joining professional organizations related to one’s field of study provides access to industry events, conferences, and job opportunities.
//                 </Typography>
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-100 text-gray-900 px-6 py-16">
//         <div className="container mx-auto text-center">
//           <Card className="bg-white text-gray-900 rounded-lg p-8 shadow-lg">
//             <CardBody>
//               <Typography variant="h2" className="text-gray-900 mb-8 text-3xl font-bold">
//                 A Path to Success
//               </Typography>
//               <Typography className="mb-4 font-semibold">
//                 At BSathletics, we believe that a strong academic foundation is crucial for lifelong success. We are dedicated to guiding our student-athletes toward institutions that offer not only outstanding sports programs but also exceptional academic opportunities.
//               </Typography>
//               <Typography className="font-semibold">
//                 Our goal is to ensure that every athlete we work with can achieve their academic and career aspirations, equipped with the skills and knowledge needed to thrive in an ever-changing world.
//               </Typography>
//             </CardBody>
//           </Card>
//         </div>
//       </section>

//       <div className="bg-white">
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default WhyUsa;

import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaBriefcase, FaGlobe } from 'react-icons/fa';

export function WhyUsa() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 bg-gradient-to-r from-[#ffffff] to-[#ffffff]">
        <div className="absolute top-0 h-full w-full bg-[url('/img/02-Entry-Hall.jpg')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 container mx-auto text-center text-black">
          <Typography variant="h1" className="mb-8 font-bold text-4xl md:text-5xl lg:text-6xl">
            Excellence Académique dans les Universités Américaines
          </Typography>
        </div>
      </div>

      <section className="bg-gray-100 text-gray-900 px-6 py-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto w-full px-4 text-center md:w-5/12">
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Une Éducation de Classe Mondiale
                Les États-Unis sont renommés pour leur système éducatif de classe mondiale, offrant une large gamme de programmes académiques et d'opportunités qui permettent aux étudiants de réaliser leurs objectifs professionnels. Chez BSathletics, nous comprenons l'importance du succès académique et nous nous engageons à aider les étudiants-athlètes à exceller tant en classe qu'en dehors.
              </Typography>
              <br /><br />
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Options Diverses de Diplômes
              </Typography>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
              <div className="bg-blue-500 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-white font-bold flex items-center">
                  <FaGraduationCap className="mr-2" /> Arts et Humanités
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-900 mb-4 font-semibold">
                  Les programmes en littérature, histoire, philosophie, et plus encore offrent une compréhension approfondie de la culture et de la société, favorisant la pensée critique et les compétences en communication.
                </Typography>
              </CardBody>
            </Card>

            <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
              <div className="bg-blue-500 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-white font-bold flex items-center">
                  <FaGraduationCap className="mr-2" /> Sciences
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-900 mb-4 font-semibold">
                  Les diplômes en biologie, chimie, physique et sciences environnementales offrent une formation rigoureuse en principes scientifiques et en recherche.
                </Typography>
              </CardBody>
            </Card>

            <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
              <div className="bg-blue-500 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-white font-bold flex items-center">
                  <FaGraduationCap className="mr-2" /> Commerce
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-900 mb-4 font-semibold">
                  Les programmes en administration des affaires, finance, marketing et entrepreneuriat préparent les étudiants à des rôles de leadership dans le monde des affaires.
                </Typography>
              </CardBody>
            </Card>

            <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
              <div className="bg-blue-500 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-white font-bold flex items-center">
                  <FaGraduationCap className="mr-2" /> Ingénierie et Technologie
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-900 mb-4 font-semibold">
                  Les programmes de pointe en ingénierie, informatique et technologie de l'information équipent les étudiants des compétences nécessaires pour les carrières technologiques en forte demande d'aujourd'hui.
                </Typography>
              </CardBody>
            </Card>

            <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
              <div className="bg-blue-500 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-white font-bold flex items-center">
                  <FaGraduationCap className="mr-2" /> Sciences Sociales
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-900 mb-4 font-semibold">
                  Des domaines comme la psychologie, la sociologie et les sciences politiques explorent le comportement humain et les dynamiques sociales, offrant des perspectives sur des questions sociales complexes.
                </Typography>
              </CardBody>
            </Card>

            <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
              <div className="bg-blue-500 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-white font-bold flex items-center">
                  <FaGraduationCap className="mr-2" /> IA et Apprentissage Automatique
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-900 mb-4 font-semibold">
                  Les programmes en IA et apprentissage automatique se concentrent sur les algorithmes avancés, l'analyse des données et les applications réelles, préparant les étudiants à des carrières dans ce domaine de pointe.
                </Typography>
              </CardBody>
            </Card>

            <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
              <div className="bg-blue-500 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-white font-bold flex items-center">
                  <FaGraduationCap className="mr-2" /> Informatique en Nuage
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-900 mb-4 font-semibold">
                  Les programmes d'informatique en nuage enseignent aux étudiants les services en nuage, la gestion des données et les infrastructures évolutives, essentiels pour les solutions informatiques modernes.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 text-gray-900 px-6 py-16">
        <div className="container mx-auto">
          <Typography variant="h2" className="text-center mb-12 text-3xl font-bold">
            Soutien Académique et Ressources
          </Typography>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
              <div className="bg-blue-500 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-white font-bold flex items-center">
                  <FaChalkboardTeacher className="mr-2" /> Tuteurs
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-900 mb-4 font-semibold">
                  <strong>Tutorat Spécifique par Matière :</strong> Des tuteurs sont disponibles pour des matières individuelles, fournissant une assistance personnalisée pour aider les étudiants à comprendre des concepts complexes et améliorer leurs notes.
                </Typography>
                <Typography className="text-gray-900 font-semibold">
                  <strong>Centres d'Écriture :</strong> De nombreuses universités ont des centres d'écriture où les étudiants peuvent recevoir des conseils sur les devoirs, les essais et les travaux de recherche.
                </Typography>
              </CardBody>
            </Card>

            <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
              <div className="bg-blue-500 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-white font-bold flex items-center">
                  <FaBook className="mr-2" /> Conseillers
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-900 mb-4 font-semibold">
                  <strong>Conseillers Académiques :</strong> Les conseillers aident les étudiants à naviguer dans leur parcours académique, offrant des conseils sur le choix des cours, les exigences des diplômes et la planification de carrière.
                </Typography>
                <Typography className="text-gray-900 font-semibold">
                  <strong>Conseillers en Carrière :</strong> Les services de carrière fournissent des ressources et un soutien pour les stages, les recherches d'emploi et le développement professionnel, assurant que les étudiants sont bien préparés pour la vie après l'université.
                </Typography>
              </CardBody>
            </Card>

            <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
              <div className="bg-blue-500 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-white font-bold flex items-center">
                  <FaBriefcase className="mr-2" /> Préparation à la Carrière
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-900 mb-4 font-semibold">
                  <strong>Stages et Expériences Professionnelles :</strong> Les étudiants peuvent accéder à des opportunités de stages et de coopératives, acquérant une expérience pratique précieuse dans leur domaine.
                </Typography>
                <Typography className="text-gray-900 font-semibold">
                  <strong>Ateliers et Séminaires :</strong> Des ateliers sur la rédaction de CV, les entretiens et le réseautage aident les étudiants à développer des compétences essentielles pour le marché du travail.
                </Typography>
              </CardBody>
            </Card>

            <Card className="bg-white text-gray-900 rounded-lg shadow-lg">
              <div className="bg-blue-500 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-white font-bold flex items-center">
                  <FaGlobe className="mr-2" /> Clubs et Organisations
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-900 mb-4 font-semibold">
                  <strong>Organisations Académiques :</strong> Les clubs et sociétés académiques offrent des opportunités pour les étudiants de se connecter avec leurs pairs, de participer à des projets et d'élargir leurs connaissances.
                </Typography>
                <Typography className="text-gray-900 font-semibold">
                  <strong>Clubs de Loisirs :</strong> Les clubs axés sur les intérêts personnels et les loisirs permettent aux étudiants de poursuivre leurs passions et de se détendre en dehors des études.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default WhyUsa;




