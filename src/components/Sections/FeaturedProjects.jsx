import React from 'react';
import { featuredProjects } from '../../data/projects';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 cursor-pointer">
      {/* Background Image */}
      <img 
        src={project.image} 
        alt={project.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Bottom Text Overlay (Default) */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white transition-opacity duration-300 group-hover:opacity-0">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-medium tracking-tight">{project.name}</h3>
            <p className="text-sm opacity-80">{project.location}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">{project.service}</p>
            <p className="text-xs opacity-60">{project.area}</p>
          </div>
        </div>
      </div>

      {/* Hover Information Overlay */}
      <div className="absolute inset-0 bg-brand-red/90 p-8 flex flex-col justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-3xl font-medium tracking-tight mb-1">{project.name}</h3>
            <p className="text-base opacity-90">{project.location}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-medium">{project.service}</p>
            <p className="text-sm opacity-80">{project.area}</p>
          </div>
        </div>
        
        <p className="text-lg leading-snug font-light line-clamp-4">
          {project.description}
        </p>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-gray-900">Featured Projects</h2>
          <Link to="/projects" className="text-brand-red font-medium hover:underline">View All Projects</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
          {/* Load More Card */}
          <Link to="/projects" className="flex flex-col items-center justify-center w-full aspect-[4/3] rounded-xl border-2 border-dashed border-gray-200 hover:border-brand-red hover:bg-brand-red/5 transition-all group">
            <p className="text-2xl font-medium text-gray-400 group-hover:text-brand-red">More Projects</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
