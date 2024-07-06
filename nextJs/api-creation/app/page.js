"use client";
import React from "react";
import { useRef } from "react";
import { submitAction } from "@/action/form";

export default function Home() {
  let ref = useRef(null);

  return (
    <div className=" w-2/3 mx-auto">
      <h1>Next.js Server Action routes DEMO</h1>
      <form
        ref={ref}
        action={(e) => {
          submitAction(e);
          ref.current.reset();
        }}
        className="w-1/2"
      >
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input className="" type="text" name="name" id="name" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input className="" type="email" name="email" id="email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input className="" type="password" name="password" id="password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

// "use client";

// export default function Home() {
//   const handleClick = async () => {
//     let data = {
//       name: "Naman Pancholi",
//       age: 23,
//       role: "fullstack developer",
//     };

//     let a = await fetch("/api/add", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     let res = await a.json();
//     console.log(res);
//   };

//   return (
//     <div>
//       <h1 className="text-xl font-bold">Next.js API routes DEMO</h1>

//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }
