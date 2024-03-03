import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';
import styles from './signinpage.module.css'

 function SignInPage() {

  const navigate = useNavigate()
    return(
  <>
  <div class={styles.mainbody}>
    <div class={styles.container}>
      <div class={styles.img}>
        <div class={styles.formbox}>
          <div class={styles.form}>
            <h2>Register</h2>
            <div class={styles.inputbox}>
              <input type={styles.text} required />
              <label for="">Username</label>
            </div>
            <div class={styles.inputbox}>
              <input type="text" required />
              <label for="">Email</label>
            </div>
            <div class={styles.links}>
                <a onClick={() => navigate('/login')}href="" >Already a user ?</a>
               
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
                variant="outlined"
                sx={{ color: "white", border: "1px solid" }}
              >
                Sign Up
              </Button>
            </Box>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
    )
}
export default SignInPage