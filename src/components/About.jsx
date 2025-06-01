import React from 'react';
import { Link } from 'react-router';
import { Fade, Zoom, Slide, Bounce } from 'react-awesome-reveal';

const MarathonRace = () => {
  const categories = ['ALL EVENTS', '5K', '10K', 'HALF MARATHON', 'MARATHON', 'TRAINING'];
  const races = [
    {
      title: 'Annual City Marathon 2023',
      organizer: 'RunNation Events',
      category: 'MARATHON',
      excerpt: 'Join thousands of runners in our flagship 42km race through the city streets with amazing crowd support...',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
    },
    {
      title: 'Summer Night 10K Challenge',
      organizer: 'Urban Runners',
      category: '10K',
      excerpt: 'Experience the thrill of night running with our illuminated course through downtown...',
      image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
    },
    {
      title: 'Trail Half Marathon Series',
      organizer: 'Mountain Running Co.',
      category: 'HALF MARATHON',
      excerpt: 'Challenge yourself on scenic trails with elevation gains that will test your endurance...',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
    },
  ];

  return (
    <div className="container mx-auto bg-orange-50 px-4 py-8 max-w-9xl">
      <Fade direction="down" triggerOnce>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">UPCOMING RACES</h2>
          <h3 className="text-xl text-gray-600">Find Your Next Challenge</h3>
        </div>
      </Fade>

      <Bounce delay={300} triggerOnce>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`btn btn-sm rounded-full font-bold bg-orange-500 text-gray-800 hover:bg-orange-600 hover:text-gray-900`}
            >
              {category}
            </button>
          ))}
        </div>
      </Bounce>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {races.map((race, index) => (
          <Slide 
            key={index} 
            direction={index % 2 === 0 ? "left" : "right"} 
            delay={index * 100}
            triggerOnce
          >
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
              <Zoom triggerOnce>
                <figure className="px-4 pt-4">
                  <img 
                    src={race.image} 
                    alt={race.title} 
                    className="rounded-xl h-48 w-full object-cover"
                  />
                </figure>
              </Zoom>
              <div className="card-body">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{race.organizer}</span>
                  <span className="badge badge-outline">{race.category}</span>
                </div>
                <h4 className="card-title text-lg">{race.title}</h4>
                <p className="text-gray-600 mt-2 line-clamp-2">{race.excerpt}</p>
              </div>
            </div>
          </Slide>
        ))}
      </div>
      
      <Fade direction="up" delay={300} triggerOnce>
        <div className="text-center">
          <Link to={`/`} className="btn bg-orange-500 font-bold text-gray-800 hover:bg-orange-600 hover:text-gray-900">
            Back to Home
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default MarathonRace;