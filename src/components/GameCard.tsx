//LIBS
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

//HOOKS
import { Game } from "../hooks/useGames";

//COMPONENTS
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList platform={game.parent_platforms.map( p => p.platform)} />
      </CardBody>
    </Card>
  );
};
