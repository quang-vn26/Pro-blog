import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <span className="sidebarTitle">ABOUT ME</span>
      <img
        className="sidebarImg"
        src={require("../images/nhat.jpg")}
        alt="avatar"
      />
      <div className="sidebarItem">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          nostrum totam voluptatem accusantium, libero consectetur quos ab et,
          atque dolore, modi laboriosam labore explicabo nesciunt quas unde
          eveniet esse quisquam.
        </p>
        <span className="sidebarTitle">TỪ KHÓA</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Nền tảng</li>
          <li className="sidebarListItem">Defi</li>
          <li className="sidebarListItem">NFT</li>
          <li className="sidebarListItem">Ví</li>
          <li className="sidebarListItem">Phân tích cơ bản</li>
          <li className="sidebarListItem">Phân tích kỹ thuật</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span>FOLLOW ME</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com/">
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
}
