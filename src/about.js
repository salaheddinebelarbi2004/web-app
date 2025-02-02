import React from 'react';
import Navbar from './navbar';

const links = [
    { name: 'Our Team', href: '#' },
    { name: 'Project Overview', href: '#' },
    { name: 'Technologies Used', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];
  
  const stats = [
    { name: 'Team Members', value: '4' },
    { name: 'Hours Worked', value: '20+' },
    { name: 'Project Deadline', value: '15 jours' },
    { name: 'Technologies', value: 'React, Node.js, Oracle' },
    
  ];
  

const About = () => {
  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="pt-20 min-h-screen bg-gray-900">
        <div className="relative isolate overflow-hidden py-24 sm:py-32">
          {/* Optional Background Image */}
          {/* <img
            alt=""
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          /> */}
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
              <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">About This Project</h2>
              <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8"> <pre>
        {`This application helps manage our database system, 
allowing employees to handle tasks like products, 
departments, orders, and stock tracking.

It aims to improve data accuracy, 
collaboration, and make everyday tasks easier and faster.`}
      </pre></p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a key={link.name} href={link.href} className="hover:text-gray-400">
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse gap-1">
                    <dt className="text-base text-gray-300">{stat.name}</dt>
                    <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
