import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react'; // Fix: Import Disclosure
import logo from './photos/image-removebg-preview.png'; // Fix: Import your logo (update path if needed)

// Helper function for classNames
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve authenticated user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  const [navigation] = useState([
    { name: 'Home', href: user ? `/home/${user.username}` : '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
  ]);

  const handleNavigationClick = (href) => {
    navigate(href);
  };

  const isCurrent = (href) => location.pathname === href;

  return (
    <Disclosure as="nav" className="bg-gray-900 shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between">
            <div className="flex shrink-0 items-center">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigationClick(item.href)}
                    className={classNames(
                      isCurrent(item.href)
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-300 hover:bg-indigo-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
