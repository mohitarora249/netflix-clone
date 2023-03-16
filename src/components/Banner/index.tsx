import { Movie } from "@/services/movies/types";
import { truncate } from "@utils/strings";

type Props = {
  movie: Movie;
};

const Banner = ({ movie }: Props) => {
  return (
    <div
      className="relative h-80 md:h-[448px] w-full px-2 md:p-6"
      style={{
        backgroundImage: `url("${process.env.TMDB_IMAGE_BASE_URL}${movie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <MovieDetails name={movie.name} desc={movie.overview} />
    </div>
  );
};

const MovieDetails = ({ name, desc }: { name: string; desc: string }) => {
  return (
    <div className="absolute bottom-10 w-full md:w-1/2 text-white space-y-1 md:space-y-2">
      <h1 className="text-xl md:text-5xl font-bold md:font-bolder">{name}</h1>
      <div>
        <button className="bg-gray-200 bg-opacity-20 font-semibold md:font-bold text-white py-2 px-4 rounded mr-4 hover:bg-white hover:text-black hover:transition-all	hover:ease-in hover:duration-150">
          Play
        </button>
        <button className="bg-gray-200 bg-opacity-20 font-semibold md:font-bold text-white py-2 px-4 rounded mr-4 hover:bg-white hover:text-black hover:transition-all	hover:ease-in hover:duration-150">
          My List
        </button>
      </div>
      <p className="font-bold">{truncate(desc, 150)}</p>
    </div>
  );
};

export default Banner;
