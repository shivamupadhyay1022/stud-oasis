import React from 'react'

function Overview({ student, isEditing, handleChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Personal Info */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/50" // Replace with actual image URL
            alt="Profile"
            className="w-16 h-16 rounded-full border"
          />
          <div>
            {isEditing ? (
              <input
                type="text"
                name="email"
                value={student.email}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
            ) : (
              <p className="text-gray-700">{student.email}</p>
            )}

            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={student.phone}
                onChange={handleChange}
                className="border p-1 rounded w-full mt-1"
              />
            ) : (
              <p className="text-gray-700">{student.phone}</p>
            )}

            {isEditing ? (
              <input
                type="text"
                name="grade"
                value={student.grade}
                onChange={handleChange}
                className="border p-1 rounded w-full mt-1"
              />
            ) : (
              <p className="text-gray-700">{student.grade}</p>
            )}
          </div>
        </div>
      </div>

      {/* Parent Info */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Parent's Information</h2>
        <p>
          <span className="font-medium">Father's Name: </span>
          {isEditing ? (
            <input
              type="text"
              name="parent.name"
              value={student.parent.name}
              onChange={handleChange}
              className="border p-1 rounded w-full"
            />
          ) : (
            student.parent.name
          )}
        </p>
        <p>
          <span className="font-medium">Occupation: </span>
          {isEditing ? (
            <input
              type="text"
              name="parent.occupation"
              value={student.parent.occupation}
              onChange={handleChange}
              className="border p-1 rounded w-full"
            />
          ) : (
            student.parent.occupation
          )}
        </p>
        <p>
          <span className="font-medium">Contact: </span>
          {isEditing ? (
            <input
              type="text"
              name="parent.contact"
              value={student.parent.contact}
              onChange={handleChange}
              className="border p-1 rounded w-full"
            />
          ) : (
            student.parent.contact
          )}
        </p>
      </div>
    </div>
  )
}

export default Overview