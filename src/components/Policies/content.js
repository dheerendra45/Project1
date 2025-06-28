import React from 'react';
import { Download, FileText } from 'lucide-react';

const PoliciesTable = () => {
  const policies = [
    { name: "Sustainability policy", filename: "sustainability_policy.pdf" },
    { name: "Energy policy", filename: "energy_policy.pdf" },
    { name: "Water Policy", filename: "water_policy.pdf" },
    { name: "TERMS AND CONDITIONS FOR APPOINTMENT OF INDEPENDENT DIRECTORS", filename: "terms_conditions_independent_directors.pdf" },
    { name: "Anti-Sexual Harassment Policy", filename: "anti_sexual_harassment_policy.pdf" },
    { name: "Policy of Board Diversity", filename: "board_diversity_policy.pdf" },
    { name: "Business Responsibility and Sustainability Policy", filename: "business_responsibility_sustainability_policy.pdf" },
    { name: "Risk Management Policy", filename: "risk_management_policy.pdf" },
    { name: "Anti Corruption and Anti Bribery Policy", filename: "anti_corruption_bribery_policy.pdf" },
    { name: "Dividend Distribution Policy", filename: "dividend_distribution_policy.pdf" },
    { name: "Whistle Blower Policy", filename: "whistle_blower_policy.pdf" },
    { name: "Code of Conduct for Regulating, Monitoring and Reporting of Trading by Insiders", filename: "insider_trading_code.pdf" },
    { name: "Policy for Transactions with Related Parties", filename: "related_party_transactions_policy.pdf" },
    { name: "Policy for Preservation of Documents", filename: "document_preservation_policy.pdf" },
    { name: "Policy for Determination of Materiality of Events and Information for Disclosure to The Stock Exchange", filename: "materiality_disclosure_policy.pdf" },
    { name: "Nomination and Remuneration Policy", filename: "nomination_remuneration_policy.pdf" },
    { name: "Criteria for Making Payments to Non-Executive Directors", filename: "non_executive_directors_payment_criteria.pdf" },
    { name: "Code of Conduct for Directors and Senior Management Executives", filename: "directors_senior_management_code.pdf" },
    { name: "Familiarization Programme for Independent Directors", filename: "independent_directors_familiarization.pdf" },
    { name: "Corporate Social Responsibility Policy", filename: "csr_policy.pdf" },
    { name: "Policy for Determining Material Subsidiaries", filename: "material_subsidiaries_policy.pdf" }
  ];

  const handleDownload = (filename, policyName) => {
    // Simulate download - in real implementation, this would trigger actual file download
    console.log(`Downloading: ${filename}`);
    // You can implement actual download logic here
    alert(`Download initiated for: ${policyName}`);
  };

  // Split policies into two columns
  const midPoint = Math.ceil(policies.length / 2);
  const leftColumn = policies.slice(0, midPoint);
  const rightColumn = policies.slice(midPoint);

  const PolicyRow = ({ policy }) => (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
      <div className="flex items-center space-x-3">
        <FileText className="w-5 h-5 text-gray-600" />
        <span className="text-gray-800 font-medium text-sm leading-relaxed">
          {policy.name}
        </span>
      </div>
      <button
        onClick={() => handleDownload(policy.filename, policy.name)}
        className="flex items-center space-x-2 px-3 py-2 bg-orange-600 text-white rounded-md hover:bg-black-700 transition-colors duration-200 text-sm font-medium"
      >
        <Download className="w-4 h-4" />
        <span>Download</span>
      </button>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Policies</h1>
      
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-4">
          {leftColumn.map((policy, index) => (
            <PolicyRow key={`left-${index}`} policy={policy} />
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {rightColumn.map((policy, index) => (
            <PolicyRow key={`right-${index}`} policy={policy} />
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default PoliciesTable;