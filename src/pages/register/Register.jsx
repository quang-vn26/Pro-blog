import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Đăng kí tài khoản</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Nhập username..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Nhập email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Nhập password..."
        />
        <button className="registerButton">Đăng kí</button>
      </form>
      <button className="registerLoginButton">Đăng nhập</button>
    </div>
  );
}
