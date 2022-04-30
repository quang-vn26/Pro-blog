// Jsx là sự kết hợp giữa js và các ngôn ngữ dạng dánh dâu văn bản xml(https://itnavi.com.vn/blog/jsx-la-gi)
import React from "react";
import "./topbar.css";
export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          {/* <li className="topListItem">WRITE</li> */}
          {/* <li className="topListItem">LOGOUT</li> */}
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src={require("../images/nhat.jpg")}
          alt="imgAvatar"
        />
        <i className="topSeachIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
