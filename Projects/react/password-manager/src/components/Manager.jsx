import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Manager() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    siteName: "",
    email: "",
    password: "",
  });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);

    localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);

    setForm({
      siteName: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    if (form.siteName === "" && form.email === "" && form.password === "") {
      alert("Please fill out all the fields");
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl text-center ">Password Manager</h1>
        <p className="text-center text-lg text-green-500">
          Your own password manager{" "}
        </p>

        <div className="flex flex-col p-4 text-black gap-3">
          <input
            className="rounded-full border border-green-400 w-full px-4 py-1"
            type="text"
            name="siteName"
            id="siteName"
            value={form.siteName}
            placeholder="Enter Site Name"
            onChange={handleChange}
          />
          <div className="flex w-full gap-3">
            <input
              className="rounded-full border border-green-400 w-full px-4 py-1"
              type="email"
              name="email"
              id="email"
              value={form.email}
              placeholder="Enter Email"
              onChange={handleChange}
            />
            <div className="relative w-full">
              <input
                className="rounded-full border border-green-400 w-full px-4 py-1"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={form.password}
                placeholder="Enter Password"
                onChange={handleChange}
              />
              {showPassword ? (
                <span className="absolute right-4 top-1/2 -translate-y-1/2">
                  <FaEye
                    onClick={() => {
                      setShowPassword(false);
                    }}
                  />
                </span>
              ) : (
                <span className="absolute right-4 top-1/2 -translate-y-1/2">
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(true);
                    }}
                  />
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={savePassword}
              className="flex justify-center items-center py-1 px-4  rounded-2xl w-fit bg-green-300 hover:bg-green-500 text-white gap-3"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
              ></lord-icon>
              Add Password
            </button>
          </div>

          <div className="">
            <h2 className="mb-4">Your Passwords</h2>
            <table className="table-auto w-full">
              <thead className="text-center bg-green-700 text-white ">
                <tr>
                  <th>Site Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center w-32">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="text-center w-32">Malcolm Lockyer</td>
                  <td className="text-center w-32">1961</td>
                </tr>
                <tr>
                  <td className="text-center w-32">Witchy Woman</td>
                  <td className="text-center w-32">The Eagles</td>
                  <td className="text-center w-32">1972</td>
                </tr>
                <tr>
                  <td className="text-center w-32">Shining Star</td>
                  <td className="text-center w-32">Earth, Wind, and Fire</td>
                  <td className="text-center w-32">1975</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manager;
