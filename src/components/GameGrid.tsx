import React from 'react';
import {SimpleGrid, Text} from '@chakra-ui/react';
import useGames, { Game, Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;

}
const GameGrid = ({gameQuery}:Props) => {
const {data, error, isLoading}  = useGames(gameQuery );
const skeletons = [1, 2,,3,4,5,6];

if (error) return <Text>{error}</Text>;
 
  return (
    <>
    {error && <div>{error}</div>}
    <SimpleGrid columns = {{ sm:1, md:2 , lg:3, xl:4 }} 
    padding='10px'  
    spacing={6}
    >
      {isLoading && 
      skeletons.map(skeleton=> < GameCardSkeleton key={skeleton} />)} 

      {data.map((game) => (<GameCard key={game.id} game={game} />)) }
    </SimpleGrid>
</>
  );
}
export default GameGrid
