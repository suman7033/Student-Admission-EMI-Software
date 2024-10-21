import React from 'react'

const AdmissionForm = () => {
  return (
    <div>
       <div className="mt-[-37.5rem] ml-60 p-8 bg-gray-100">

  {/* Form Content */}
  <div className="bg-white p-3 mb-3 rounded-lg shadow-md">
    
    {/* Personal Details Section */}
    <h3 className="text-xl font-semibold mb-1 mt-[-0.5rem] text-[#637D9B]">Personal Details</h3>
    <div className="grid grid-cols-4 gap-4">
      <div className="flex flex-col">
        <label className="font-semibold">Name *</label>
        <input type="text" placeholder="Enter Your Name..." className="border rounded-lg p-2" />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Number *</label>
        <input type="text" placeholder="Enter Mobile Number..." className="border rounded-lg p-2" />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Email id *</label>
        <input type="email" placeholder="Enter Email..." className="border rounded-lg p-2" />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Address *</label>
        <input type="text" placeholder="Enter Address..." className="border rounded-lg p-2" />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Gender *</label>
        <select className="border rounded-lg p-2">
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Branch *</label>
        <select className="border rounded-lg p-2">
          <option>Select Branch</option>
          {/* Add more branches here */}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Admission Date *</label>
        <input type="date" className="border rounded-lg p-2" />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Upload User Pic *</label>
        <input type="file" className="border rounded-lg p-2" />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Upload Aadhar Card *</label>
        <input type="file" className="border rounded-lg p-2" />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Upload Pan Card *</label>
        <input type="file" className="border rounded-lg p-2" />
      </div>
    </div>
   </div>
    {/* Courses & EMI Section */}
    <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-1 mt-[-0.5rem] text-[#637D9B]">Courses & EMI</h3>
    <div className="grid grid-cols-4 gap-4">
      <div className="flex flex-col">
        <label className="font-semibold">Course Name *</label>
        <input type="text" placeholder="Select Your Course Name..." className="border rounded-lg p-2" />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Course Price *</label>
        <input type="text" placeholder="Enter Course Price..." className="border rounded-lg p-2" />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Payment Type *</label>
        <select className="border rounded-lg p-2">
          <option>Select Payment Type</option>
          {/* Add more payment types here */}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Payment Mode *</label>
        <select className="border rounded-lg p-2">
          <option>Select Payment Mode</option>
          {/* Add more payment modes here */}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Down Payment *</label>
        <input type="text" placeholder="Enter Downpayment..." className="border rounded-lg p-2" />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">No. of EMI *</label>
        <input type="number" placeholder="Enter No. of EMI..." className="border rounded-lg p-2" />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Installment Amount *</label>
        <input type="text" placeholder="Enter Installment Amount..." className="border rounded-lg p-2" />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Installment Date *</label>
        <input type="date" className="border rounded-lg p-2" />
      </div>
    </div>

    {/* Submit Button */}
    <div className="flex justify-end mt-4">
      <button className="bg-[#637D9B] text-white px-6 py-2 rounded-md">Sent for approval</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default AdmissionForm
