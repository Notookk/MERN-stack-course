import React from 'react'
import './projects.css'

function Projects() {
  const projectData = [
    {
      title: "Edureka Clone",
      description: "A full-stack educational platform clone with course management, user authentication, and interactive learning features.",
      technologies: ["Node.js", "MongoDB"]
    },
    {
      title: "Maruti Udyog Tender",
      description: "Corporate tender management system with secure document handling, bidding process, and administrative dashboard.",
      technologies: ["PHP", "MySQL", "Firebase"]
    },
    {
      title: "YouTube API Integration",
      description: "Video streaming application utilizing YouTube Data API for search, playlist management, and video recommendations.",
      technologies: ["YT-dlp", "Ytube", "flask", "MongoDB"]
    },
    {
      title: "NSFW Protection System",
      description: "AI-powered content moderation system using machine learning to detect and filter inappropriate content automatically.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask"]
    },
    {
      title: "Web Music Player",
      description: "Feature-rich music streaming application with playlist creation, audio visualization, and social sharing capabilities.",
      technologies: ["React", "Ytube", "Node.js", "Socket.io"]
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio showcasing projects, skills, and professional experience with modern design principles.",
      technologies: ["React", "CSS3", "Vite", "Vercel"]
    }
  ]

  return (
    <div className='projects-section'>
      <h2 className='section-title'>My Projects</h2>
      <div className='projects-container'>
        {projectData.map((project, index) => (
          <div key={index} className='project-card'>
            <div className='project-content'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className='tech-stack'>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className='tech-tag'>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects