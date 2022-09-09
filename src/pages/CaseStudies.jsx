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
                    <div className="project-image">
                        <img src={project.mainImg} />
                    </div>
                    <div className="project-details">
                        <column>
                            <p>{project.objective}</p>
                        </column>
                        <column>
                            <p>{project.whatwedid}</p>
                        </column>
                    </div>
                </div>
            )
            }
        </>
    );
}

export default CaseStudies;