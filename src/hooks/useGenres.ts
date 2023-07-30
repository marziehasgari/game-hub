//LIBS
import { useQuery } from "@tanstack/react-query";

//SERVICES
import ApiClient from "../services/api-client";

//DATA
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24H
    initialData: genres,
  });

export default useGenres;
