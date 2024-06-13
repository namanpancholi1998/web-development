import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ email: "", phone: "" });
  const handleClick = (event) => {
    alert("Button Clicked");
  };

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    // const { name, value } = event.target;
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value,
    // }));
  }

  return (
    <div>
      <h1>Handling Events in React</h1>
      <div className="button">
        <button onClick={handleClick}>Click Me!</button>
      </div>

      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
