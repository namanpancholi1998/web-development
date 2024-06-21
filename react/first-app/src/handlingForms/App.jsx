import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
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
    await delay(5);
    console.log(data);
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
        </form>
      </div>
    </>
  );
}

/*
    In this we are using useForm from react-hook-form

*/
