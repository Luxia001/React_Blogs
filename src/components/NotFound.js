import "./NotFound.css";
import notFound from "../images/notFound.jpg";

export function NotFound() {
  return (
    <>
      <img src={notFound} alt="notfound" className="notFound-img" />
      <div className="notFound">
        <h3 className="text">Not found 404</h3>
      </div>
    </>
  );
}
