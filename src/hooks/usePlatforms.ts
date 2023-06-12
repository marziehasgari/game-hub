import useData from "./useData";

interface Platforms {
  id: number;
  name: string;
  slang: string;
}

const usePlatforms = () => useData<Platforms>("/platforms/lists/parents");

export default usePlatforms;
