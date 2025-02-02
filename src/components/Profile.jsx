import React from "react";

const Profile = () => {
  return (
    <>
    <div className="flex flex-col items-start m-3 justify-center">
      <div className="p-2">
        <label>Enter First Name : </label>
        <input className="border border-gray-500 p-1 rounded-lg bg-gray-300 w-45" type="text" name="first_name" id="first_name" />
      </div>
      <div className="p-2">
        <label>Enter Last Name : </label>
        <input className="border border-gray-500 p-1 rounded-lg bg-gray-300 w-45" type="text" name="last_name" id="last_name" />
      </div>
      <div className="p-2">
        <label>Enter Email : </label>
        <input className="border border-gray-500 p-1 rounded-lg bg-gray-300 w-45" type="mail" name="mail" id="mail" />
      </div>
      <div className="p-2">
        <label>Enter Phone : </label>
        <input className="border border-gray-500 p-1 rounded-lg bg-gray-300 w-45" type="number" name="number" id="number" />
      </div>
    </div>
    </>
  );
};

export default Profile;
