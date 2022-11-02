import React from "react";
import avatar from "../image/avat.jpeg";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Онлайн чат</span>
        <span className="title">Регистрация</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={avatar} alt="Avatar" />
            <span>Загрузите вашу аватарку</span>
          </label>
          <button>Зарегистрироваться </button>
        </form>
        <p>У вас уже есть аккаунт ? Войти</p>
      </div>
    </div>
  );
};

export default Register;
