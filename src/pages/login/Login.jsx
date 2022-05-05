import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Đăng Nhập</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Nhập email.." />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="nhập mật khẩu..."
        />
        <button className="loginButton">Đăng nhập</button>
      </form>
      <button className="loginRegisterButton">Đăng kí</button>
    </div>
  );
}
