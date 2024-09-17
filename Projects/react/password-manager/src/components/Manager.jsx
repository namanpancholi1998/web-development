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

  const handleSiteClick = (siteName) => {
    let site = `https://${siteName}.com`;

    window.open(site, "_blank");
  };

  return (
    <>
      {/* background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

      {/* form */}
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
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setShowPassword(false);
                    }}
                  />
                </span>
              ) : (
                <span className="absolute right-4 top-1/2 -translate-y-1/2">
                  <FaEyeSlash
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setShowPassword(true);
                    }}
                  />
                </span>
              )}
            </div>
          </div>

          {/* Add Password */}
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

          {/* Password Table */}
          <div className="">
            <h2 className="mb-4 font-bold text-2xl py-4">Your Passwords</h2>
            {passwordArray.length === 0 ? (
              <div>No Passwords Found</div>
            ) : (
              <table className="table-auto w-full rounded-md overflow-hidden">
                <thead className="text-center bg-sky-700 text-white ">
                  <tr>
                    <th className="py-3">Site Name</th>
                    <th className="py-3">Email</th>
                    <th className="py-3">Password</th>
                  </tr>
                </thead>
                <tbody className="bg-blue-200">
                  {passwordArray.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td className="py-2 text-center">
                          <a
                            href="#"
                            onClick={() =>
                              handleSiteClick(item.siteName.trim())
                            }
                          >
                            {item.siteName}
                          </a>
                        </td>
                        <td className="py-2 text-center">{item.email}</td>
                        <td className="py-2 text-center">{item.password}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Manager;
