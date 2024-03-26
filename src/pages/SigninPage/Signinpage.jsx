import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import styles from "./signinpage.module.css";
import axios from "../../utils/AxiosInstance";
import toast, { Toaster } from "react-hot-toast";

function SignInPage() {
  const initialValues = [
    {
      username: "",
      email: "",
    },
  ];

  const [signinValues, setsigninValues] = useState(initialValues);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
  
      const response = await axios.post("/api/commonregister", {
        username: signinValues.userName,
        email: signinValues.email,
      });
      console.log("Registration successful:", response.data);

      toast.success("Please check for OTP in your mail", {
        duration: 3000,
        style: {
          borderRadius: "10px",
          color: "#000",
        },
      });

      const userEmail = response.data.data;
     
      localStorage.setItem("userEmail",userEmail)

      setsigninValues(initialValues);
     

      navigate("/login");
    } catch (error) {

      toast.error("Access denied", {
        duration: 3000,
        style: {
          borderRadius: "10px",
          background: "#e24242",
          color: "#fff",
        },
      });
      console.error("Registration error:", error);
      console.log("Response:", error.response);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsigninValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    console.log(signinValues);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.mainbody}>
        <div className={styles.container}>
          <div className={styles.img}>
            <div className={styles.formbox}>
              <form onSubmit={handleSubmit}>
              <div className={styles.form}>
                <h2>Register</h2>
                <div className={styles.inputbox}>
                  <input
                   type="text" 
                   name="username"
                   value={signinValues.username}
                    required 
                    onChange={handleChange}
                    />
                  <label for="">Username</label>
                </div>
                <div className={styles.inputbox}>
                  <input
                   type="text"
                   name="email"
                   value={signinValues.email}
                   onChange={handleChange}
                    required />
                  <label for="">Email</label>
                </div>
                <div className={styles.links}>
                  <a onClick={() => navigate("/login")} href="">
                    Already a user ?
                  </a>
                </div>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                    alignItems: "center",
                    marginTop: "10%",
                    "& > *": {
                      m: 1,
                    },
                  }}
                >
                  <Button
                   type="submit"
                    variant="outlined"
                    sx={{ color: "white", border: "1px solid" }}
                  >
                    Sign Up
                  </Button>
                </Box>
              </div>
              </form>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
}
export default SignInPage;
