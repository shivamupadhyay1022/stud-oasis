import React, { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";
import Navbar from "../components/Navbar";
import { supabase } from "../supabase";
import { toast } from "react-toastify";
function Students() {
  const [isAddingStudent, setIsAddingStudent] = useState(false);
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    school: "",
    board: "",
    father_name: "",
    parent_contact: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const { data, error } = await supabase
        .from("students")
        .insert([formData]);

      if (error) {
        throw error;
      } else {
        toast.success("Student added", {
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

      console.log("Student Added:", data);
      setIsAddingStudent(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        class: "",
        school: "",
        board: "",
        father_name: "",
        parent_contact: "",
      });
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const sampleStudents = [
    {
      id: 1,
      name: "Sushmita",
      email: "sushmitak1505@gmail.com",
      class: "10",
      school: "Chinmaya Vidyalaya",
      board: "CBSE",
      fee_status: "Pending",
    },
    {
      id: 2,
      name: "Rohan Sharma",
      email: "rohan.sharma@example.com",
      class: "12",
      school: "DPS Delhi",
      board: "CBSE",
      fee_status: "Paid",
    },
    {
      id: 3,
      name: "Aditi Verma",
      email: "aditi.verma@example.com",
      class: "9",
      school: "National Public School",
      board: "ICSE",
      fee_status: "Pending",
    },
    {
      id: 4,
      name: "Arjun Mehta",
      email: "arjun.mehta@example.com",
      class: "11",
      school: "St. Xavier's High School",
      board: "State Board",
      fee_status: "Paid",
    },
    {
      id: 5,
      name: "Neha Kapoor",
      email: "neha.kapoor@example.com",
      class: "8",
      school: "Amity International",
      board: "CBSE",
      fee_status: "Pending",
    },
  ];

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const { data, error } = await supabase.from("students").select("*");
    if (error) {
      console.error("Error fetching students:", error.message);
    } else {
      setStudents(data);
    }
  };
  return (
    <div className="">
      <div className="flex flex-col mx-4 md:mx-16 mt-10">
        <div className="flex flex-row justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Students</h1>
            <p className="mt-2 text-muted-foreground text-gray-400 font-semibold">
              Welcome back, here's your overview.
            </p>
          </div>
          <button
            onClick={() => setIsAddingStudent(true)}
            className="text-white bg-indigo-400 max-h-10 p-2 rounded-lg"
          >
            Add student
          </button>
        </div>
        {/* <div className="flex flex-wrap gap-4">
          {sampleStudents.length > 0 ? (
            sampleStudents.map((student) => (
              <StudentCard key={student.id} details={student} />
            ))
          ) : (
            <p>Loading students...</p>
          )}
        </div> */}
        <div className="flex flex-wrap gap-4">
          {students.length > 0 ? (
            students.map((student) => (
              <StudentCard key={student.id} details={student} />
            ))
          ) : (
            <p>Loading students...</p>
          )}
        </div>
      </div>
      {isAddingStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
          <div className="bg-white p-4 sm:p-6 rounded-lg w-[90%] max-w-sm sm:max-w-lg relative shadow-lg max-h-[90vh] overflow-y-auto">
            {/* Close Button (Cross Icon) */}
            <button
              onClick={() => setIsAddingStudent(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
            >
              ✖
            </button>

            <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">
              Add New Student
            </h2>

            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Full Name", name: "name", type: "text" },
                  { label: "Email", name: "email", type: "email" },
                  { label: "Phone", name: "phone", type: "text" },
                  { label: "Class", name: "class", type: "text" },
                  { label: "School", name: "school", type: "text" },
                  { label: "Board", name: "board", type: "text" },
                  { label: "Father's Name", name: "father_name", type: "text" },
                  {
                    label: "Parent Contact",
                    name: "parent_contact",
                    type: "text",
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsAddingStudent(false)}
                  className="px-4 py-2 border rounded w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded w-full sm:w-auto"
                  disabled={loading}
                >
                  {loading ? "Adding..." : "Add Student"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Students;
