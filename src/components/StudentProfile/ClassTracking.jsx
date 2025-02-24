import React, { useState } from "react";

const subjects = [
  {
    name: "Physics",
    progress: 65,
    topics: [
      {
        name: "Mechanics",
        progress: 80,
        subtopics: [
          { name: "Kinematics", status: "completed" },
          { name: "Newton’s Laws", status: "ongoing" },
          { name: "Work & Energy", status: "pending" },
        ],
      },
      {
        name: "Thermodynamics",
        progress: 50,
        subtopics: [
          { name: "Laws of Thermodynamics", status: "ongoing" },
          { name: "Heat Transfer", status: "pending" },
        ],
      },
      {
        name: "Optics",
        progress: 30,
        subtopics: [
          { name: "Reflection & Refraction", status: "completed" },
          { name: "Lenses & Mirrors", status: "pending" },
        ],
      },
    ],
  },
];

const getProgressColor = (progress) => {
  if (progress >= 75) return "bg-green-500";
  if (progress >= 40) return "bg-yellow-400";
  return "bg-red-500";
};

const ClassTracking = ({ isEditing }) => {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const toggleTopic = (topicName) => {
    setExpandedTopic(expandedTopic === topicName ? null : topicName);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Class Tracking</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((subject, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{subject.name}</h3>
              <span className="text-gray-600 text-sm">{subject.progress}% Complete</span>
            </div>

            {/* Subject Topics */}
            <div className="space-y-2">
              {subject.topics.map((topic, tIndex) => (
                <div key={tIndex} className="bg-gray-100 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-3 text-gray-700 font-medium relative"
                    onClick={() => toggleTopic(topic.name)}
                  >
                    <span className="relative z-10">{topic.name}</span>

                    {/* Progress Bar Background */}
                    <div
                      className="absolute left-0 top-0 h-full opacity-30"
                      style={{
                        width: `${topic.progress}%`,
                        backgroundColor:
                          topic.progress >= 75 ? "green" :
                          topic.progress >= 40 ? "yellow" : "red"
                      }}
                    ></div>

                    <span className="relative z-10 text-sm text-gray-500">{topic.progress}%</span>
                  </button>

                  {/* Subtopics Dropdown */}
                  {expandedTopic === topic.name && (
                    <div className="p-4 bg-white rounded-b-lg transition-all duration-300 ease-in-out">
                      {topic.subtopics.map((sub, sIndex) => (
                        <div key={sIndex} className="flex justify-between items-center py-2">
                          {isEditing ? (
                            <input
                              type="text"
                              value={sub.name}
                              className="border p-1 rounded w-full"
                            />
                          ) : (
                            <span>{sub.name}</span>
                          )}

                          {/* Status Icons */}
                          <div className="flex space-x-3">
                            <button
                              className={`text-lg ${
                                sub.status === "completed" ? "text-green-500" : "text-gray-400"
                              }`}
                            >
                              {/* ✅ Completed */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                            </button>

                            <button
                              className={`text-lg ${
                                sub.status === "ongoing" ? "text-yellow-500" : "text-gray-400"
                              }`}
                            >
                              {/* ⏳ Ongoing */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                            </button>

                            <button
                              className={`text-lg ${
                                sub.status === "pending" ? "text-red-500" : "text-gray-400"
                              }`}
                            >
                              {/* ❌ Pending */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassTracking;
