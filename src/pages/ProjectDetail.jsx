// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { useLocation } from 'react-router-dom';
// import { ProjectState } from '../projectState';
// // Animations
// import { motion } from 'framer-motion';
// import { pageAnimation } from '../animation';

// const ProjectDetail = () => {
//     const url = useLocation();
//     const [projects] = useState(ProjectState);
//     const [project, setProject] = useState(null);

//     // UseEffect
//     useEffect(() => {
//         const currentProject = projects.filter((stateProject) => stateProject.url === url.pathname);
//         setProject(currentProject[0]);
//     }, [projects, url]);

//     return (
//         <>
//             {project && (
//                 <StyledDetails variants={pageAnimation} initial="hidden" animate="show" exit="exit">
//                     <StyledHeadline>
//                         <h2>{project.title}</h2>
//                         <img src={project.mainImg} alt="Ian project" />
//                     </StyledHeadline>
//                     <StyledAwards>
//                         {project.awards.map((award) => (
//                             <Award title={award.title} description={award.description} key={award.title} codeStack={award.codeStack} viewProject={award.viewProject} />
//                         ))}
//                     </StyledAwards>
//                     <StyledImageDisplay>
//                         <img src={project.secondaryImg} alt='' />
//                     </StyledImageDisplay>
//                 </StyledDetails>
//             )}
//         </>
//     );

// };