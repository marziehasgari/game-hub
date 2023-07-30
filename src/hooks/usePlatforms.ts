//LIBS
import { useQuery } from "@tanstack/react-query";

//SERVICES
import ApiClient from "../services/api-client";

//DATA
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24H
    initialData: platforms,
  });

export default usePlatforms;
