// import React from "react";
// import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
// import { PageTitle, Footer } from "@/widgets/layout";

// export function CollegeLife() {
//   return (
//     <>
//       <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
//         <div className="absolute top-0 h-full w-full bg-[url('/img/fac.jpg')] bg-cover bg-center opacity-70" />
//         <div className="absolute top-0 h-full w-full bg-black-900/60 bg-cover bg-center" />
//         <div className="max-w-8xl container relative mx-auto">
//           <div className="flex flex-wrap items-center">
//             <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
//               <Typography variant="h1" color="black" className="mb-8 font-blue-gray">
//                 The Thriving College Student Life
//               </Typography>
//               <br /> <br />
//               <Typography variant="h2" color="black" className="mb-8 font-blue-gray">
//                 Embrace the Full College Experience
//               </Typography>
//             </div>
//           </div>
//         </div>
//       </div>
//       <br/><br/><br/><br/><br/>
//       <section className="-mt-32 bg-white px-4 pb-20 pt-4">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap items-center">
//             <div className="mx-auto w-full px-4 text-center md:w-5/12">
//               <Typography className="mb-8 font-normal text-gray">
//                 Studying in the United States offers a unique and exciting opportunity to experience college life to its fullest. Beyond academics and athletics, American colleges are renowned for their vibrant student life, where you can make lifelong memories and friendships.
//               </Typography>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
//             <Card className="shadow-lg bg-white text-black-400 border shadow-gray-500/10 rounded-lg">
//               <CardHeader floated={false} className="relative w-120 h-60">
//                 <img alt="Card Image" src="/img/Homecoming_Parade.jpg" className="h-full w-full" />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" className="mb-3 font-bold">
//                   Game Day Excitement
//                 </Typography>
//                 <Typography className="font-normal">
//                   One of the highlights of college life in the U.S. is the exhilarating atmosphere of game days. Whether it's a Saturday football game or a thrilling basketball matchup, the excitement is palpable.
//                 </Typography>
//               </CardBody>
//             </Card>
//             <Card className="shadow-lg bg-white text-black-400 border shadow-gray-500/10 rounded-lg">
//               <CardHeader floated={false} className="relative w-120 h-60">
//                 <img alt="Card Image" src="/img/football.jpg" className="h-full w-full" />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" className="mb-3 font-bold">
//                   Football Game Day
//                 </Typography>
//                 <Typography className="font-normal">
//                   The pre-game festivities often include tailgating, where fans gather to enjoy food, music, and camaraderie. The sense of community and pride brings everyone together, creating a unique bond.
//                 </Typography>
//               </CardBody>
//             </Card>
//             <Card className="shadow-lg bg-white text-black-400 border shadow-gray-500/10 rounded-lg">
//               <CardHeader floated={false} className="relative w-120 h-60">
//                 <img alt="Card Image" src="/img/basketball.jpg" className="h-full w-full" />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" className="mb-3 font-bold">
//                   Basketball Games
//                 </Typography>
//                 <Typography className="font-normal">
//                   The fast-paced action and close quarters of basketball arenas create an electric atmosphere that keeps fans on the edge of their seats.
//                 </Typography>
//               </CardBody>
//             </Card>
//             <Card className="shadow-lg bg-white text-black-400 border shadow-gray-500/10 rounded-lg">
//               <CardHeader floated={false} className="relative w-120 h-60">
//                 <img alt="Card Image" src="/img/teambonding.jpg" className="h-full w-full" />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" className="mb-3 font-bold">
//                   Team Bonding
//                 </Typography>
//                 <Typography className="font-normal">
//                   Athletes in U.S. colleges have numerous opportunities for team bonding, fostering strong relationships and camaraderie that extend beyond the field.
//                 </Typography>
//               </CardBody>
//             </Card>
//             <Card className="shadow-lg bg-white text-black-400 border shadow-gray-500/10 rounded-lg">
//               <CardHeader floated={false} className="relative w-120 h-60">
//                 <img alt="Card Image" src="/img/studentorg.jpg" className="h-full w-full" />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" className="text-black">
//                   Student Organizations
//                 </Typography>
//                 <Typography className="font-normal">
//                   Whether you’re interested in academic clubs, cultural societies, or hobby groups, there’s an organization for you to join and meet like-minded peers.
//                 </Typography>
//               </CardBody>
//             </Card>
//             <Card className="shadow-lg bg-white text-black-400 border shadow-gray-500/10 rounded-lg">
//               <CardHeader floated={false} className="relative w-120 h-60">
//                 <img alt="Card Image" src="/img/facilities.jpg" className="h-full w-full" />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" className="mb-3 font-bold">
//                   Recreational Facilities
//                 </Typography>
//                 <Typography className="font-normal">
//                   State-of-the-art fitness centers are available for all students, offering everything from gym equipment to group fitness classes.
//                 </Typography>
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//       </section>
//       <br/><br/><br/><br />
//       <section className="-mt-32 bg-white px-4 pb-20 pt-4 relative py-24">
//         <div className="container mx-auto max-w-8xl text-center">
//           <Typography variant="h3" className="mb-3 font-bold" color="blue">
//             A Supportive Community
//           </Typography>
//           <Typography className="mb-8 font-normal text-black-700">
//             Beyond activities and facilities, U.S. colleges offer a supportive community that encourages personal growth and development.
//           </Typography>
//           <Typography className="font-normal text-black-700">
//             Access tutoring, advising, and academic resources to help you succeed in your studies. Benefit from career counseling, internships, and networking opportunities to prepare for your future. Counseling services and wellness programs are available to support your mental and emotional well-being.
//           </Typography>
//         </div>
//       </section>
//       <div className="bg-white">
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default CollegeLife;
import React from "react";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";

export function CollegeLife() {
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
                La Vie Étudiante Épanouissante
              </Typography>
              <Typography variant="h4" color="black" className="mb-8 font-blue-gray">
                Vivez l'Expérience Complète du Collège
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto w-full px-4 text-center md:w-5/12">
              <Typography className="mb-8 font-normal text-gray">
                Étudier aux États-Unis offre une opportunité unique et excitante de vivre pleinement la vie universitaire. Au-delà des aspects académiques et sportifs, les universités américaines sont réputées pour leur vie étudiante dynamique, où vous pouvez créer des souvenirs et des amitiés qui dureront toute une vie.
              </Typography>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-lg bg-white text-black-400 border shadow-gray-500/10 rounded-lg">
              <CardHeader floated={false} className="relative w-120 h-60">
                <img alt="Image de la Carte" src="/img/Homecoming_Parade.jpg" className="h-full w-full" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" className="mb-3 font-bold">
                  Excitation des Journées de Match
                </Typography>
                <Typography className="font-normal">
                  L'un des points forts de la vie universitaire aux États-Unis est l'atmosphère excitante des journées de match. Que ce soit un match de football du samedi ou une confrontation de basketball palpitante, l'excitation est palpable.
                </Typography>
              </CardBody>
            </Card>
            <Card className="shadow-lg bg-white text-black-400 border shadow-gray-500/10 rounded-lg">
              <CardHeader floated={false} className="relative w-120 h-60">
                <img alt="Image de la Carte" src="/img/football.jpg" className="h-full w-full" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" className="mb-3 font-bold">
                  Journée de Match de Football
                </Typography>
                <Typography className="font-normal">
                  Les festivités pré-match incluent souvent des tailgates, où les fans se rassemblent pour profiter de la nourriture, de la musique et de la camaraderie. Le sentiment de communauté et de fierté rassemble tout le monde, créant un lien unique.
                </Typography>
              </CardBody>
            </Card>
            <Card className="shadow-lg bg-white text-black-400 border shadow-gray-500/10 rounded-lg">
              <CardHeader floated={false} className="relative w-120 h-60">
                <img alt="Image de la Carte" src="/img/basketball.jpg" className="h-full w-full" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" className="mb-3 font-bold">
                  Matches de Basketball
                </Typography>
                <Typography className="font-normal">
                  L'action rapide et les espaces clos des arènes de basketball créent une atmosphère électrique qui garde les fans sur le bord de leur siège.
                </Typography>
              </CardBody>
            </Card>
            <Card className="shadow-lg bg-white text-black-400 border shadow-gray-500/10 rounded-lg">
              <CardHeader floated={false} className="relative w-120 h-60">
                <img alt="Image de la Carte" src="/img/teambonding.jpg" className="h-full w-full" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" className="mb-3 font-bold">
                  Cohésion d'Équipe
                </Typography>
                <Typography className="font-normal">
                  Les athlètes dans les universités américaines ont de nombreuses occasions de renforcer les liens au sein de l'équipe, favorisant des relations solides et une camaraderie qui s'étend au-delà du terrain.
                </Typography>
              </CardBody>
            </Card>
            <Card className="shadow-lg bg-white text-black-400 border shadow-gray-500/10 rounded-lg">
              <CardHeader floated={false} className="relative w-120 h-60">
                <img alt="Image de la Carte" src="/img/studentorg.jpg" className="h-full w-full" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" className="text-black">
                  Organisations Étudiantes
                </Typography>
                <Typography className="font-normal">
                  Que vous soyez intéressé par des clubs académiques, des sociétés culturelles ou des groupes de loisirs, il y a une organisation pour vous permettre de rejoindre et de rencontrer des pairs partageant les mêmes idées.
                </Typography>
              </CardBody>
            </Card>
            <Card className="shadow-lg bg-white text-black-400 border shadow-gray-500/10 rounded-lg">
              <CardHeader floated={false} className="relative w-120 h-60">
                <img alt="Image de la Carte" src="/img/facilities.jpg" className="h-full w-full" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" className="mb-3 font-bold">
                  Installations Récréatives
                </Typography>
                <Typography className="font-normal">
                  Des centres de remise en forme à la pointe de la technologie sont disponibles pour tous les étudiants, offrant tout, des équipements de gym aux cours de fitness en groupe.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      <br/><br/><br/><br />
      <section className="-mt-32 bg-white px-4 pb-20 pt-4 relative py-24">
        <div className="container mx-auto max-w-8xl text-center">
          <Typography variant="h3" className="mb-3 font-bold" color="blue">
            Une Communauté Solidaire
          </Typography>
          <Typography className="mb-8 font-normal text-black-700">
            Au-delà des activités et des installations, les universités américaines offrent une communauté solidaire qui encourage la croissance personnelle et le développement.
          </Typography>
          <Typography className="font-normal text-black-700">
            Accédez à du tutorat, des conseils et des ressources académiques pour vous aider à réussir dans vos études. Bénéficiez de conseils pour votre carrière, de stages et d'opportunités de réseautage pour préparer votre avenir. Des services de conseil et des programmes de bien-être sont disponibles pour soutenir votre bien-être mental et émotionnel.
          </Typography>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default CollegeLife;
