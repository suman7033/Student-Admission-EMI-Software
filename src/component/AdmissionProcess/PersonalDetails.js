import React from 'react';
import { useSelector } from 'react-redux';
import GreenTick from "../../component/img/GreenTick.png";
import DocumentAttached from './DocumentAttached';
import EMIDetails from './EMIDetails';

const PersonalDetails = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const marginLeft = isOpen ? 'ml-60' : 'ml-20';
  const marginTop=isOpen ? "mt-[-35.2rem]":"mt-[-34.5rem]";

  return (
    <div className={`mr-4 ${marginLeft} ${marginTop}`}>
      {/* White container for Personal Details */}
      <div className="bg-white p-6 mb-4 rounded-lg shadow-md">
        <label className="text-xl font-semibold text- mb-4 mt-[-1rem] block">PERSONAL DETAILS</label>
        <div className="flex">
          {/* Left side - Profile image */}
          <div className="w-40">
            <img 
              className="rounded-full w-full h-auto" 
              src="https://s3-alpha-sig.figma.com/img/e8f8/cf4b/ec0dd1dfb676ae223bde1405a1eb8c63?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMRoAj5h5b4ks8fzr04E69ZbMYnPm~rLNAQe2JMRbRr0LdJxS7WTuD95XxCIOc2NWimY2raZM1dbucnD1Li8wsKd-FW4icuC0f5WdgDr0MpLZy9pIu8yRWMsIOmEtw54ZdabG2t4JPVKWqQCToQk7LuLcmxQ8kKqmMR4KsZ3mAz8eXpaHy83~zsV7ODUMhV0SZv4gPB2tewcgCs3dwz2rmX7XQRCwuSop0hXxqGNCZE54iFe8ZvJ4jpLkgb7o3Xu2X7CJ7vZXsbB73XdULOJVzMf8mwN-Napfi7Mv4Q~QDVPun9DpwbWB4hzUvyP9fkZN4YR6kpKNINu639TglQWYg__" 
              alt="Profile"
            />
          </div>

          {/* Right side - Personal details */}
          <div className="flex flex-wrap w-full justify-between ml-20">
            {/* Column 1 */}
            <div className="flex flex-col space-y-2 w-1/3">
              <label className="font-bold">Name</label>
              <span>Shikha</span>

              <label className="font-bold">Gender</label>
              <span>Female</span>

              <label className="font-bold">Counselor Name</label>
              <span>Priya</span>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-2 w-1/3">
              <label className="font-bold">Email</label>
              <span>Shikha@gmail.com</span>

              <label className="font-bold">Address</label>
              <span>Delhi</span>

              <label className="font-bold">Admission Approver Name</label>
              <div className="flex items-center">
                <span>Anjali</span>
                <img className="w-4 h-4 ml-2" src={GreenTick} alt="Green Tick"/>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-2 w-1/3">
              <label className="font-bold">Phone No</label>
              <span>7033020947</span>

              <label className="font-bold">Branch</label>
              <span>Delhi</span>

              <label className="font-bold">Admission Date</label>
              <span>22-09-2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Document Section */}
      <DocumentAttached/>
      <EMIDetails/>
    </div>
  );
};

export default PersonalDetails;
