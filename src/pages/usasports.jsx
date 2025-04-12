// import React from "react";
// import { Typography, Card, CardBody } from "@material-tailwind/react";
// import { PageTitle, Footer } from "@/widgets/layout";
// import { FaBasketballBall, FaFootballBall, FaTrophy, FaStar, FaMedal } from 'react-icons/fa';

// export function UsaSports() {
//   return (
//     <>
//       <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 bg-gradient-to-r from-black-200 to-black-100">
//         <div className="absolute top-0 h-full w-full bg-[url('/img/facilities-bg.jpg')] bg-cover bg-center opacity-80" />
//         <div className="relative z-10 container mx-auto text-center text-white-800">
//         <br /><br /><br /> <br /> <br />
//           <Typography variant="h1" className="mb-8 font-bold text-4xl md:text-5xl lg:text-6xl text-white-900">
//             Athletics in U.S. Colleges
//           </Typography>
//         </div>
//       </div>

//       <section className="bg-gray-100 text-gray-800 px-6 py-16">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap items-center">
//             <div className="mx-auto w-full px-4 text-center md:w-5/12">
//               <Typography className="mb-8 font-normal text-blue-gray-500">
//               Compete at the Highest Level
//               U.S. colleges are home to some of the most competitive and prestigious athletic programs in the world. With a rich tradition of excellence, college athletics in the United States offer student-athletes the opportunity to compete at the highest level, develop their skills, and showcase their talents on a national stage.              </Typography>
//               <br /><br />
//               <Typography className="mb-8 font-normal text-blue-gray-500">
//               Understanding College Athletic Divisions
//               </Typography>
//             </div>
//           </div>
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {/* NCAA Division I */}
//             <Card className="bg-gray-200 text-gray-800 rounded-lg shadow-lg">
//               <div className="bg-gray-300 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-gray-900 font-bold flex items-center">
//                   <FaStar className="mr-2" /> NCAA Division I
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>Overview:</strong> Division I schools are typically larger institutions with significant athletic budgets and the most competitive athletic programs.
//                 </Typography>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>Scholarships:</strong> Student-athletes often receive full or partial athletic scholarships, making it an attractive option for top-tier athletes.
//                 </Typography>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>Competition:</strong> Division I athletes compete in high-profile conferences and national tournaments, often broadcasted on major sports networks.
//                 </Typography>
//                 <Typography className="text-gray-800 font-semibold">
//                   <strong>Sports Offered:</strong> Includes a wide range of sports, from basketball and football to swimming and track and field.
//                 </Typography>
//               </CardBody>
//             </Card>

//             {/* NCAA Division II */}
//             <Card className="bg-gray-200 text-gray-800 rounded-lg shadow-lg">
//               <div className="bg-gray-300 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-gray-900 font-bold flex items-center">
//                   <FaBasketballBall className="mr-2" /> NCAA Division II
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>Overview:</strong> Division II schools offer a balance between athletics, academics, and extracurricular activities.
//                 </Typography>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>Scholarships:</strong> While scholarships are available, they are often a combination of athletic and academic awards.
//                 </Typography>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>Competition:</strong> Division II athletes compete in regional conferences and national championships, offering a competitive environment with a focus on personal development.
//                 </Typography>
//                 <Typography className="text-gray-800 font-semibold">
//                   <strong>Sports Offered:</strong> Includes popular sports like soccer, baseball, volleyball, and more.
//                 </Typography>
//               </CardBody>
//             </Card>

//             {/* NCAA Division III */}
//             <Card className="bg-gray-200 text-gray-800 rounded-lg shadow-lg">
//               <div className="bg-gray-300 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-gray-900 font-bold flex items-center">
//                   <FaMedal className="mr-2" /> NCAA Division III
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>Overview:</strong> Division III focuses on the overall college experience, emphasizing academics and extracurricular involvement.
//                 </Typography>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>Scholarships:</strong> Athletic scholarships are not offered, but academic and need-based financial aid is available.
//                 </Typography>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>Competition:</strong> Division III athletes compete in regional and national championships, fostering a competitive yet supportive environment.
//                 </Typography>
//                 <Typography className="text-gray-800 font-semibold">
//                   <strong>Sports Offered:</strong> Offers a wide range of sports, providing opportunities for students to continue competing while focusing on their studies.
//                 </Typography>
//               </CardBody>
//             </Card>

//             {/* NAIA */}
//             <Card className="bg-gray-200 text-gray-800 rounded-lg shadow-lg">
//               <div className="bg-gray-300 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-gray-900 font-bold flex items-center">
//                   <FaFootballBall className="mr-2" /> NAIA
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>Overview:</strong> The NAIA is a separate organization offering smaller colleges and universities the chance to compete in college athletics.
//                 </Typography>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>Scholarships:</strong> Offers a limited number of athletic scholarships, with a strong emphasis on character and leadership development.
//                 </Typography>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>Competition:</strong> NAIA athletes compete in national championships and have access to a supportive community.
//                 </Typography>
//                 <Typography className="text-gray-800 font-semibold">
//                   <strong>Sports Offered:</strong> Includes sports such as basketball, soccer, tennis, and more.
//                 </Typography>
//               </CardBody>
//             </Card>

//             {/* NJCAA */}
//             <Card className="bg-gray-200 text-gray-800 rounded-lg shadow-lg">
//               <div className="bg-gray-300 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-gray-900 font-bold flex items-center">
//                   <FaTrophy className="mr-2" /> NJCAA
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>Overview:</strong> The NJCAA is the governing body for junior college athletics, providing a pathway for athletes to transfer to four-year institutions.
//                 </Typography>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>Scholarships:</strong> Offers athletic scholarships, making it an affordable option for student-athletes seeking to improve their skills and academic performance before transferring.
//                 </Typography>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>Competition:</strong> NJCAA athletes compete in regional and national tournaments, providing exposure and development opportunities.
//                 </Typography>
//                 <Typography className="text-gray-800 font-semibold">
//                   <strong>Sports Offered:</strong> Offers a diverse range of sports, including baseball, softball, wrestling, and more.
//                 </Typography>
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-200 text-gray-800 px-6 py-16">
//         <div className="container mx-auto">
//           <Typography variant="h2" className="text-center mb-12 text-3xl font-bold">
//             Tournaments and Championships
//           </Typography>
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {/* NCAA Championships */}
//             <Card className="bg-gray-100 text-gray-800 rounded-lg shadow-lg">
//               <div className="bg-gray-200 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-gray-900 font-bold flex items-center">
//                   <FaTrophy className="mr-2" /> NCAA Championships
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>March Madness:</strong> The NCAA Men's and Women's Basketball Tournaments are among the most-watched sporting events in the U.S., featuring 68 teams in a single-elimination format.
//                 </Typography>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>College Football Playoff:</strong> The top Division I football teams compete in the College Football Playoff to determine the national champion, culminating in a thrilling championship game.
//                 </Typography>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>National Championships:</strong> Other sports, such as soccer, volleyball, and track and field, also have national championships that attract significant attention and competition.
//                 </Typography>
//               </CardBody>
//             </Card>

//             {/* NAIA and NJCAA Championships */}
//             <Card className="bg-gray-100 text-gray-800 rounded-lg shadow-lg">
//               <div className="bg-gray-200 p-4 rounded-t-lg">
//                 <Typography variant="h3" className="text-gray-900 font-bold flex items-center">
//                   <FaMedal className="mr-2" /> NAIA and NJCAA Championships
//                 </Typography>
//               </div>
//               <CardBody>
//                 <Typography className="text-gray-800 mb-4 font-semibold">
//                   <strong>National Tournaments:</strong> Both the NAIA and NJCAA host national tournaments across various sports, providing student-athletes with opportunities to compete for national titles and gain valuable exposure.
//                 </Typography>
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-100 text-gray-800 px-6 py-16">
//         <div className="container mx-auto">
//           <Typography variant="h2" className="text-center mb-12 text-3xl font-bold">
//             A Pathway to Professional Sports
//           </Typography>
//           <Typography className="text-lg mb-6">
//             For many student-athletes, college sports serve as a stepping stone to professional careers. The high level of competition, exposure, and development opportunities in U.S. colleges make them an ideal training ground for future professional athletes.
//           </Typography>
//           <Typography className="text-lg mb-6">
//             <strong>Draft Opportunities:</strong> Many professional leagues, such as the NBA, NFL, and MLB, recruit heavily from college programs, with annual drafts offering a direct pathway to professional sports.
//           </Typography>
//           <Typography className="text-lg mb-6">
//             <strong>Training and Development:</strong> College athletes benefit from world-class coaching, facilities, and competition, preparing them for the demands of professional sports.
//           </Typography>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default UsaSports;

import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import { FaBasketballBall, FaFootballBall, FaTrophy, FaStar, FaMedal } from 'react-icons/fa';

export function UsaSports() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
          <div className="absolute top-0 h-full w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500" />
              <div className="absolute top-0 h-full w-full">
                <div className="h-full w-full opacity-10">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: `${Math.random() * 300 + 50}px`,
                        height: `${Math.random() * 300 + 50}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: 'white',
                        opacity: Math.random() * 0.5,
                        transform: `scale(${Math.random() * 1 + 0.5})`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="max-w-8xl container relative mx-auto">
                <div className="flex flex-wrap items-center">
                  <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                    <Typography variant="h1" color="white" className="mb-8 font-blue-gray">
                      L'athlétisme dans les collèges américains
                    </Typography>
                  </div>
              </div>
            </div>
        </div>

      <section className="bg-gray-100 text-gray-800 px-6 py-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto w-full px-4 text-center md:w-5/12">
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Concurrence au plus haut niveau
                Les collèges américains abritent certains des programmes d'athlétisme les plus compétitifs et prestigieux au monde. Avec une riche tradition d'excellence, l'athlétisme universitaire aux États-Unis offre aux étudiants-athlètes l'opportunité de concourir au plus haut niveau, de développer leurs compétences et de montrer leurs talents sur une scène nationale.
              </Typography>
              <br /><br />
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Comprendre les divisions athlétiques universitaires
              </Typography>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* NCAA Division I */}
            <Card className="bg-gray-200 text-gray-800 rounded-lg shadow-lg">
              <div className="bg-gray-300 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-gray-900 font-bold flex items-center">
                  <FaStar className="mr-2" /> NCAA Division I
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-800 mb-4 font-semibold">
                  <strong>Aperçu :</strong> Les écoles de Division I sont généralement des institutions plus grandes avec des budgets sportifs significatifs et les programmes athlétiques les plus compétitifs.
                </Typography>
                <Typography className="text-gray-800 mb-4 font-semibold">
                  <strong>Bourses :</strong> Les étudiants-athlètes reçoivent souvent des bourses athlétiques complètes ou partielles, ce qui en fait une option attrayante pour les athlètes de haut niveau.
                </Typography>
                <Typography className="text-gray-800 mb-4 font-semibold">
                  <strong>Compétition :</strong> Les athlètes de Division I concourent dans des conférences de haut niveau et des tournois nationaux, souvent diffusés sur les principaux réseaux sportifs.
                </Typography>
                <Typography className="text-gray-800 font-semibold">
                  <strong>Sports proposés :</strong> Inclut une large gamme de sports, du basketball et du football à la natation et l'athlétisme.
                </Typography>
              </CardBody>
            </Card>

            {/* NCAA Division II */}
            <Card className="bg-gray-200 text-gray-800 rounded-lg shadow-lg">
              <div className="bg-gray-300 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-gray-900 font-bold flex items-center">
                  <FaBasketballBall className="mr-2" /> NCAA Division II
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-800 mb-4 font-semibold">
                  <strong>Aperçu :</strong> Les écoles de Division II offrent un équilibre entre les sports, les études et les activités extra-scolaires.
                </Typography>
                <Typography className="text-gray-800 mb-4 font-semibold">
                  <strong>Bourses :</strong> Bien que des bourses soient disponibles, elles sont souvent une combinaison de récompenses athlétiques et académiques.
                </Typography>
                <Typography className="text-gray-800 mb-4 font-semibold">
                  <strong>Compétition :</strong> Les athlètes de Division II concourent dans des conférences régionales et des championnats nationaux, offrant un environnement compétitif axé sur le développement personnel.
                </Typography>
                <Typography className="text-gray-800 font-semibold">
                  <strong>Sports proposés :</strong> Inclut des sports populaires comme le soccer, le baseball, le volley-ball et plus encore.
                </Typography>
              </CardBody>
            </Card>

            {/* NCAA Division III */}
            <Card className="bg-gray-200 text-gray-800 rounded-lg shadow-lg">
              <div className="bg-gray-300 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-gray-900 font-bold flex items-center">
                  <FaMedal className="mr-2" /> NCAA Division III
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-800 mb-4 font-semibold">
                  <strong>Aperçu :</strong> La Division III se concentre sur l'expérience globale à l'université, mettant l'accent sur les études et la participation extra-scolaire.
                </Typography>
                <Typography className="text-gray-800 mb-4 font-semibold">
                  <strong>Bourses :</strong> Les bourses athlétiques ne sont pas offertes, mais des aides financières académiques et basées sur les besoins sont disponibles.
                </Typography>
                <Typography className="text-gray-800 mb-4 font-semibold">
                  <strong>Compétition :</strong> Les athlètes de Division III concourent dans des championnats régionaux et nationaux, favorisant un environnement compétitif mais solidaire.
                </Typography>
                <Typography className="text-gray-800 font-semibold">
                  <strong>Sports proposés :</strong> Offre une large gamme de sports, offrant des opportunités aux étudiants de continuer à concourir tout en se concentrant sur leurs études.
                </Typography>
              </CardBody>
            </Card>

            {/* NAIA */}
            <Card className="bg-gray-200 text-gray-800 rounded-lg shadow-lg">
              <div className="bg-gray-300 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-gray-900 font-bold flex items-center">
                  <FaFootballBall className="mr-2" /> NAIA
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-800 mb-4 font-semibold">
                  <strong>Aperçu :</strong> Le NAIA est une organisation distincte offrant aux petits collèges et universités la chance de concourir dans des sports universitaires.
                </Typography>
                <Typography className="text-gray-800 mb-4 font-semibold">
                  <strong>Bourses :</strong> Offre un nombre limité de bourses athlétiques, avec un fort accent sur le développement du caractère et du leadership.
                </Typography>
                <Typography className="text-gray-800 mb-4 font-semibold">
                  <strong>Compétition :</strong> Les athlètes du NAIA concourent dans des championnats nationaux et ont accès à une communauté de soutien.
                </Typography>
                <Typography className="text-gray-800 font-semibold">
                  <strong>Sports proposés :</strong> Inclut des sports tels que le basketball, le soccer, le tennis et plus encore.
                </Typography>
              </CardBody>
            </Card>

            {/* NJCAA */}
            <Card className="bg-gray-200 text-gray-800 rounded-lg shadow-lg">
              <div className="bg-gray-300 p-4 rounded-t-lg">
                <Typography variant="h3" className="text-gray-900 font-bold flex items-center">
                  <FaTrophy className="mr-2" /> NJCAA
                </Typography>
              </div>
              <CardBody>
                <Typography className="text-gray-800 mb-4 font-semibold">
                  <strong>Aperçu :</strong> Le NJCAA est l'organe directeur de l'athlétisme des collèges juniors, fournissant un chemin pour les athlètes pour transférer vers des institutions de quatre ans.
                </Typography>
                <Typography className="text-gray-800 mb-4 font-semibold">
                  <strong>Bourses :</strong> Offre des bourses athlétiques, ce qui en fait une option abordable pour les étudiants-athlètes cherchant à améliorer leurs compétences et leurs performances académiques avant de transférer.
                </Typography>
                <Typography className="text-gray-800 mb-4 font-semibold">
                  <strong>Compétition :</strong> Les athlètes du NJCAA concourent dans des championnats régionaux et nationaux, avec un fort accent sur le développement des athlètes et des académiciens.
                </Typography>
                <Typography className="text-gray-800 font-semibold">
                  <strong>Sports proposés :</strong> Offre une gamme de sports, y compris le football, le baseball, le basketball, et plus encore.
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

export default UsaSports;

