import React, { useEffect, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../supabase";
import { toast } from "react-toastify";

function Overview() {
  const [isEditing, setIsEditing] = useState(false);
  const [student, setStudent] = useState("");
  const { id } = useParams();

  useLayoutEffect(() => {
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested object update for parent details

    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const updateStudentInDB = async (field, value) => {
    try {
      const { error } = await supabase
        .from("students")
        .update(student)
        .eq("id", id);

      toast.success("Profile Updated", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsEditing(false);
    } catch (error) {
      toast.error("Update Failed " + error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  async function fetchStudent() {
    try {
      const { data, error } = await supabase
        .from("students")
        .select("*")
        .eq("id", id);
      // console.log(data[0]);
      setStudent(data[0]);
    } catch (error) {
      toast.error("Error" + error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md "
          onClick={() => {
            isEditing ? updateStudentInDB() : setIsEditing(!isEditing);
          }}
        >
          {isEditing ? "Save" : "Edit Profile"}
        </button>
      </div>

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
                  value={student.name}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                />
              ) : (
                <p className="text-gray-700">{student.name}</p>
              )}

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

        {/* parent? Info */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Parent's Information</h2>
          <p>
            <span className="font-medium">Father's Name: </span>
            {isEditing ? (
              <input
                type="text"
                name="father_name"
                value={student.father_name}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
            ) : (
              student.father_name
            )}
          </p>
          {/* <p>
          <span className="font-medium">Occupation: </span>
          {isEditing ? (
            <input
              type="text"
              name="parent?.occupation"
              value={student.parent?.occupation}
              onChange={handleChange}
              className="border p-1 rounded w-full"
            />
          ) : (
            student.parent?.occupation
          )}
        </p> */}
          <p>
            <span className="font-medium">Contact: </span>
            {isEditing ? (
              <input
                type="text"
                name="parent_contact"
                value={student.parent_contact}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
            ) : (
              student.parent_contact
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
