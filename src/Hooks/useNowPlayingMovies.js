import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    console.log(json.results);
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return { getNowPlayingMovies };
};
export default useNowPlayingMovies;
