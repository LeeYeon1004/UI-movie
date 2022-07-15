import "./trailer.css";

function Trailer(props) {
  return (
    <div className="container-trailer">
      <div className="video-trailer">
        <iframe
          src={props.url}
          frameborder="0"
          title="video"
          allowFullScreen="allofullscreen"
          width="100%"
          height="500px"
        ></iframe>
        <button onClick={props.handleClose} className="close-btn">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}

export default Trailer;
