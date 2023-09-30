import { useParams } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import SkillContext from "../SkillContext";

export const SkillEdit = () => {
  const { getSkill, updateSkill, formValues, errors, setForm, resetForm } =
    useContext(SkillContext);

  const { id } = useParams();

  useEffect(() => {
    resetForm();
    getSkill(id);
  }, []);

  return (
    <>
      <div className="text-center text-red-950 font-bold ">Update Skill</div>
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
            onClick={updateSkill}
            className="bg-blue-500 hover:bg-blue-700 text-white text-md py-1 px-3 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
