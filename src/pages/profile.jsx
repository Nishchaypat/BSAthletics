// import React, { useState } from "react";
// import { Typography, Card, CardHeader, CardBody } from "@material-tailwind/react";
// import { Footer } from "@/widgets/layout";
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const profiles = [
//   {
//     name: "Benjamin Chateigner",
//     image: "/img/bchat.jpg",
//     position: "Swimming",
//     location: "Auburn University",
//   },
//   {
//     name: "Parker Bell",
//     image: "/img/pbell.jpg",
//     position: "Swimming",
//     location: "University of Montevallo",
//   },
//   {
//     name: "Baptiste Oliveri",
//     image: "/img/bolie.jpg",
//     position: "Water Polo",
//     location: "Saint Francis University",
//   },
//   {
//     name: "Paolo Morliere",
//     image: "/img/pmor.jpg",
//     position: "Water Polo",
//     location: "Saint Francis University",
//   },
//   {
//     name: "Fanny Courbot",
//     image: "/img/fcou.jpg",
//     position: "Swimming",
//     location: "Lees-McRae College",
//   },
//   {
//     name: "Nicolas Ionnades",
//     image: "/img/nionn.jpg",
//     position: "Swimming",
//     location: "University of Montevallo",
//   },
//   {
//     name: "Leonard Olaru",
//     image: "/img/lola.jpg",
//     position: "Swimming",
//     location: "University of Montevallo",
//   },
//   {
//     name: "Amaury Jarry",
//     image: "/img/ajarr.jpg",
//     position: "Soccer",
//     location: "John Brown University",
//   },
//   {
//     name: "Armand Legoff",
//     image: "/img/aleg.jpg",
//     position: "Swimming",
//     location: "Saddleback College",
//   },
//   {
//     name: "Lillie Freulon",
//     image: "/img/lfre.jpg",
//     position: "Swimming",
//     location: "Missouri State University",
//   },
//   {
//     name: "Janek Barczyk",
//     image: "/img/jbar.jpg",
//     position: "Volleyball",
//     location: "Florida Southern College",
//   },
//   {
//     name: "Mateo Wallet",
//     image: "/img/mwall.jpg",
//     position: "Water Polo",
//     location: "Barton Community College",
//   },
//   {
//     name: "Matheo Loillier",
//     image: "/img/mloi.jpg",
//     position: "Water Polo",
//     location: "Undecided",
//   },
//   {
//     name: "Melina Giraudeau",
//     image: "/img/mgir.jpg",
//     position: "Swimming",
//     location: "Undecided",
//   },
//   {
//     name: "Cesar Robles",
//     image: "/img/crobs.jpg",
//     position: "Swimming",
//     location: "Aquina College",
//   },
//   {
//     name: "Isaac Panzer",
//     image: "/img/ipan.jpg",
//     position: "Swimming",
//     location: "Oklahoma Baptist University",
//   },
//   {
//     name: "Agnieska Paskevic",
//     image: "/img/apas.jpg",
//     position: "Volleyball",
//     location: "Mercer University",
//   },
// ];

// import { FaRunning, FaBasketballBall, FaGolfBall, FaDumbbell, FaSwimmer, FaVolleyballBall, FaWater, FaFutbol } from 'react-icons/fa';

// const sports = [
//   { name: "Track and Field", icon: <FaRunning className="text-4xl" /> },
//   { name: "Basketball", icon: <FaBasketballBall className="text-4xl" /> },
//   { name: "Soccer", icon: <FaFutbol className="text-4xl" /> },
//   { name: "Golf", icon: <FaGolfBall className="text-4xl" /> },
//   { name: "Gymnastics", icon: <FaDumbbell className="text-4xl" /> },
//   { name: "Swimming", icon: <FaSwimmer className="text-4xl" /> },
//   { name: "Volleyball", icon: <FaVolleyballBall className="text-4xl" /> },
//   { name: "Water Polo", icon: <FaWater className="text-4xl" /> }
// ];

// const reviews = [
//   { 
//     name: "Benjamin Chateigner", 
//     review: "Studying in the United States is a chance as I am receiving a top world class education, my teachers are always willing to support me. The athletic staff created the ideal conditions for me to perform. Bsathletics assisted me from the beginning to the end of my recruiting process and still to this day. They found me the perfect environment in order to reach my goals."
//   },
//   { 
//     name: "Fanny Courbot", 
//     review: "Moving to the US for studies and swimming was a real challenge as I did not speak the language, however my coaches, teammates, classmates and professors all tried to make me feel comfortable and helped me get where I wanted to in the pool and in class. Simon and the BSathletics team did a great job connecting me with US college coaches and took care of all the administrative steps which would not have been possible without their assistance."
//   },
//   { 
//     name: "Leonard Olaru", 
//     review: "Thank you to Bsathletics for finding me a second family in the United States. Their assistance and advices all along my recruiting process helped me finance my studies through an athletic scholarship which allowed me to focus on my sport and classes."
//   }
// ];

// export function Profile() {
//   const [visibleProfiles, setVisibleProfiles] = useState(6);
//   const [showMore, setShowMore] = useState(false);

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//     setVisibleProfiles(showMore ? 6 : profiles.length);
//   };

//   return (
//     <>
//       <section className="relative block h-[50vh]">
//         <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
//       </section>
//       <section className="relative bg-white py-16">
//         <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
//           <div className="container mx-auto">
//             <Typography variant="h2" color="black" className="mb-4 text-center">
//               Meet Our Exceptional Athletes
//             </Typography>
//             <Typography variant="paragraph" color="blue-gray" className="mb-12 text-center">
//               We are proud to introduce some of the outstanding athletes we have signed so far. Each of these individuals has achieved remarkable success, securing scholarships at prestigious universities. Their dedication, talent, and hard work have paved the way for their bright futures.
//             </Typography>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {profiles.slice(0, visibleProfiles).map((profile, index) => (
//                 <Card key={index} className="shadow-lg border shadow-gray-500/10 rounded-lg mx-auto bg-black">
//                   <CardHeader floated={false} className="flex flex-col items-center bg-black">
//                     <div className="w-40 h-40 mb-4">
//                       <img
//                         src={profile.image}
//                         alt="Profile picture"
//                         className="object-cover rounded-full w-full h-full object-position-center"
//                         style={{ objectPosition: 'top' }}
//                       />
//                     </div>
//                   </CardHeader>
//                   <CardBody className="text-center">
//                     <Typography variant="h5" color="white" className="mb-2">
//                       {profile.name}
//                     </Typography>
//                     <Typography variant="paragraph" color="white" className="font-normal">
//                       {profile.position}
//                     </Typography>
//                     <Typography variant="paragraph" color="white" className="mt-2 font-medium">
//                       {profile.location}
//                     </Typography>
//                     <Typography variant="paragraph" color="white" className="mt-1 font-light">
//                       {profile.bio}
//                     </Typography>
//                   </CardBody>
//                 </Card>
//               ))}
//             </div>
//             <div className="flex justify-center mt-8">
//               <button
//                 onClick={toggleShowMore}
//                 className="bg-black text-white px-4 py-2 rounded-lg"
//               >
//                 {showMore ? 'Show less' : 'See more'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="relative bg-white py-16">
//         <div className="container mx-auto text-center">
//           <Typography variant="h2" color="blue-gray" className="mb-8">
//             Sports We Excel In
//           </Typography>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//             {sports.map((sport, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 {sport.icon}
//                 <Typography variant="h5" color="blue-gray" className="mt-4">
//                   {sport.name}
//                 </Typography>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative bg-white py-16">
//         <div className="container mx-auto">
//           <Typography variant="h2" color="blue-gray" className="mb-8 text-center">
//             Athlete Reviews
//           </Typography>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {reviews.map((review, index) => (
//               <Card key={index} className="shadow-lg border shadow-gray-500/10 rounded-lg">
//                 <CardBody>
//                   <Typography variant="h5" color="blue-gray" className="mb-2">
//                     {review.name}
//                   </Typography>
//                   <Typography variant="paragraph" color="blue-gray" className="font-normal">
//                     {review.review}
//                   </Typography>
//                 </CardBody>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default Profile;


import React, { useState } from "react";
import { Typography, Card, CardHeader, CardBody } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const profiles = [
  {
    name: "Benjamin Chateigner",
    image: "/img/bchat.jpg",
    position: "Natation",
    location: "Auburn University",
  },
  {
    name: "Parker Bell",
    image: "/img/pbell.jpg",
    position: "Natation",
    location: "University of Montevallo",
  },
  {
    name: "Baptiste Oliveri",
    image: "/img/bolie.jpg",
    position: "Water Polo",
    location: "Saint Francis University",
  },
  {
    name: "Paolo Morliere",
    image: "/img/pmor.jpg",
    position: "Water Polo",
    location: "Saint Francis University",
  },
  {
    name: "Fanny Courbot",
    image: "/img/fcou.jpg",
    position: "Natation",
    location: "Lees-McRae College",
  },
  {
    name: "Nicolas Ionnades",
    image: "/img/nionn.jpg",
    position: "Natation",
    location: "University of Montevallo",
  },
  {
    name: "Leonard Olaru",
    image: "/img/lola.jpg",
    position: "Natation",
    location: "University of Montevallo",
  },
  {
    name: "Amaury Jarry",
    image: "/img/ajarr.jpg",
    position: "Football",
    location: "John Brown University",
  },
  {
    name: "Armand Legoff",
    image: "/img/aleg.jpg",
    position: "Natation",
    location: "Saddleback College",
  },
  {
    name: "Lillie Freulon",
    image: "/img/lfre.jpg",
    position: "Natation",
    location: "Missouri State University",
  },
  {
    name: "Janek Barczyk",
    image: "/img/jbar.jpg",
    position: "Volley-ball",
    location: "Florida Southern College",
  },
  {
    name: "Mateo Wallet",
    image: "/img/mwall.jpg",
    position: "Water Polo",
    location: "Barton Community College",
  },
  {
    name: "Matheo Loillier",
    image: "/img/mloi.jpg",
    position: "Water Polo",
    location: "Non décidé",
  },
  {
    name: "Melina Giraudeau",
    image: "/img/mgir.jpg",
    position: "Natation",
    location: "Non décidé",
  },
  {
    name: "Cesar Robles",
    image: "/img/crobs.jpg",
    position: "Natation",
    location: "Aquina College",
  },
  {
    name: "Isaac Panzer",
    image: "/img/ipan.jpg",
    position: "Natation",
    location: "Oklahoma Baptist University",
  },
  {
    name: "Agnieska Paskevic",
    image: "/img/apas.jpg",
    position: "Volley-ball",
    location: "Mercer University",
  },
];

import { FaRunning, FaBasketballBall, FaGolfBall, FaDumbbell, FaSwimmer, FaVolleyballBall, FaWater, FaFutbol } from 'react-icons/fa';

const sports = [
  { name: "Athlétisme", icon: <FaRunning className="text-4xl" /> },
  { name: "Basketball", icon: <FaBasketballBall className="text-4xl" /> },
  { name: "Football", icon: <FaFutbol className="text-4xl" /> },
  { name: "Golf", icon: <FaGolfBall className="text-4xl" /> },
  { name: "Gymnastique", icon: <FaDumbbell className="text-4xl" /> },
  { name: "Natation", icon: <FaSwimmer className="text-4xl" /> },
  { name: "Volley-ball", icon: <FaVolleyballBall className="text-4xl" /> },
  { name: "Water Polo", icon: <FaWater className="text-4xl" /> }
];

const reviews = [
  { 
    name: "Benjamin Chateigner", 
    review: "Étudier aux États-Unis est une chance car je reçois une éducation de classe mondiale, mes enseignants sont toujours prêts à me soutenir. Le personnel athlétique a créé les conditions idéales pour que je puisse performer. Bsathletics m'a assisté du début à la fin de mon processus de recrutement et encore à ce jour. Ils m'ont trouvé l'environnement parfait pour atteindre mes objectifs."
  },
  { 
    name: "Fanny Courbot", 
    review: "Déménager aux États-Unis pour étudier et nager était un vrai défi car je ne parlais pas la langue, mais mes entraîneurs, coéquipiers, camarades de classe et professeurs ont tous essayé de me mettre à l'aise et m'ont aidé à atteindre mes objectifs dans la piscine et en classe. Simon et l'équipe de BSathletics ont fait un excellent travail en me mettant en relation avec des entraîneurs universitaires américains et ont pris en charge toutes les démarches administratives qui n'auraient pas été possibles sans leur aide."
  },
  { 
    name: "Leonard Olaru", 
    review: "Merci à Bsathletics de m'avoir trouvé une seconde famille aux États-Unis. Leur assistance et leurs conseils tout au long de mon processus de recrutement m'ont aidé à financer mes études grâce à une bourse sportive, ce qui m'a permis de me concentrer sur mon sport et mes cours."
  }
];

export function Profile() {
  const [visibleProfiles, setVisibleProfiles] = useState(6);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
    setVisibleProfiles(showMore ? 6 : profiles.length);
  };

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
      </section>
      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <Typography variant="h2" color="black" className="mb-4 text-center">
              Rencontrez Nos Athlètes Exceptionnels
            </Typography>
            <Typography variant="paragraph" color="blue-gray" className="mb-12 text-center">
              Nous sommes fiers de vous présenter certains des athlètes remarquables que nous avons signés jusqu'à présent. Chacun de ces individus a obtenu un succès remarquable, décrochant des bourses dans des universités prestigieuses. Leur dévouement, talent et travail acharné ont pavé la voie pour leur avenir brillant.
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {profiles.slice(0, visibleProfiles).map((profile, index) => (
                <Card key={index} className="shadow-lg border shadow-gray-500/10 rounded-lg mx-auto bg-black">
                  <CardHeader floated={false} className="flex flex-col items-center bg-black">
                    <div className="w-40 h-40 mb-4">
                      <img
                        src={profile.image}
                        alt="Photo de profil"
                        className="object-cover rounded-full w-full h-full object-position-center"
                        style={{ objectPosition: 'top' }}
                      />
                    </div>
                  </CardHeader>
                  <CardBody className="text-center">
                    <Typography variant="h5" color="white" className="mb-2">
                      {profile.name}
                    </Typography>
                    <Typography variant="paragraph" color="white" className="font-normal">
                      {profile.position}
                    </Typography>
                    <Typography variant="paragraph" color="white" className="mt-2 font-medium">
                      {profile.location}
                    </Typography>
                    <Typography variant="paragraph" color="white" className="mt-1 font-light">
                      {profile.bio}
                    </Typography>
                  </CardBody>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button
                onClick={toggleShowMore}
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                {showMore ? 'Afficher moins' : 'Voir plus'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16">
        <div className="container mx-auto text-center">
          <Typography variant="h2" color="blue-gray" className="mb-8">
            Sports dans Lesquels Nous Excelons
          </Typography>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {sports.map((sport, index) => (
              <div key={index} className="flex flex-col items-center">
                {sport.icon}
                <Typography variant="h6" color="blue-gray" className="mt-4">
                  {sport.name}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16">
        <div className="container mx-auto">
          <Typography variant="h2" color="blue-gray" className="mb-8 text-center">
            Témoignages
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="shadow-lg border shadow-gray-500/10 rounded-lg mx-auto bg-white">
                <CardBody className="text-center">
                  <Typography variant="h6" color="blue-gray" className="mb-4">
                    {review.name}
                  </Typography>
                  <Typography variant="paragraph" color="blue-gray">
                    {review.review}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Profile;
