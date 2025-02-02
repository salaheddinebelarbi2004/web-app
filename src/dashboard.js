import React from 'react';
import Navbar from './navbar';
const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%"
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+180.1%"
    },
    {
      title: "Daily Activities",
      value: "12,234",
      change: "+19%"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
 <Navbar />
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Welcome back</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-row items-center justify-between pb-2">
                <h3 className="text-sm font-medium text-gray-500">
                  {stat.title}
                </h3>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-500 mt-1">
                {stat.change} from last month
              </p>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Chart Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Overview</h2>
            </div>
            <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
              <span className="text-gray-500">Chart placeholder</span>
            </div>
          </div>

          {/* Activity Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Recent Activity</h2>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-4 py-2 border-b border-gray-100">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-sm text-gray-500">{item}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Activity {item}</p>
                    <p className="text-sm text-gray-500">2 minutes ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;