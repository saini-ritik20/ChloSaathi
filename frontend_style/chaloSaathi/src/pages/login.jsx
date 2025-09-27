
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";
import bgImage from "../assets/bg_image_login.png";
import appleLogo from "../assets/apple_logo.png";
import logo from "../assets/logo.png";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
// import dashboard from "./Dasboard";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle normal login form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/save-login/", {
        username: email, // Django expects username field
        password: password,
      });

      if (response.data.success) {
        localStorage.setItem("user", email);
        navigate("/dashboard");
      }

      alert(response.data.message);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login error:", error);
      alert("Error saving login data");
    }
  };

  // Handle Google Login
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const userInfo = jwtDecode(credentialResponse.credential);
      console.log("Google User:", userInfo);

      // ✅ Send Google token or email to Django backend for verification
      const response = await axios.post("http://127.0.0.1:8000/api/google-login/", {
        token: credentialResponse.credential,
        email: userInfo.email,
        name: userInfo.name,
      });

      // Normal login
        // if (response.data.success) {
        //   localStorage.setItem("user", email);
        //   navigate("/dashboard"); // ✅ redirect to root
        // }

        // Google login
        if (response.data.success) {
          localStorage.setItem("user", JSON.stringify(userInfo));
          navigate("/dashboard"); // ✅ redirect to root
            }
        else {
            alert("Google login failed on backend");
          }
        } 
        catch (error) {
          console.error("Google login error:", error);
          alert("Google Login Failed!");
        }
  };

  return (
    <LoginWrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Container
        as={motion.div}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <FormBox
          as={motion.div}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={logo}
            alt="LogoImage"
            width={80}
            height={80}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          />
          <h2>Login to your Account</h2>
          <p className="description">
            Get started with our app, just create an account and enjoy the experience.
          </p>

          {/* Normal login form */}
          <Form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="name@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="buttons">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="login"
              >
                Login
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="signin"
                onClick={() => navigate("/register")}
              >
                Sign In
              </motion.button>
            </div>

            <Separator>
              <hr />
              <span>Or</span>
              <hr />
            </Separator>

            {/* ✅ Google Login */}
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => {
                alert("Google Login Failed!");
              }}
            />

            <motion.button whileHover={{ scale: 1.03 }} className="social apple">
              <img src={appleLogo} alt="apple" />
              Sign In with Apple
            </motion.button>
          </Form>

          <p className="terms">Terms of use & Conditions</p>
        </FormBox>
      </Container>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${bgImage}) no-repeat center center/cover;
  min-height: 100vh;
  padding: 40px 20px;
`;

const Container = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 30px 40px;
  border-radius: 16px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    margin-top: 10px;
    font-size: 1.5rem;
  }

  .description {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 30px;
  }

  .terms {
    margin-top: 20px;
    font-size: 0.75rem;
    color: #888;
    text-decoration: underline;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-size: 0.85rem;
    text-align: left;
    color: #444;
  }

  input {
    height: 38px;
    padding: 0 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    outline: none;

    &:focus {
      border-color: #267bff;
    }
  }

  .buttons {
    display: flex;
    gap: 10px;
    margin: 10px 0;

    button {
      flex: 1;
      height: 38px;
      border-radius: 6px;
      border: none;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }

    .login {
      background: #267bff;
    }

    .signin {
      background: #154ec1;
    }
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 38px;
    width: 100%;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-weight: 500;
    cursor: pointer;

    img {
      height: 18px;
      width: 18px;
    }
  }

  .apple {
    background: #000;
    color: #fff;
    margin-top: 10px;
  }
`;

const Separator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;

  hr {
    flex: 1;
    border: 0;
    border-top: 1px solid #ddd;
  }

  span {
    font-size: 0.8rem;
    color: #999;
  }
`;

export default Login;
