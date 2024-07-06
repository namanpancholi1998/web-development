"use server";
import fs from "fs/promises";

export const submitAction = async (e) => {
  console.log(e.get("name"), e.get("email"));
  let a = await fs.writeFile(
    "formData.txt",
    `Name is ${e.get("name")} and Email is ${e.get("email")}`
  );
  console.log(a);
};
