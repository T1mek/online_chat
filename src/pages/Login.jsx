import React from "react";


const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Онлайн чат</span>
        <span className="title">Регистрация</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <button>Войти </button>
        </form>
        <p>У вас уже есть аккаунт ? Зарегистрироваться</p>
      </div>
    </div>
  );
};

export default Login;
