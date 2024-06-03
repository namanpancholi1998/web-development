import React, { useEffect } from "react";

function NavBar({ color }) {
  useEffect(() => {
    alert(`Color was changed ${color}`);
  }, [color]);
  //Example of Cleanup
  useEffect(() => {
    alert("This is the first render of this navbar component was mounted");

    return () => {
      alert("This is the last render of this navbar component was unmounted");
    };
  }, []);

  return <div>Nav Bar of {color} </div>;
}

export default NavBar;
