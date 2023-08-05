//LIBS
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

//SERVICES
import ApiClient from "../services/api-client";

//DATA
import genres from "../data/genres";
import { Genre } from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
