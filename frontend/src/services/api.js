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