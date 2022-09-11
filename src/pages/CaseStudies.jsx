import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import Animation
// import { motion } from "framer-motion";
// import components
import { dataState } from '../dataState';
// import images

function CaseStudies() {
    const url = useLocation();
    const [projects] = useState(dataState);
    const [project, setProject] = useState(null);
    console.log(url);

    // useEffect
    useEffect(() => {
        const currentProject = projects.filter((stateProject) => stateProject.url === url.pathname);
        setProject(currentProject[0]);
    }, [projects, url]);

    return (
        <>
            {project && (
                <div>
                    <div className="project-header">
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                    </div>
                    <div >
                        <img src={project.mainImg} alt="Showing our case study work" className="project-image" />
                    </div>
                    <div className="project-details">
                        <section className="container">
                            <div className="row">
                                <column>
                                    <p>{project.objective}</p>
                                </column>
                                <column>
                                    <p>{project.whatwedid}</p>
                                </column>
                            </div>
                        </section>
                    </div>
                </div>
            )
            }
        </>
    );
}

export default CaseStudies;