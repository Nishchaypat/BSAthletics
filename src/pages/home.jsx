// import React, { useState, useRef } from "react";
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Typography,
//   Button,
//   IconButton,
//   Input,
//   Textarea,
//   Checkbox,
// } from "@material-tailwind/react";
// import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
// import { PageTitle, Footer } from "@/widgets/layout";
// import { FeatureCard, TeamCard } from "@/widgets/cards";
// import { featuresData, teamData, contactData } from "@/data";
// import emailjs from 'emailjs-com';

// export function Home() {
//   const [showMore, setShowMore] = useState(false);
//   const form = useRef();

//   const handleReadMore = () => {
//     setShowMore(!showMore);
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_x6qx7vj', 'template_fl0be9h', form.current, 'Z561a5RNf0ipWWDzy')
//       .then(
//         () => {
//           alert("Message sent successfully!");
//         },
//         (error) => {
//           console.error("Failed to send message:", error.text);
//         }
//       );
//   };

//   return (
//     <>
//       <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
//         <div className="absolute top-0 h-full w-full bg-[url('/img/bg-home-test1.jpeg')] bg-cover bg-center opacity-50" />
//         <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
//         <div className="max-w-8xl container relative mx-auto">
//           <div className="flex flex-wrap items-center">
//             <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
//               <Typography
//                 variant="h2"
//                 color="white"
//                 className="mb-8 font-blue-gray"
//               >
//                 Your American Dream starts here.
//               </Typography>
//               <Typography variant="lead" color="white" className="opacity-100">
//                 We believe in the power of sports and education to transform lives.
//                 <br /><br />
//                 We are committed to guiding and supporting student-athletes throughout their college experience, from initial recruitment to graduation and beyond.
//               </Typography>
//             </div>
//           </div>
//         </div>
//       </div>
//       <section className="-mt-32 bg-white px-4 pb-20 pt-4">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
//             {featuresData.map(({ color, title, icon, description }) => (
//               <FeatureCard 
//                 key={title}
//                 color={color}
//                 title={title}
//                 icon={React.createElement(icon, {
//                   className: "w-10 h-20 text-white",
//                 })}
//                 description={description}
//               />
//             ))}
//           </div>
//           <div className="mt-32 flex flex-wrap items-center">
//             <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
//               <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
//                 <FingerPrintIcon className="h-8 w-8 text-white " />
//               </div>
//               <Typography
//                 variant="h3"
//                 className="mb-3 font-bold"
//                 color="blue-gray"
//               >
//                 What we do
//               </Typography>
//               <Typography className="mb-8 font-normal text-blue-gray-500">
//                 Personalized Matching: We work closely with each athlete to understand their goals, 
//                 talents, and academic interests, ensuring they find the right fit at a college that 
//                 supports their aspirations.
//                 <br />
//                 <br />
//                 Scholarship Assistance: Our team navigates the complex scholarship
//                 landscape to secure the best financial aid opportunities for our athletes, 
//                 making college more accessible and affordable.
//                 {showMore && (
//                   <>
//                   <br />
//                   <br />
//                   Ongoing Mentorship: We provide continuous support throughout the college journey, 
//                   offering guidance, mentorship, and assistance whenever needed to ensure a successful 
//                   and enriching experience.
//                   <br />
//                   <br />
//                   Comprehensive Support: From visa applications to settling into campus life, 
//                   we assist with all necessary paperwork and logistics, allowing our athletes to 
//                   focus on what they do best—excelling in their sport and studies.
//                   </>
//                 )}
//               </Typography>
//               <Button variant="filled" onClick={handleReadMore}>
//                 {showMore ? 'read less' : 'read more'}
//               </Button>
//             </div>
//             <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
//               <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//                 <CardHeader floated={false} className="relative w-70 h-70">
//                   <img
//                     alt="Card Image"
//                     src="/img/background-home2.jpg"
//                     className="h-full w-full"
//                   />
//                 </CardHeader>
//                 <CardBody>
//                   <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
//                   <Typography
//                     variant="h5"
//                     color="blue-gray"
//                     className="mb-3 mt-2 font-bold"
//                   >
//                     Our Mission
//                   </Typography>
//                   <Typography className="font-normal text-blue-gray-500">
//                   At BSathletics, we believe in the power of sports and education to transform lives. Our mission is to provide every athlete, 
//                   regardless of social background or ethnicity, with the opportunity to excel both academically and athletically in the United States. 
//                   We are committed to guiding and supporting student-athletes throughout their college experience, from initial recruitment to graduation and beyond.
//                   </Typography>
//                 </CardBody>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <section className="text-center -mt-32 bg-white px-4 pb-20 pt-4 relative  py-24">
//       <div className="container mx-auto max-w-7xl flex flex-col items-center">
//           <PageTitle section="Our Story">
//           <div className="flex flex-col items-center">
//           <div className="w-40 h-40 mb-4">
//             <img alt="Card Image" src="/img/simon.jpeg" className="object-cover rounded-full w-full h-full" />
//           </div>
//             <div className="text-center">
//               <h1 className="text-2xl font-bold text-blue-gray-900">
//                 Simon Botton
//               </h1>
//               <h2 className="text-xl font-medium text-blue-gray-600 mt-2">
//                 Founder
//               </h2>
//             </div>
//             <br />
//             <p className="text-2xl text-blue-gray-500">
//               Simon's journey began when he moved from France to the United States at 18 to swim and study. Through his experiences in various US colleges,
//               Simon realized that foreign student-athletes often face significant challenges accessing the opportunities available to them in American higher education.
//               In many countries, like France, pursuing higher-level athletics while attending college can be complex. This inspired Simon to create a supportive
//               community for these athletes—a "huge family" that extends beyond just finding a school or scholarship.
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             </p>
//             </div>

//           </PageTitle>

//           <PageTitle section="How to achieve your dream">
//           <div className="text-center">
//               <h1 className="text-2xl font-bold text-blue-gray-900">
//                 Next Steps
//               </h1>
//             </div>
//           <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
//             {contactData.map(({ title, icon, description }) => (
//               <Card
//                 key={title}
//                 color="transparent"
//                 shadow={false}
//                 className="text-center text-blue-gray-900"
//               >
//                 <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
//                   {React.createElement(icon, {
//                     className: "w-5 h-5 text-white",
//                   })}
//                 </div>
//                 <Typography variant="h5" color="blue-gray" className="mb-2 font-normal">
//                   {title}
//                 </Typography>
//                 <Typography className="font-normal text-blue-gray-500">
//                   {description}
//                 </Typography>
//               </Card>
//             ))}
//           </div>
//           </PageTitle>

//           <div className="max-w-4xl text-center">
//             <Typography
//               variant="h2"
//               color="blue-gray"
//               className="mb-14 font-bold"
//             >
//               Contact us
//             </Typography>

//             <form ref={form} onSubmit={sendEmail} className="mx-auto mt-12 max-w-3xl text-left">
//               <div className="mb-8 flex gap-8">
//                 <Input type="text" name="user_name" variant="standard" size="lg" label="Full Name" className="flex-1" required/>
//                 <Input type="email" name="user_email" variant="standard" size="lg" label="Email Address" className="flex-1" required/>
//               </div>
//               <div className="mb-8 flex gap-8">
//                 <Input type="number" name="user_phone" variant="standard" size="lg" label="Phone Number" className="flex-1" required/>
//                 <Input type="text" name="user_country" variant="standard" size="lg" label="Country" className="flex-1" required/>
//               </div>
//               <div className="mb-8 flex gap-8">
//                 <Input type="text" name="user_high_school" variant="standard" size="lg" label="High School" className="flex-1" required/>
//                 <Input type="text" name="user_sport" variant="standard" size="lg" label="Sport" className="flex-1" required/>
//               </div>
//               <div className="mb-8 flex gap-8">
//                 <Input type="text" name="user_gpa" variant="standard" size="lg" label="GPA" className="flex-1" required/>
//                 <Input type="text" name="user_national_ranking" variant="standard" size="lg" label="National Ranking" className="flex-1" required/>
//               </div>
//               <div className="mb-8 flex gap-8">
//                 <Input type="text" name="user_best_performance" variant="standard" size="lg" label="Best Performance" className="flex-1" required/>
//                 <Input type="text" name="user_academic_goals" variant="standard" size="lg" label="Academic Goals" className="flex-1" required/>
//               </div>
//               <div className="mb-8 flex gap-8">
//                 <Input type="text" name="user_athletic_goals" variant="standard" size="lg" label="Athletic Goals" className="flex-1" required/>
//                 <Input type="text" name="user_budget" variant="standard" size="lg" label="Budget" className="flex-1" required/>
//               </div>
//               <Textarea name="message" variant="standard" size="lg" label="Message" rows={8} required/>
//               <Button type="submit" variant="gradient" className="mt-8">
//                 Send Message
//               </Button>
//             </form>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// export default Home;


import React, { useState, useRef } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import emailjs from 'emailjs-com';

export function Home() {
  const [showMore, setShowMore] = useState(false);
  const form = useRef();

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x6qx7vj', 'template_fl0be9h', form.current, 'Z561a5RNf0ipWWDzy')
      .then(
        () => {
          alert("Message envoyé avec succès !");
        },
        (error) => {
          console.error("Échec de l'envoi du message :", error.text);
        }
      );
  };

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/bg-home-test1.jpeg')] bg-cover bg-center opacity-50" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h2"
                color="white"
                className="mb-8 font-blue-gray"
              >
                Votre rêve américain commence ici.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-100">
                Nous croyons au pouvoir du sport et de l'éducation pour transformer des vies.
                <br /><br />
                Nous nous engageons à guider et à soutenir les étudiants-athlètes tout au long de leur parcours universitaire, de leur recrutement initial jusqu'à l'obtention de leur diplôme et au-delà.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard 
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-10 h-20 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Ce que nous faisons
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Correspondance personnalisée : Nous travaillons en étroite collaboration avec chaque athlète pour comprendre leurs objectifs, 
                talents et intérêts académiques, en veillant à ce qu'ils trouvent la bonne correspondance dans une université qui soutient leurs aspirations.
                <br />
                <br />
                Assistance aux bourses : Notre équipe navigue dans le paysage complexe des bourses pour obtenir les meilleures opportunités d'aide financière pour nos athlètes, 
                rendant l'université plus accessible et abordable.
                {showMore && (
                  <>
                  <br />
                  <br />
                  Mentorat continu : Nous offrons un soutien continu tout au long du parcours universitaire, 
                  offrant des conseils, du mentorat et de l'assistance chaque fois que nécessaire pour garantir une expérience réussie et enrichissante.
                  <br />
                  <br />
                  Soutien complet : Des demandes de visa à l'installation dans la vie de campus, 
                  nous aidons à toutes les formalités administratives et logistiques nécessaires, permettant à nos athlètes de 
                  se concentrer sur ce qu'ils font de mieux : exceller dans leur sport et leurs études.
                  </>
                )}
              </Typography>
              <Button variant="filled" onClick={handleReadMore}>
                {showMore ? 'lire moins' : 'lire plus'}
              </Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative w-70 h-70">
                  <img
                    alt="Card Image"
                    src="/img/background-home2.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Entreprise</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Notre mission
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  Chez BSathletics, nous croyons au pouvoir du sport et de l'éducation pour transformer des vies. Notre mission est de fournir à chaque athlète, 
                  quel que soit son milieu social ou ethnique, l'opportunité de réussir tant sur le plan académique que sportif aux États-Unis. 
                  Nous nous engageons à guider et à soutenir les étudiants-athlètes tout au long de leur parcours universitaire, du recrutement initial jusqu'à l'obtention de leur diplôme et au-delà.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="text-center -mt-32 bg-white px-4 pb-20 pt-4 relative py-24">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
          <PageTitle section="Notre histoire">
          <div className="flex flex-col items-center">
          <div className="w-40 h-40 mb-4">
            <img alt="Card Image" src="/img/simon.jpeg" className="object-cover rounded-full w-full h-full" />
          </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-blue-gray-900">
                Simon Botton
              </h1>
              <h2 className="text-xl font-medium text-blue-gray-600 mt-2">
                Fondateur
              </h2>
            </div>
            <br />
            <p className="text-2xl text-blue-gray-500">
              Le parcours de Simon a commencé lorsqu'il a déménagé de la France aux États-Unis à 18 ans pour nager et étudier. À travers ses expériences dans divers collèges américains,
              Simon a réalisé que les étudiants-athlètes étrangers rencontrent souvent des difficultés importantes pour accéder aux opportunités disponibles dans l'enseignement supérieur américain.
              Dans de nombreux pays, comme la France, poursuivre des études supérieures tout en pratiquant un sport de haut niveau peut être complexe. Cela a inspiré Simon à créer une communauté de soutien
              pour ces athlètes — une "grande famille" qui va au-delà de la simple recherche d'une école ou d'une bourse.
            <br />
            <br />
            <br />
            <br />
            <br />
            </p>
            </div>

          </PageTitle>

          <PageTitle section="Comment réaliser votre rêve">
          <div className="text-center">
              <h1 className="text-2xl font-bold text-blue-gray-900">
                Prochaines étapes
              </h1>
            </div>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 font-bold"
                >
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          </PageTitle>

          <div className="w-full max-w-3xl mt-4">
            <Card>
              <form ref={form} onSubmit={sendEmail}>
                <CardHeader
                  variant="gradient"
                  color="blue-gray"
                  className="mb-4 grid h-28 place-items-center"
                >
                  <Typography variant="h3" color="white">
                    Nous Contacter
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input variant="outlined" label="Nom complet" name="from_name" size="lg" required />
                    <Input variant="outlined" label="Email" name="email_id" size="lg" required />
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input variant="outlined" label="Numéro de téléphone" name="phone" size="lg" required />
                    <Input variant="outlined" label="Pays" name="country" size="lg" required />
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input variant="outlined" label="Sport" name="sport" size="lg" required />
                    <Input variant="outlined" label="Taille" name="height" size="lg" required />
                    <Input variant="outlined" label="Poids" name="weight" size="lg" required />
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input variant="outlined" label="Âge" name="age" size="lg" required />
                    <Input variant="outlined" label="GPA" name="gpa" size="lg" required />
                    <Input variant="outlined" label="Lycée" name="high_school" size="lg" required />
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input variant="outlined" label="Classement national en sport" name="national_ranking" size="lg" required />
                    <Input variant="outlined" label="Meilleurs temps ou performances" name="best_times_performance" size="lg" required />
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input variant="outlined" label="Objectifs académiques" name="academic_goals" size="lg" required />
                    <Input variant="outlined" label="Objectifs sportifs" name="athletic_goals" size="lg" required />
                  </div>
                  <Textarea variant="outlined" label="Budget" name="budget" size="lg" required />
                  <Checkbox
                    label={
                      (
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="flex items-center font-normal"
                        >
                          Je suis d'accord avec les
                          <a
                            href="#"
                            className="font-medium transition-colors hover:text-blue-500"
                          >
                            &nbsp;termes et conditions
                          </a>
                        </Typography>
                      )
                    }
                    containerProps={{ className: "-ml-2.5" }}
                  />
                </CardBody>
                <div className="flex justify-center mb-4">
                  <Button type="submit" variant="gradient" fullWidth>
                    Envoyer
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
