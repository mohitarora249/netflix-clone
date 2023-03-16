import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Movie } from "../../services/movies/types";

type Props = {
  title: string;
  fetchDataFn: () => Promise<Movie[]>;
  queryKey: string;
  tileVariant?: "verticle" | "horizontal";
};
const Carousel = ({
  title,
  fetchDataFn,
  queryKey,
  tileVariant = "horizontal",
}: Props) => {
  const { data } = useQuery({
    queryKey: [queryKey],
    queryFn: fetchDataFn,
  });
  const [heightWidthOfTile, posterKey]: [
    string,
    "poster_path" | "backdrop_path"
  ] =
    tileVariant === "verticle"
      ? ["h-64 w-44", "poster_path"]
      : ["h-36 w-60", "backdrop_path"];

  return (
    <div className="px-2 md:p-6 space-y-3">
      <h2 className="text-xl md:text-3xl font-bold md:font-bolder">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {data?.map(
          (movie) =>
            movie[posterKey] && (
              <div
                key={movie.id}
                className="rounded-md cursor-pointer hover:scale-110 hover:duration-150"
              >
                <div className={`relative max-h-full ${heightWidthOfTile}`}>
                  <Image
                    src={`${process.env.TMDB_IMAGE_BASE_URL}${movie[posterKey]}`}
                    alt={movie.name}
                    className="rounded-md"
                    fill
                  />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Carousel;
