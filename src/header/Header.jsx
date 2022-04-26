import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">HIDDEN GEM</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img className="headerImg" src={require("../images/hidengem.png")} alt="" />
    </div>
  );
}
