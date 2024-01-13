// src/components/Projects.js
import React from 'react';

const Projects = () => {
  // Your project data
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      technologies: 'React, Redux, HTML, CSS',
      link: 'https://github.com/yourusername/project1',
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
