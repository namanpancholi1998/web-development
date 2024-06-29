import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };
  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let rs = await r.text();
    console.log(data, rs);

    // await delay(5); // simulate network delay
    // if (data.username !== "Naman") {
    //   setError("username", {
    //     type: "manual",
    //     message: "This username is Invalid",
    //   });
    // }
    // console.log(data);
  };

  return (
    <>
      {isSubmitting && <p>Loading...</p>}
      <div>
        <h1>Handling Forms in react</h1>
      </div>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: {
                value: true,
                message: "This field is required",
              },
              minLength: {
                value: 3,
                message: "Minimum length should be 3",
              },
              maxLength: {
                value: 10,
                message: "Maximum length should be 10",
              },
            })}
            type="text"
            placeholder="Enter your username"
          />
          {errors.username && (
            <span className="text-red-600">{errors.username.message}</span>
          )}
          <br />
          <input
            {...register("password", {
              required: {
                value: true,
                message: "This field is required",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Minimum eight characters, at least one letter and one number",
              },
            })}
            type="text"
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
          <br />
          <input type="submit" value="submit" disabled={isSubmitting} />
          {errors.myForm && (
            <span className="text-red-600">{errors.myForm.message}</span>
          )}
        </form>
      </div>
    </>
  );
}

/*
    In this we are using useForm from react-hook-form

*/
