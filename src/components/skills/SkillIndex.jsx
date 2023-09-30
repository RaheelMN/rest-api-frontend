import React, { useEffect, useContext } from "react";
import SkillContext from "../SkillContext";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

export const SkillIndex = () => {
  const { skills, getSkills, isData, skillDelete } = useContext(SkillContext);
  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div className="w-[80%] m-auto mt-10">
      <div className="relative overflow-x-auto">
        {isData ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  S.No
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  slur
                </th>
                <th scope="col" colSpan={2} className="px-6 py-3 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {skills.length > 0
                ? skills.map((skill, i) => (
                    <tr
                      key={skill.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {i + 1}
                      </th>
                      <td className="px-6 py-4">{skill.name}</td>
                      <td className="px-6 py-4">{skill.slug}</td>
                      <td className="px-6 py-4">
                        <Link to={`/skills/${skill.id}/edit`}>
                          <FiEdit className="text-blue-700 text-lg cursor-pointer" />
                        </Link>
                      </td>
                      <td
                        onClick={() => skillDelete(skill.id)}
                        className="px-6 py-4"
                      >
                        <AiFillDelete className="text-red-700 text-xl cursor-pointer" />
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        ) : (
          <div className="text-center">No data</div>
        )}
      </div>
    </div>
  );
};
