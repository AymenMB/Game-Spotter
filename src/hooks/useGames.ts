
import { GameQuery } from '../App';
import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
    id: number;
    name: string;
    slug: string;   
}

export interface Game {
    id: number;
    name: string;
    rating_top: number;
    background_image:string;
    parent_platforms: {platform: Platform}[]
    metacritic:number;
}



const useGames = (gameQuery: GameQuery) =>
    useData<Game>(
      "/games",
      {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortorder,
          search: gameQuery.searchText,

        },
      },
      [gameQuery]
    );
   
    export default useGames;  