import React,{useState} from 'react'
import { supabase } from '../supabase';

function StudentCard({ details }) {
   
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-4 w-full max-w-md">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div>
            <h3 className="font-semibold text-lg">{details.name}</h3>
            <p className="text-gray-500 text-sm">{details.email}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <p className="text-gray-500 text-sm">Class</p>
          <p className="font-medium">{details.class}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">School</p>
          <p className="font-medium">{details.school}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Board</p>
          <p className="font-medium">{details.board}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Fee Status</p>
          <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2 py-1 rounded-md">
            {details.fee_status}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button className="flex items-center space-x-2 rounded-md px-3 py-2 text-gray-700 border border-gray-300 hover:bg-gray-100 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8h5M7 16h6" />
          </svg>
          <span>Message</span>
        </button>
        <button className="bg-indigo-400 hover:bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md transition duration-200">
          View Details
        </button>
      </div>
    </div>
  )
}

export default StudentCard