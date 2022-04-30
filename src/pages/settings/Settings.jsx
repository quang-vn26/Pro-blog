import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Cập nhật tài khoản </span>
          <span className="settingsTitleDelete">Xóa tài khoản</span>
        </div>
        <form className="settingsForm">
          <label>Ảnh đại diện</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Tên</label>
          <input type="text" placeholder="Nhất" name="name" />
          <label>Email</label>
          <input type="email" placeholder="pvnhat@gmail.com" name="email" />
          <label>Mật khẩu</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Cập nhật
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
