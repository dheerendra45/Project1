import React from 'react';
import staticsbg from '../../assets/overview/staticsbg.jpg';
import {
  Users,             // Community
  Zap,               // Power
  UserCheck,         // Employees
  Factory,           // Steel Production
} from 'lucide-react';

const StatisticsSection = () => {
  return (
    <div className="relative text-white py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={staticsbg}
          alt="Statistics Background"
          className="w-full h-full object-cover"
        />
        
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {/* Community */}
          <div>
            <div className="w-24 h-24 border-2 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="text-white w-12 h-12" />
            </div>
            <h3 className="text-3xl font-bold">14.3 M</h3>
            <p className="text-orange-500 font-semibold">COMMUNITY PEOPLE</p>
            <p className="text-orange-500 font-semibold">BENEFITTED</p>
          </div>

          {/* Power */}
          <div>
            <div className="w-24 h-24 border-2 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Zap className="text-white w-12 h-12" />
            </div>
            <h3 className="text-3xl font-bold">1634 M</h3>
            <p className="text-orange-500 font-semibold">CAPTIVE POWER</p>
            <p className="text-orange-500 font-semibold">CAPACITY</p>
          </div>

          {/* Employees */}
          <div>
            <div className="w-24 h-24 border-2 rounded-full mx-auto mb-6 flex items-center justify-center">
              <UserCheck className="text-white w-12 h-12" />
            </div>
            <h3 className="text-3xl font-bold">20 K+</h3>
            <p className="text-orange-500 font-semibold">EMPLOYEES ACROSS</p>
            <p className="text-orange-500 font-semibold">3 CONTINENTS</p>
          </div>

          {/* Steel Production */}
          <div>
            <div className="w-24 h-24 border-2 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Factory className="text-white w-12 h-12" />
            </div>
            <h3 className="text-3xl font-bold">6.4 MTPA</h3>
            <p className="text-orange-500 font-semibold">STEEL PRODUCTION</p>
            <p className="text-orange-500 font-semibold">CAPACITY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
