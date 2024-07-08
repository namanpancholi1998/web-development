import React from "react";

function Manager() {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
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
            name=""
            id=""
            placeholder="Enter Site Name"
          />
          <div className="flex w-full gap-3">
            <input
              className="rounded-full border border-green-400 w-full px-4 py-1"
              type="text"
              name=""
              id=""
              placeholder="Enter Email"
            />
            <div className="relative w-full">
              <input
                className="rounded-full border border-green-400 w-full px-4 py-1"
                type="text"
                name=""
                id=""
                placeholder="Enter Password"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2">
                Show
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="flex justify-center items-center py-1 px-4  rounded-2xl w-fit bg-green-300 hover:bg-green-500 text-white gap-3">
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
              ></lord-icon>
              Add Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manager;
