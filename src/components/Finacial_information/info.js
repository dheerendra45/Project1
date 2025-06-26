import React, { useState } from 'react';
import { Download, FileText, ChevronDown } from 'lucide-react';

const FinancialInfoComponent = () => {
  const [activeTab, setActiveTab] = useState('2024-2025');
  const [activeCategory, setActiveCategory] = useState('Financial Results');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const years = ['2024-2025', '2023-2024', '2022-2023', '2021-2022'];
  
  const categories = [
    'Financial Results',
    'Financial Annual Report', 
    'Annual Return',
    'Financials of Subsidiaries Companies'
  ];

  // Sample data for 2024-2025
  const financialData = {
    '2024-2025': {
      'Financial Results': [
        {
          title: 'Q4. Audited Financial Results – 31.03.2025',
          type: 'Audited'
        },
        {
          title: 'Q3. UNAUDITED RESULT (Quarter ended December 2024)',
          type: 'Unaudited'
        },
        {
          title: 'Q2. UNAUDITED RESULT (Quarter ended September 2024)',
          type: 'Unaudited'
        },
        {
          title: 'Q1. UNAUDITED RESULT (Quarter ended June 2024)',
          type: 'Unaudited'
        }
      ],
      'Financial Annual Report': [
        {
          title: 'Annual Report 2024-2025',
          type: 'Annual Report'
        },
        {
          title: 'Directors Report 2024-2025',
          type: 'Directors Report'
        }
      ],
      'Annual Return': [
        {
          title: 'Form MGT-7 Annual Return 2024-2025',
          type: 'Form MGT-7'
        }
      ],
      'Financials of Subsidiaries Companies': [
        {
          title: 'Subsidiary Financial Results Q4 2024-2025',
          type: 'Subsidiary Report'
        },
        {
          title: 'Consolidated Financial Statements 2024-2025',
          type: 'Consolidated Report'
        }
      ]
    }
  };

  // Dummy data for other years
  const getDummyData = (year, category) => {
    return [
      {
        title: `${category} Report ${year} - Document 1`,
        type: 'Report'
      },
      {
        title: `${category} Statement ${year} - Document 2`, 
        type: 'Statement'
      },
      {
        title: `${category} Analysis ${year} - Document 3`,
        type: 'Analysis'
      }
    ];
  };

  const getCurrentData = () => {
    if (activeTab === '2024-2025' && financialData[activeTab][activeCategory]) {
      return financialData[activeTab][activeCategory];
    }
    return getDummyData(activeTab, activeCategory);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
    

      {/* Category Tabs - Horizontal */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 ${
              activeCategory === category
                ? 'border-orange-500 bg-orange-50 text-orange-700'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <FileText className="w-5 h-5" />
              <span className="text-sm font-medium text-center">{category}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Year Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveTab(year)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === year
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {year}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Document Title
                </th>
               
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {getCurrentData().map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-sm font-medium text-gray-900">{item.title}</span>
                    </div>
                  </td>
                 
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="inline-flex items-center px-3 py-2 bg-orange-600 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors duration-200">
                      <Download className="w-4 h-4 mr-2" />
                      DOWNLOAD
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

  
    </div>
  );
};

export default FinancialInfoComponent;