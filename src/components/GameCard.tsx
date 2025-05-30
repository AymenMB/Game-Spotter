import React from 'react'
import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card width='100%' borderRadius={10} overflow='hidden'>
            <img src={ getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top}/></Heading>
                <HStack justifyContent = 'space-between' marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
                    <CriticScore score={game.metacritic} />
             </HStack>
              </CardBody>
        </Card>
    );
}
export default GameCard
