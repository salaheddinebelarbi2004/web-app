// User3Page.js
import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Table from './Table';

const User3Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-semibold text-center text-gray-800">Welcome, User 3</h1>
          <p className="mt-4 text-center text-gray-500">This is your page.</p>

          {/* Table */}
          <div className="mt-6">
            <Table data={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User3Page;
