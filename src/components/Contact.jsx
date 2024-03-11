import React, { useState } from "react";
import { Element } from "react-scroll";
import emailjs from "emailjs-com";
import styled from "styled-components";
import CustomAlert from "./CustomAlert";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setAlert({
        show: true,
        message: "모든 창을 입력 후 전송해주세요",
        type: "error",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_0j4j98f",
        "template_gk5i1wh",
        e.target,
        "Luw565-Mnj1QPtP28"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setAlert({ show: true, message: "전송되었습니다", type: "success" });
        },
        (error) => {
          console.log(error.text);
          setAlert({
            show: true,
            message: "전송에 실패했습니다",
            type: "error",
          });
        }
      );
  };

  const closeAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <Element name='Section7' id='Section7'>
      <Section7>
        <h1>Contact Me</h1>
        <form onSubmit={sendEmail}>
          <div>
            <label htmlFor='name'>Your Name</label>
            <input
              type='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='subject'>Your Subject</label>
            <input
              type='text'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='message'>Your Message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>Send</button>
        </form>
        {alert.show && (
          <CustomAlert
            message={alert.message}
            type={alert.type}
            onClose={closeAlert}
          />
        )}
      </Section7>
    </Element>
  );
}

export default Contact;

const Section7 = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;

  h1 {
    font-size: 2rem;
    font-family: var(--title-font);
    color: #2e2e2e;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px;
  }

  div {
    width: 30%;
    max-width: 500px;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    label {
      font-size: 18px;
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      height: 20px;
      margin-bottom: 20px;
      padding: 10px;
    }

    textarea {
      width: 100%;
      height: 130px;
      padding: 10px;
      margin-bottom: 30px;
    }
  }

  button {
    width: 200px;
    height: 50px;
    background: #cc5454;
    font-size: 16px;
    color: white;
    margin-bottom: 100px;
    cursor: pointer;
  }
`;
