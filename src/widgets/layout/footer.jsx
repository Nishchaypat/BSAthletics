// import PropTypes from "prop-types";
// import { Typography, IconButton } from "@material-tailwind/react";

// const year = new Date().getFullYear();

// export function Footer({ copyright }) {
//   return (
//     <footer className="relative px-4 pt-8 pb-6">
//       <div className="container mx-auto text-center">
//         <Typography variant="h4" className="mb-4" color="blue-gray">
//           BSAthletics
//         </Typography>
//         <div className="mx-auto mt-6 mb-8 flex justify-center gap-4">
//           <a
//             href="https://www.linkedin.com/in/your-profile"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <IconButton color="white" className="rounded-full shadow-none bg-transparent">
//               <Typography color="blue-gray">
//                 <i className="fa-brands fa-linkedin" />
//               </Typography>
//             </IconButton>
//           </a>
//           <a
//             href="https://www.instagram.com/bsathleticsfr"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <IconButton color="white" className="rounded-full shadow-none bg-transparent">
//               <Typography color="blue-gray">
//                 <i className="fa-brands fa-instagram" />
//               </Typography>
//             </IconButton>
//           </a>
//           <a
//             href="https://wa.me/your-number"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <IconButton color="white" className="rounded-full shadow-none bg-transparent">
//               <Typography color="blue-gray">
//                 <i className="fa-brands fa-whatsapp" />
//               </Typography>
//             </IconButton>
//           </a>
//         </div>
//         <hr className="my-6 border-gray-300" />
//         <div className="text-center">
//           <Typography variant="small" className="font-normal text-blue-gray-500">
//             {copyright}
//           </Typography>
//         </div>
//       </div>
//     </footer>
//   );
// }

// Footer.defaultProps = {
//   copyright: (
//     <>
//       Copyright © {year} BSAthletics
//     </>
//   ),
// };

// Footer.propTypes = {
//   copyright: PropTypes.node,
// };

// Footer.displayName = "/src/widgets/layout/footer.jsx";

// export default Footer;


import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto text-center">
        <Typography variant="h4" className="mb-4" color="blue-gray">
          BSAthletics
        </Typography>
        <div className="mx-auto mt-6 mb-8 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton color="white" className="rounded-full shadow-none bg-transparent">
              <Typography color="blue-gray">
                <i className="fa-brands fa-linkedin" />
              </Typography>
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/bsathleticsfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton color="white" className="rounded-full shadow-none bg-transparent">
              <Typography color="blue-gray">
                <i className="fa-brands fa-instagram" />
              </Typography>
            </IconButton>
          </a>
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton color="white" className="rounded-full shadow-none bg-transparent">
              <Typography color="blue-gray">
                <i className="fa-brands fa-whatsapp" />
              </Typography>
            </IconButton>
          </a>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="text-center">
          <Typography variant="small" className="font-normal text-blue-gray-500">
            {copyright}
          </Typography>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  copyright: (
    <>
      Droits d'auteur © {year} BSAthletics
    </>
  ),
};

Footer.propTypes = {
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
