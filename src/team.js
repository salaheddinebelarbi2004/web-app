import React from 'react';
import faycel from './photos/photo_5794311736352949342_y.jpg'
import bahaa from './photos/bahaa.jpg'
import khalil from './photos/khalil.jpeg'
import salah from './photos/470202058_1318739862474627_1951536893600901282_n.jpg'
import Navbar from './navbar';
import { Quote } from 'lucide-react';
const Team = () => {
  const teamMembers = [
    {
      name: "Fayçal mohamed ZM",
      role: "Front-End",
      imageUrl:faycel,
      quote: "Innovation distinguishes between a leader and a follower.",
      email: "Faycalmagueni29@gmail.com",
      location: "SIG-Mascara"
    },
    {
      name: "Salaheddine Belarbi",
      role: "Front-End",
      imageUrl: salah,
      quote: "Technology is best when it brings people together.",
      email: "salaheddine2004belarbi@gmail.com",
      location: "Benokba-Oran"
    },
    {
      name: "charen bahaaeddine",
      role: "backend ",
      imageUrl: bahaa,
      quote: "Design is not just what it looks like. Design is how it works.",
      email: "",
      location: "blida"
    },
    {
      name: "tahraoui khalil",
      role: "database",
      imageUrl: khalil,
      quote: "Make it simple, but significant.",
      email: "alex.r@company.com",
      location: "tiaret"
    }
  ];

  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="pt-20 min-h-screen bg-gray-900">
        <div className="relative isolate overflow-hidden py-24 sm:py-32">
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Team</h2>
            
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative group bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative mb-4">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-purple-400 font-medium mb-2">{member.role}</p>
                    <div className="text-gray-400 text-sm mb-4">
                      <p>{member.email}</p>
                      <p>{member.location}</p>
                    </div>

                    {/* Quote Section */}
                    <div className="relative p-4 bg-gray-700/50 rounded-lg mt-4">
                      <Quote className="w-4 h-4 text-purple-400 absolute top-2 left-2 opacity-50" />
                      <p className="text-gray-300 text-sm italic pl-6">"{member.quote}"</p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute inset-0 border border-purple-500/20 rounded-xl pointer-events-none"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
