import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

export function Detail() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    const result = blogs.find((item) => item.id === parseInt(id));
    setTitle(result.title);
    setImage(result.image_url);
    setContent(result.content);
    setAuthor(result.author);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <h2>detail blog : {title}</h2>
      <img src={image} alt={title} className="blogs-image" />
      <div className="blog-detail">
        <strong>author : {author}</strong>
        <p>{content}</p>
      </div>
    </div>
  );
}
