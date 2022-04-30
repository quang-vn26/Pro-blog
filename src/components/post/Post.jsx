import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img
        src={require("../images/demo_img1.jpg")}
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Defi</span>
          <span className="postCat">Ví</span>
          <span className="postCat">Phân tích cơ bản</span>
        </div>
        <span className="postTitle">Tiêu đề bài viết</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ab
        ipsam eligendi quod incidunt in reprehenderit adipisci. Voluptatibus sed
        tenetur maiores eum consequatur sequi molestiae totam, eligendi
        perspiciatis, tempora accusamus! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Illo repudiandae incidunt est, dolorem perferendis
        corrupti deleniti sequi laborum facere vero praesentium voluptatem.
        Cupiditate exercitationem dicta voluptates omnis? Nisi, pariatur
        dignissimos.
      </p>
    </div>
  );
}
