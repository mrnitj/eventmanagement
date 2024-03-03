import React from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styles from './loginpage.module.css'

function LoginPage() {
  return (
    <div class={styles.mainbody} >
    <div class={styles.container}>
      <div class={styles.img}>
        <div class={styles.formbox}>
          <div class={styles.form}>
            <h2>Login</h2>
            <div class={styles.inputbox}>
              <input type="text" required />
              <label for="">Username</label>
            </div>
            <div class={styles.inputbox}>
              <input type="text" required />
              <label for="">Password</label>
            </div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "white",
                alignItems: "center",
                marginTop: "20%",
                "& > *": {
                  m: 1,
                },
              }}
            >
              <Button
                variant="outlined"
                sx={{ color: "white", border: "1px solid" }}
              >
                Login
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LoginPage