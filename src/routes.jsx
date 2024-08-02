// import { Home, Profile, Facilities, CollegeLife, WhyUsa, SignUp, UsaSports, Financing } from "./pages";

// export const routes = [
//   {
//     name: "home",
//     path: "/home",
//     element: <Home />,
//   },
//   {
//     name: "Our Talent",
//     path: "/profile",
//     element: <Profile />,
//   },
//   {
//     name: "Facilities",
//     path: "/facilities",
//     element: <Facilities />,
//   },
//   {
//     name: "College Life",
//     path: "/collegelife",
//     element: <CollegeLife />,
//   },
//   {
//     name: "U.S.A for Education",
//     path: "/whyusa",
//     element: <WhyUsa />,
//   },
//   {
//     name: "U.S.A for Athlete",
//     path: "/usasports",
//     element: <UsaSports />,
//   },
//   {
//     name: "Financing",
//     path: "/financing",
//     element: <Financing />,
//   },

// ];

// export default routes;


import { Home, Profile, Facilities, CollegeLife, WhyUsa, UsaSports, Financing } from "./pages";

export const routes = [
  {
    name: "Accueil",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Nos Talents",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Installations",
    path: "/facilities",
    element: <Facilities />,
  },
  {
    name: "Vie Universitaire",
    path: "/collegelife",
    element: <CollegeLife />,
  },
  {
    name: "États-Unis pour l'Éducation",
    path: "/whyusa",
    element: <WhyUsa />,
  },
  {
    name: "États-Unis pour les Athlètes",
    path: "/usasports",
    element: <UsaSports />,
  },
  {
    name: "Financement",
    path: "/financing",
    element: <Financing />,
  },
];

export default routes;
