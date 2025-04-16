import axios from "axios";
import Swal from 'sweetalert2'

export const onLogin = async (email, password) => {
  try {
      const requestBody = { email, password };
      console.log(requestBody)
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/login`, requestBody, {
        withCredentials: true // This enables sending cookies and credentials
    });
      localStorage.setItem('access_token', response.data.access_token);
  } catch (error) {
      console.error(error);
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message
      });
  }
};

export const onRegister = async (email, password, phoneNuber, role) => {
  try {
      const requestBody = { email, password, phoneNuber, role };
      console.log(requestBody)
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/register`, requestBody, {
        withCredentials: true
    });
  } catch (error) {
  }
};

export const onUpdate = async (fullname, email, phoneNumber, skills, hobbies) => {
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
};