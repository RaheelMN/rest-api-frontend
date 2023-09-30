import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:8000/api/v1/";

const SkillContext = createContext();

export const SkillProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    slug: "",
  });
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState([]);
  const [isData, setIsData] = useState(true);
  const [errors, setErrors] = useState({
    name: "",
    slug: "",
  });
  const navigate = useNavigate();

  const resetForm = () => {
    setFormValues({ name: "", slug: "" });
    setErrors({ name: "", slug: "" });
  };

  const setForm = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setErrors({ ...errors, name: "" });
    }
    if (name === "slug") {
      setErrors({ ...errors, slug: "" });
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const storeSkill = (e) => {
    e.preventDefault();
    const storeSkillAPI = async () => {
      try {
        const response = await axios.post("skills", formValues);
        toast.success(response.data);
        setFormValues({ name: "", slug: "" });
        getSkills();
        navigate("/skills");
      } catch (error) {
        if (error.response.status == 422) {
          setErrors(error.response.data.errors);
        }
      }
    };
    storeSkillAPI();
  };

  const getSkills = () => {
    const getSkillsAPI = async () => {
      try {
        const response = await axios.get("skills");
        if (response.data.data.length > 0) {
          setSkills(response.data.data);
        } else {
          setIsData(false);
        }
      } catch (error) {
        if (error.response.status == 422) {
          console.log(error.response.data.errors);
        }
      }
    };
    getSkillsAPI();
  };

  const getSkill = (id) => {
    const getSkillAPI = async () => {
      try {
        const response = await axios.get(`skills/${id}`);
        const data = response.data.data;
        setSkill(data);
        setFormValues({
          name: data.name,
          slug: data.slug,
        });
      } catch (error) {
        if (error.response.status == 422) {
          setErrors(error.response.data.errors);
        }
      }
    };
    getSkillAPI();
  };

  const skillDelete = (id) => {
    const skillDeleteAPI = async () => {
      try {
        const response = await axios.delete(`skills/${id}`);
        toast.success(response.data);
        getSkills();
      } catch (error) {
        if (error.response.status == 422) {
          console.log(error.response.data.errors);
        }
      }
    };
    skillDeleteAPI();
  };

  const updateSkill = (e) => {
    e.preventDefault();
    const updateSkillAPI = async () => {
      try {
        const response = await axios.put(`skills/${skill.id}`, formValues);
        toast.success(response.data);
        getSkills();
        navigate("/skills");
      } catch (error) {
        if (error.response.status == 422) {
          setErrors(error.response.data.errors);
        }
      }
    };
    updateSkillAPI();
  };

  return (
    <SkillContext.Provider
      value={{
        getSkills,
        resetForm,
        setForm,
        storeSkill,
        skillDelete,
        getSkill,
        updateSkill,
        setSkill,
        skill,
        skills,
        isData,
        formValues,
        errors,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};

export default SkillContext;
