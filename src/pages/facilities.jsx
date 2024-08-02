// import React from "react";
// import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
// import { PageTitle, Footer } from "@/widgets/layout";

// export function Facilities() {
//   return (
//     <>
//       <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
//         <div className="absolute top-0 h-full w-full bg-[url('/img/locker.jpg')] bg-cover bg-center opacity-80" />
//         <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
//         <div className="max-w-8xl container relative mx-auto">
//           <div className="flex flex-wrap items-center">
//             <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
//               <Typography variant="h1" color="white" className="mb-8 font-blue-gray">
//                 World-Class Facilities for Student-Athletes
//               </Typography>
//               <Typography variant="lead" color="white" className="opacity-100">
//                 Unparalleled Resources for Peak Performance
//               </Typography>
//             </div>
//           </div>
//         </div>
//       </div>
//       <br/><br/><br/><br/><br/><br/>
//       <section className="-mt-32 bg-white px-4 pb-20 pt-4">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap items-center">
//             <div className="mx-auto w-full px-4 text-center md:w-5/12">
//               <Typography className="mb-8 font-normal text-blue-gray-500">
//                 U.S. colleges offer some of the best athletic facilities in the world, providing student-athletes with everything they need to excel in their sport and academic pursuits.
//               </Typography>
//               <br/><br/>
//               <Typography className="mb-8 font-normal text-blue-gray-500">
//                 At BSathletics, we ensure that our athletes have access to top-tier facilities that enhance their performance and overall well-being.
//               </Typography>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
//             <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//             <CardHeader floated={false} className="relative w-120 h-60">
//             <img alt="Card Image" src="/img/ALABAMAFOOTBALL-63.jpg" className="h-full w-full" />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
//                   State-of-the-Art Weight Rooms
//                 </Typography>
//                 <Typography className="font-normal text-blue-gray-500">
//                   American colleges boast state-of-the-art weight rooms equipped with the latest technology and equipment.
//                 </Typography>
//               </CardBody>
//             </Card>
//             <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//             <CardHeader floated={false} className="relative w-120 h-60">
//             <img alt="Card Image" src="/img/Ohio-State-University-Schumaker-Student-Athlete-Development-Complex-2-1900-1600x1069.jpg" className="h-full w-full" />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
//                   Advanced Training Rooms
//                 </Typography>
//                 <Typography className="font-normal text-blue-gray-500">
//                   Training rooms at U.S. colleges are designed to support athletes in every aspect of their physical preparation and recovery.
//                 </Typography>
//               </CardBody>
//             </Card>
//             <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//             <CardHeader floated={false} className="relative w-120 h-60">
//             <img alt="Card Image" src="/img/University-of-Texas-at-Austin-1024x435.jpg" className="h-full w-full" />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
//                   Olympic-Quality Swimming Pools
//                 </Typography>
//                 <Typography className="font-normal text-blue-gray-500">
//                   The U.S. offers Olympic-quality swimming pools that provide an ideal environment for training and competition.
//                 </Typography>
//               </CardBody>
//             </Card>
//             <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//             <CardHeader floated={false} className="relative w-120 h-60">
//             <img alt="Card Image" src="/img/locker.jpg" className="h-full w-full" />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
//                   Renovated Locker Rooms
//                 </Typography>
//                 <Typography className="font-normal text-blue-gray-500">
//                   Many U.S. colleges offer renovated locker rooms that provide athletes with secure storage, relaxation areas, and modern amenities.
//                 </Typography>
//               </CardBody>
//             </Card>
//             <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//             <CardHeader floated={false} className="relative w-120 h-60">
//             <img alt="Card Image" src="/img/nutritionist.jpg" className="h-full w-full" />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
//                   Nutritionists
//                 </Typography>
//                 <Typography className="font-normal text-blue-gray-500">
//                   Proper nutrition is vital for athletic performance, and U.S. colleges often have dedicated nutritionists on staff.
//                 </Typography>
//               </CardBody>
//             </Card>
//             <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//             <CardHeader floated={false} className="relative w-120 h-60">
//             <img alt="Card Image" src="/img/resouces.jpg" className="h-full w-full" />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
//                   Spa and Hot Tub
//                 </Typography>
//                 <Typography className="font-normal text-blue-gray-500">
//                   U.S. colleges provide access to world class recovery facilities like hot tubs.
//                 </Typography>
//               </CardBody>
//             </Card>
//             <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//             <CardHeader floated={false} className="relative w-120 h-60">
//             <img alt="Card Image" src="/img/cryo.JPG" className="h-full w-full" />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
//                   Sports Medicine and Rehabilitation
//                 </Typography>
//                 <Typography className="font-normal text-blue-gray-500">
//                   U.S. colleges typically have well-equipped sports medicine facilities and experienced staff to provide comprehensive care.
//                 </Typography>
//               </CardBody>
//             </Card>
//             <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//             <CardHeader floated={false} className="relative w-120 h-60">
//             <img alt="Card Image" src="/img/USATSI_16831014.jpg.webp" className="h-full w-full" />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
//                   A Community of Excellence
//                 </Typography>
//                 <Typography className="font-normal text-blue-gray-500">
//                   U.S. colleges foster a community of excellence, where athletes are surrounded by like-minded individuals.
//                 </Typography>
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//       </section>
//       <br/><br/><br/><br />
//       <section className="-mt-32 bg-white px-4 pb-20 pt-4 relative py-24">
//         <div className="container mx-auto max-w-8xl text-center">
//           <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
//             Discover Your Potential
//           </Typography>
//           <Typography className="mb-8 font-normal text-blue-gray-500">
//             At BSathletics, we are committed to connecting our athletes with colleges that offer exceptional facilities and resources.
//           </Typography>
//           <Typography className="font-normal text-blue-gray-500">
//             Join us and discover the world of possibilities that awaits you in the U.S. collegiate sports arena. Experience firsthand the unparalleled support and resources available to help you achieve greatness both on and off the field.
//           </Typography>
//         </div>
//       </section>
//       <div className="bg-white">
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Facilities;

import React from "react";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function Facilities() {
  return (
    <>
      <div className="relative flex h-screen items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/locker.jpg')] bg-cover bg-center opacity-80" />
        <div className="absolute top-0 h-full w-full bg-black/60" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-8 font-blue-gray">
                Installations de Classe Mondiale pour les Étudiants-Athlètes
              </Typography>
              <Typography variant="lead" color="white">
                Ressources Inégalées pour une Performance Maximale
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto w-full px-4 text-center md:w-5/12">
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Les universités américaines offrent certaines des meilleures installations sportives au monde, fournissant aux étudiants-athlètes tout ce dont ils ont besoin pour exceller dans leur sport et leurs études.
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Chez BSathletics, nous veillons à ce que nos athlètes aient accès à des installations de premier ordre qui améliorent leur performance et leur bien-être général.
              </Typography>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                imgSrc: '/img/ALABAMAFOOTBALL-63.jpg',
                title: 'Salles de Musculation à la Pointe de la Technologie',
                description: 'Les universités américaines disposent de salles de musculation à la pointe de la technologie équipées des derniers appareils et équipements.',
              },
              {
                imgSrc: '/img/Ohio-State-University-Schumaker-Student-Athlete-Development-Complex-2-1900-1600x1069.jpg',
                title: 'Salles d’Entraînement Avancées',
                description: 'Les salles d’entraînement des universités américaines sont conçues pour soutenir les athlètes dans chaque aspect de leur préparation physique et de leur récupération.',
              },
              {
                imgSrc: '/img/University-of-Texas-at-Austin-1024x435.jpg',
                title: 'Piscines Olympiques de Qualité',
                description: 'Les États-Unis offrent des piscines olympiques de qualité qui fournissent un environnement idéal pour l’entraînement et la compétition.',
              },
              {
                imgSrc: '/img/locker.jpg',
                title: 'Vestiaires Rénovés',
                description: 'De nombreuses universités américaines offrent des vestiaires rénovés qui fournissent aux athlètes un espace de rangement sécurisé, des zones de détente et des équipements modernes.',
              },
              {
                imgSrc: '/img/nutritionist.jpg',
                title: 'Nutritionnistes',
                description: 'Une bonne nutrition est essentielle pour la performance athlétique, et les universités américaines ont souvent des nutritionnistes dédiés au personnel.',
              },
              {
                imgSrc: '/img/resouces.jpg',
                title: 'Spa et Bain à Remous',
                description: 'Les universités américaines offrent un accès à des installations de récupération de classe mondiale telles que des bains à remous.',
              },
              {
                imgSrc: '/img/cryo.JPG',
                title: 'Médecine du Sport et Réhabilitation',
                description: 'Les universités américaines disposent généralement d’installations de médecine du sport bien équipées et de personnel expérimenté pour fournir des soins complets.',
              },
              {
                imgSrc: '/img/USATSI_16831014.jpg.webp',
                title: 'Une Communauté d’Excellence',
                description: 'Les universités américaines favorisent une communauté d’excellence où les athlètes sont entourés de personnes partageant les mêmes objectifs.',
              },
            ].map((facility, index) => (
              <Card key={index} className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative w-120 h-60">
                  <img alt={`Image de la carte ${index + 1}`} src={facility.imgSrc} className="h-full w-full" />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
                    {facility.title}
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    {facility.description}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4 relative py-24">
        <div className="container mx-auto max-w-8xl text-center">
          <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
            Découvrez Votre Potentiel
          </Typography>
          <Typography className="mb-8 font-normal text-blue-gray-500">
            Chez BSathletics, nous nous engageons à connecter nos athlètes avec des universités offrant des installations et des ressources exceptionnelles.
          </Typography>
          <Typography className="font-normal text-blue-gray-500">
            Rejoignez-nous et découvrez le monde de possibilités qui vous attend dans l’arène sportive universitaire américaine. Découvrez de première main le soutien et les ressources inégalés disponibles pour vous aider à atteindre l'excellence, sur le terrain comme en dehors.
          </Typography>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Facilities;

