//LIBS
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

//HOOKS
import { Game } from "../hooks/useGames";

//COMPONENTS
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

//SERVICES
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
