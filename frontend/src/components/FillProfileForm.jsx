import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FillProfileForm = () => {
  const onUpdate = async (fullname, email, phoneNumber, skills, hobbies) => {
    try {
        const requestBody = { fullname, email, phoneNumber, skills, hobbies };
        console.log(requestBody);
        
        const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/users/profile`, requestBody, {
            withCredentials: true
        });
  
        return response.data; // Mengembalikan data respons jika diperlukan
    } catch (error) {
        console.error("Error updating profile:", error);
        throw error; // Melempar error agar bisa ditangani di tempat lain jika perlu
    }
  }
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [skills, setSkills] = useState([""]); // State untuk menyimpan skills
  const [hobbies, setHobbies] = useState([""]); // State untuk menyimpan hobbies

  const onSubmit = (data) => {
    const profileData = {
      ...data,
      skills: skills.filter((skill) => skill),
      hobbies: hobbies.filter((hobby) => hobby),
    };

    onUpdate(profileData)

    console.log("Data Diri:", profileData);
    navigate("/");
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const addSkill = () => {
    setSkills([...skills, ""]); // Tambahkan input kosong untuk skill baru
  };

  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills); // Hapus skill berdasarkan index
  };

  const handleHobbyChange = (index, value) => {
    const newHobbies = [...hobbies];
    newHobbies[index] = value;
    setHobbies(newHobbies);
  };

  const addHobby = () => {
    setHobbies([...hobbies, ""]); // Tambahkan input kosong untuk hobby baru
  };

  const removeHobby = (index) => {
    const newHobbies = hobbies.filter((_, i) => i !== index);
    setHobbies(newHobbies); // Hapus hobby berdasarkan index
  };

  return (
    <div className="fill-parent">
      <div className="fill-profile-container">
        <h1>Data Diri</h1>
        <form id="formDataDiri" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label htmlFor="fullname" className="label">
              Nama Lengkap
            </label>
            <div className="input-field">
              <input
                type="text"
                id="fullname"
                {...register("fullname", {
                  required: "Nama Lengkap is required",
                })}
                placeholder="Tulis nama lengkapmu disini"
              />
              {errors.fullname && (
                <p className="error">{errors.fullname.message}</p>
              )}
            </div>
          </div>

          <div className="input-wrapper">
            <label>Skills</label>
            {skills.map((skill, index) => (
              <div className="input-field" key={index}>
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  placeholder={`Skill ${index + 1}`}
                />
                {skills.length > 1 && ( // Show remove icon only if more than one skill
                  <span
                    className="material-symbols-outlined remove-icon"
                    onClick={() => removeSkill(index)}
                    title="Hapus Skill"
                  >
                    remove_circle
                  </span>
                )}
              </div>
            ))}
            <span
              className="material-symbols-outlined add-icon"
              onClick={addSkill}
              title="Tambah Skill"
            >
              add_circle
            </span>
          </div>

          <div className="input-wrapper">
            <label>Hobbies</label>
            {hobbies.map((hobby, index) => (
              <div className="input-field" key={index}>
                <input
                  type="text"
                  value={hobby}
                  onChange={(e) => handleHobbyChange(index, e.target.value)}
                  placeholder={`Hobby ${index + 1}`}
                />
                {hobbies.length > 1 && ( // Show remove icon only if more than one hobby
                  <span
                    className="material-symbols-outlined remove-icon"
                    onClick={() => removeHobby(index)}
                    title="Hapus Hobby"
                  >
                    remove_circle
                  </span>
                )}
              </div>
            ))}
            <span
              className="material-symbols-outlined add-icon"
              onClick={addHobby}
              title="Tambah Hobby"
            >
              add_circle
            </span>
          </div>

          <button type="submit" className="btn">
            Lanjut{" "}
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FillProfileForm;
