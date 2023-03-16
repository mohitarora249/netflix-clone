import {
  TMDB_DISCOVER_MOVIE,
  TMDB_NETFLIX_ORIGINALS,
  TMDB_TOP_RATED,
  TMDB_TRENDING,
} from "@/constants/endpoints";
import request from "@/utils/request";
import { Movie } from "./types";

export const fetchTrendingList = (): Promise<Movie[]> => {
  return request
    .get(
      `${process.env.TMDB_BASE_URL}${TMDB_TRENDING}?api_key=${process.env.TMDB_API_KEY}`
    )
    .then((res) => res.data.results)
    .catch((_) => []);
};
export const fetchNetflixOriginals = (): Promise<Movie[]> => {
  return request
    .get(
      `${process.env.TMDB_BASE_URL}${TMDB_NETFLIX_ORIGINALS}?api_key=${process.env.TMDB_API_KEY}&with_networks=213`
    )
    .then((res) => res.data.results)
    .catch((_) => []);
};
export const fetchTopRated = (): Promise<Movie[]> => {
  return request
    .get(
      `${process.env.TMDB_BASE_URL}${TMDB_TOP_RATED}?api_key=${process.env.TMDB_API_KEY}&with_=`
    )
    .then((res) => res.data.results)
    .catch((_) => []);
};

export const fetchActionMovies = (): Promise<Movie[]> => {
  return request
    .get(
      `${process.env.TMDB_BASE_URL}${TMDB_DISCOVER_MOVIE}?api_key=${process.env.TMDB_API_KEY}&with_generes=28`
    )
    .then((res) => res.data.results)
    .catch((_) => []);
};
export const fetchComedyMovies = (): Promise<Movie[]> => {
  return request
    .get(
      `${process.env.TMDB_BASE_URL}${TMDB_DISCOVER_MOVIE}?api_key=${process.env.TMDB_API_KEY}&with_generes=35`
    )
    .then((res) => res.data.results)
    .catch((_) => []);
};
export const fetchHorrorMovies = (): Promise<Movie[]> => {
  return request
    .get(
      `${process.env.TMDB_BASE_URL}${TMDB_DISCOVER_MOVIE}?api_key=${process.env.TMDB_API_KEY}&with_generes=27`
    )
    .then((res) => res.data.results)
    .catch((_) => []);
};
export const fetchRomanceMovies = (): Promise<Movie[]> => {
  return request
    .get(
      `${process.env.TMDB_BASE_URL}${TMDB_DISCOVER_MOVIE}?api_key=${process.env.TMDB_API_KEY}&with_generes=10749`
    )
    .then((res) => res.data.results)
    .catch((_) => []);
};
export const fetchDocumentries = (): Promise<Movie[]> => {
  return request
    .get(
      `${process.env.TMDB_BASE_URL}${TMDB_DISCOVER_MOVIE}?api_key=${process.env.TMDB_API_KEY}&with_generes=99`
    )
    .then((res) => res.data.results)
    .catch((_) => []);
};
