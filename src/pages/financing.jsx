// import React from "react";
// import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
// import { PageTitle, Footer } from "@/widgets/layout";
// import { MoneyOff, School, AccountBalance, Public } from "@mui/icons-material";

// export function Financing() {
//   return (
//     <>
//       <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
//         <div className="absolute top-0 h-full w-full bg-[url('/img/financing.jpg')] bg-cover bg-center opacity-80" />
//         <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
//         <div className="max-w-8xl container relative mx-auto">
//           <div className="flex flex-wrap items-center">
//             <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
//               <Typography variant="h1" color="white" className="mb-8 font-blue-gray">
//                 Financing Your College Education
//               </Typography>
//               <Typography variant="lead" color="white" className="opacity-100">
//                 Making College Affordable
//               </Typography>
//             </div>
//           </div>
//         </div>
//       </div>
//       <br /><br /><br /><br /><br /><br />
//       <section className="-mt-32 bg-white px-4 pb-20 pt-4">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap items-center">
//             <div className="mx-auto w-full px-4 text-center md:w-5/12">
//               <Typography className="mb-8 font-normal text-blue-gray-500">
//                 College can be expensive, but there are numerous ways to finance your education. From athletic scholarships to need-based aid, explore the options available to help make your college journey more affordable.
//               </Typography>
//               <br /><br />
//               <Typography className="mb-8 font-normal text-blue-gray-500">
//                 At BSathletics, we help you navigate these options to find the best financial support for your academic and athletic goals.
//               </Typography>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
//             <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//               <CardHeader floated={false} className="relative w-120 h-60 flex items-center justify-center">
//                 <MoneyOff className="text-blue-gray-500" style={{ fontSize: 50 }} />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
//                   Athletic Scholarships
//                 </Typography>
//                 <Typography className="font-normal text-blue-gray-500">
//                   Many colleges offer athletic scholarships covering full or partial tuition, based on your performance and potential in your sport.
//                 </Typography>
//               </CardBody>
//             </Card>
//             <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//               <CardHeader floated={false} className="relative w-120 h-60 flex items-center justify-center">
//                 <School className="text-blue-gray-500" style={{ fontSize: 50 }} />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
//                   Academic Scholarships
//                 </Typography>
//                 <Typography className="font-normal text-blue-gray-500">
//                   Merit-based scholarships awarded for high academic achievement, covering tuition and sometimes additional expenses.
//                 </Typography>
//               </CardBody>
//             </Card>
//             <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//               <CardHeader floated={false} className="relative w-120 h-60 flex items-center justify-center">
//                 <AccountBalance className="text-blue-gray-500" style={{ fontSize: 50 }} />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
//                   Need-Based Financial Aid
//                 </Typography>
//                 <Typography className="font-normal text-blue-gray-500">
//                   Financial aid based on your family's financial situation, including grants and loans to help cover the cost of college.
//                 </Typography>
//               </CardBody>
//             </Card>
//             <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//               <CardHeader floated={false} className="relative w-120 h-60 flex items-center justify-center">
//                 <Public className="text-blue-gray-500" style={{ fontSize: 50 }} />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
//                   International Student Aid
//                 </Typography>
//                 <Typography className="font-normal text-blue-gray-500">
//                   Scholarships and financial aid tailored for international students to support their education in the U.S.
//                 </Typography>
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//       </section>
//       <br /><br /><br /><br />
//       <section className="-mt-32 bg-white px-4 pb-20 pt-4 relative py-24">
//         <div className="container mx-auto max-w-8xl text-center">
//           <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
//             Discover Your Funding Options
//           </Typography>
//           <Typography className="mb-8 font-normal text-blue-gray-500">
//             At BSathletics, we are dedicated to helping you explore and secure financial resources that align with your educational and athletic goals.
//           </Typography>
//           <Typography className="font-normal text-blue-gray-500">
//             Join us and uncover the array of financial opportunities available to make your college experience more affordable and accessible.
//           </Typography>
//         </div>
//       </section>
//       <div className="bg-white">
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Financing;


import React from "react";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import { MoneyOff, School, AccountBalance, Public } from "@mui/icons-material";

export function Financing() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/financing.jpg')] bg-cover bg-center opacity-80" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-8 font-blue-gray">
                Financement de Votre Éducation Universitaire
              </Typography>
              <Typography variant="lead" color="white" className="opacity-100">
                Rendre l’Université Abordable
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto w-full px-4 text-center md:w-5/12">
              <Typography className="mb-8 font-normal text-blue-gray-500">
                L'université peut être coûteuse, mais il existe de nombreuses façons de financer votre éducation. Des bourses sportives aux aides financières basées sur les besoins, explorez les options disponibles pour rendre votre parcours universitaire plus abordable.
              </Typography>
              <br /><br />
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Chez BSathletics, nous vous aidons à naviguer parmi ces options pour trouver le meilleur soutien financier pour vos objectifs académiques et sportifs.
              </Typography>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
              <CardHeader floated={false} className="relative w-120 h-60 flex items-center justify-center">
                <MoneyOff className="text-blue-gray-500" style={{ fontSize: 50 }} />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
                  Bourses Sportives
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  De nombreux collèges offrent des bourses sportives couvrant une partie ou la totalité des frais de scolarité, en fonction de vos performances et de votre potentiel dans votre sport.
                </Typography>
              </CardBody>
            </Card>
            <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
              <CardHeader floated={false} className="relative w-120 h-60 flex items-center justify-center">
                <School className="text-blue-gray-500" style={{ fontSize: 50 }} />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
                  Bourses Académiques
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  Bourses basées sur le mérite accordées pour des performances académiques élevées, couvrant les frais de scolarité et parfois des dépenses supplémentaires.
                </Typography>
              </CardBody>
            </Card>
            <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
              <CardHeader floated={false} className="relative w-120 h-60 flex items-center justify-center">
                <AccountBalance className="text-blue-gray-500" style={{ fontSize: 50 }} />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
                  Aide Financière Basée sur les Besoins
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  Aide financière basée sur la situation financière de votre famille, y compris des subventions et des prêts pour couvrir les frais de l'université.
                </Typography>
              </CardBody>
            </Card>
            <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
              <CardHeader floated={false} className="relative w-120 h-60 flex items-center justify-center">
                <Public className="text-blue-gray-500" style={{ fontSize: 50 }} />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
                  Aide pour Étudiants Internationaux
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  Bourses et aide financière adaptées aux étudiants internationaux pour soutenir leur éducation aux États-Unis.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      <br /><br /><br /><br />
      <section className="-mt-32 bg-white px-4 pb-20 pt-4 relative py-24">
        <div className="container mx-auto max-w-8xl text-center">
          <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
            Découvrez Vos Options de Financement
          </Typography>
          <Typography className="mb-8 font-normal text-blue-gray-500">
            Chez BSathletics, nous sommes dédiés à vous aider à explorer et sécuriser les ressources financières qui correspondent à vos objectifs académiques et sportifs.
          </Typography>
          <Typography className="font-normal text-blue-gray-500">
            Rejoignez-nous et découvrez l’éventail d’opportunités financières disponibles pour rendre votre expérience universitaire plus abordable et accessible.
          </Typography>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Financing;
