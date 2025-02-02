import React from 'react';
import Navbar from './navbar';

const History = () => {
  const stats = [
    {
      title: "Total Transactions",
      value: "1,234",
      change: "+12.5%"
    },
    {
      title: "Average Amount",
      value: "$521.40",
      change: "+5.2%"
    },
    {
      title: "Success Rate",
      value: "98.3%",
      change: "+2.1%"
    }
  ];

  const historyItems = [
    {
      id: 1,
      title: "Payment Processed",
      time: "2 minutes ago",
      amount: "$234.50",
      status: "Success"
    },
    {
      id: 2,
      title: "Refund Issued",
      time: "1 hour ago",
      amount: "$120.00",
      status: "Completed"
    },
    {
      id: 3,
      title: "Payment Failed",
      time: "3 hours ago",
      amount: "$560.00",
      status: "Failed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-semibold">Transaction History</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">All Transactions</span>
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
          {/* Transactions List */}
          <div className="bg-white p-6 rounded-lg shadow-sm col-span-2">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Recent Transactions</h2>
              <select className="px-3 py-1 border rounded-md text-sm text-gray-600">
                <option value="all">All Time</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
            <div className="space-y-4">
              {historyItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-sm text-gray-500">{item.id}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium">{item.amount}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.status === 'Success' ? 'bg-green-100 text-green-800' :
                      item.status === 'Failed' ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
                View More Transactions
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default History;