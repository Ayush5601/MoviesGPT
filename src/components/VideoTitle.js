import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, id }) => {
  const navigate = useNavigate();

  const handleMoreInfoClick = (path) => {
    navigate(path);
  };
  return (
    <div className="w-[100%] aspect-video pt-[20%] px-6 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">
        {overview.substring(0, 150) + "..."}
      </p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-3 px-3 md:px-6 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button
          className="hidden md:inline-block mx-2  bg-gray-500 text-white p-3 px-6 text-xl bg-opacity-50 rounded-lg"
          onClick={() => handleMoreInfoClick("/details/" + id)}
        >
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
