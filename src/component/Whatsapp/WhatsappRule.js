import React from 'react';
import { useSelector } from 'react-redux'; // For sidebar state management
import { Link } from 'react-router-dom';

const WhatsappRule = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen); // Manage sidebar state
  const marginLeft = isOpen ? 'ml-52' : 'ml-12'; // Adjust content margin based on sidebar state
  const marginTop = isOpen ? 'mt-[-36.8rem]' : 'mt-[-36rem]';

  return (
    <div className={`pt-8 px-6 shadow-md transition-all duration-300 ${marginLeft} ${marginTop}`}>
      {/* WhatsApp Rule Header */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-semibold mb-4">WhatsApp Rule</h1>

        {/* WhatsApp Rule Table */}
        <div className="overflow-x-auto text-center">
          <table className="min-w-full table-auto border-collapse">
            <thead className='bg-[#637D9B]'>
              <tr>
                <th className="px-4 py-2 border">Sr.</th>
                <th className="px-4 py-2 border">Code</th>
                <th className="px-4 py-2 border">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">1.</td>
                <td className="px-4 py-2 border">!!!!</td>
                <td className="px-4 py-2 border">Name From The Lead</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">2.</td>
                <td className="px-4 py-2 border">@@@@</td>
                <td className="px-4 py-2 border">Name Of The User Who Is Sending Message</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">3.</td>
                <td className="px-4 py-2 border">######</td>
                <td className="px-4 py-2 border">Phone No. Of The Sender</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">4.</td>
                <td className="px-4 py-2 border">*Text*</td>
                <td className="px-4 py-2 border">To Bold The Text</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">5.</td>
                <td className="px-4 py-2 border">_Text_</td>
                <td className="px-4 py-2 border">To Italicize The Text</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">6.</td>
                <td className="px-4 py-2 border">~Text~</td>
                <td className="px-4 py-2 border">To Strikethrough Your Message</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Create Form Button */}
        <Link to='/whatsapp_form'>
        <div className="flex justify-end mt-4">
          <button className="bg-[#637D9B] text-white px-4 py-2 rounded-lg">Create Form</button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default WhatsappRule;
