// "use client";
// import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container ">
      I am Home page
      <Image
        width={200}
        height={200}
        className="mx-auto "
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
      {/* <h1>Server Component in Next.js </h1> */}
      {/* <p>count : {count}</p> */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
    </div>
  );
}

//  In this project we use Image, Link, And Script Tags
/*
  strategy
  The loading strategy of the script. There are four different strategies that can be used:

  beforeInteractive: Load before any Next.js code and before any page hydration occurs.
  afterInteractive: (default) Load early but after some hydration on the page occurs.
  lazyOnload: Load during browser idle time.
  worker: (experimental) Load in a web worker.
*/

/*
  By Default in next.js all pages are server components 

  If You want to use useState useEffect etc then you have to convert it to client components using this "use client" at the top of the page

  next.js is a full stack web development framework. in which we can create server and client components means we write code for frontend and backend at the same time.
*/
