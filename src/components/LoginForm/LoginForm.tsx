import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginForm(){
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const navigate = useNavigate();
      const {isLoggedIn, login} = useAuth();
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    
        const postData = new FormData();
        postData.append('email', formData.email);
        postData.append('message', formData.password);
    
        // console.log(postData);

        login();
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      );
    };