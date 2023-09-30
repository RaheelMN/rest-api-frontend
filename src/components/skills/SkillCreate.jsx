import React, { useContext, useEffect } from "react";
import SkillContext from "../SkillContext";

export const SkillCreate = () => {
  const { setForm, formValues, storeSkill, errors, resetForm } =
    useContext(SkillContext);

  useEffect(() => {
    resetForm();
  }, []);
  return (
    <>
      <div className="text-center text-red-950 font-bold ">Add Skill</div>
      <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 text-sm font-medium block">
              Name
            </label>
            <input
              className="block border border-gray-300 text-gray-900 w-full p-2 rounded-md text-sm"
              onChange={setForm}
              type="text"
              name="name"
              id="name"
              value={formValues.name}
              placeholder="Enter Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="slug" className="mb-2 text-sm font-medium block">
              Slug
            </label>
            <input
              className="block border border-gray-300 text-gray-900 w-full p-2 rounded-md text-sm"
              onChange={setForm}
              type="text"
              name="slug"
              id="slug"
              value={formValues.slug}
              placeholder="Enter Slug"
            />
            {errors.slug && (
              <p className="text-red-500 text-sm mt-1">{errors.slug}</p>
            )}
          </div>
          <button
            onClick={storeSkill}
            className="bg-blue-500 hover:bg-blue-700 text-white text-md py-1 px-3 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
