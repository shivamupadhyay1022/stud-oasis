import React, {useState} from "react";
import Overview from "../components/StudentProfile/Overview";
import ClassTracking from "../components/StudentProfile/ClassTracking";
import TestRecords from "../components/StudentProfile/TestRecords";
import FeeDetails from "../components/StudentProfile/FeeDetails";
import Attendance from "../components/StudentProfile/Attendance";

const StudentProfile = () => {
  const student = {
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+1 234 567 8900",
    grade: "10th Grade",
    parent: {
      name: "John Johnson",
      occupation: "Business Analyst",
      contact: "+1 234 567 8901",
    },
  };

  const [activeTab, setActiveTab] = useState("Overview");

  // State to track if editing mode is enabled
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested object update for parent details
    if (name.startsWith("parent.")) {
      setStudent((prev) => ({
        ...prev,
        parent: { ...prev.parent, [name.split(".")[1]]: value },
      }));
    } else {
      setStudent((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Function to handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsEditing(false); // Disable editing mode when switching tabs
  };

  return (  
    <div className="p-6 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">{student.name}</h1>
          <p className="text-gray-500">Student Profile</p>
        </div>
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Save" : "Edit Profile"}
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 border-b px-4 mb-4 bg-gray-200 py-2 rounded-lg text-gray-600">
        {["Overview", "Class Tracking", "Test Records", "Fee Details", "Attendance"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`pb-1 ${
              activeTab === tab ? "font-semibold border-b-2 border-indigo-500" : "hover:text-indigo-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Render Content Based on Active Tab */}
      {activeTab === "Overview" && <Overview student={student} isEditing={isEditing} handleChange={handleChange} />}
      {activeTab === "Class Tracking" && <ClassTracking />}
      {activeTab === "Test Records" && <TestRecords />}
      {activeTab === "Fee Details" && <FeeDetails />}
      {activeTab === "Attendance" && <Attendance />}
    </div>
  );
};

export default StudentProfile;
