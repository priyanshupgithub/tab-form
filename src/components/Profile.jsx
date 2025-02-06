import React from "react";

const Profile = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  age,
  setAge,
  mail,
  setMail,
  number,
  setNumber,
  error,
}) => {
  return (
    <div className="flex flex-col items-start m-3 justify-center">
      <div className="p-2">
        <label>Enter First Name: </label>
        <input
          className="border border-gray-500 p-1 rounded-lg bg-gray-300 w-45"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {error.firstName && (
          <span className="text-red-500 text-sm">{error.firstName}</span>
        )}
      </div>

      <div className="p-2">
        <label>Enter Last Name: </label>
        <input
          className="border border-gray-500 p-1 rounded-lg bg-gray-300 w-45"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {error.lastName && (
          <span className="text-red-500 text-sm">{error.lastName}</span>
        )}
      </div>

      <div className="p-2">
        <label>Enter Email: </label>
        <input
          className="border border-gray-500 p-1 rounded-lg bg-gray-300 w-45"
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        {error.mail && (
          <span className="text-red-500 text-sm">{error.mail}</span>
        )}
      </div>

      <div className="p-2">
        <label>Enter Age: </label>
        <input
          className="border border-gray-500 p-1 rounded-lg bg-gray-300 w-45"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {error.age && <span className="text-red-500 text-sm">{error.age}</span>}
      </div>

      <div className="p-2">
        <label>Enter Phone: </label>
        <input
          className="border border-gray-500 p-1 rounded-lg bg-gray-300 w-45"
          type="text"
          maxLength="10"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        {error.number && (
          <span className="text-red-500 text-sm">{error.number}</span>
        )}
      </div>
    </div>
  );
};

export default Profile;
