import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const {games, error, isLoading} = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={10}>
      {isLoading && Skeletons.map(Skeleton => <GameCardSkeleton key={Skeleton} />)}
      {games.map((game) => (
        <GameCard key={game.id} game={game}/>
      ))}  
    </SimpleGrid>
    </>
  );
};

export default GameGrid