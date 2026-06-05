import { useState } from "react";

import {
  Card,
  Image,
  Content,
  Header,
  Badge,
  Actions,
  Button,
  FavoriteButton,
  Details,
} from "./style";

function FighterCard({ fighter }) {
  const [showDetails, setShowDetails] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <Card>
      <Image src={fighter.image} alt={fighter.name} />

      <Content>
        <Header>
          <h3>{fighter.name}</h3>
          <p>{fighter.country}</p>
        </Header>

        <Badge>{fighter.generation}</Badge>

        <Actions>
          <Button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Hide Details" : "Show Details"}
          </Button>

          <FavoriteButton
            $favorite={favorite}
            onClick={() => setFavorite(!favorite)}
            aria-label="Favorite aircraft"
          >
            ★
          </FavoriteButton>
        </Actions>

        {showDetails && (
          <Details>
            <p>
              <strong>Role:</strong> {fighter.role}
            </p>

            <p>
              <strong>Manufacturer:</strong> {fighter.manufacturer}
            </p>

            <p>
              <strong>Maximum Speed:</strong> {fighter.speed}
            </p>

            <p>
              <strong>First Flight:</strong> {fighter.firstFlight}
            </p>

            <p>
              <strong>Introduced:</strong> {fighter.introduced}
            </p>

            <p>{fighter.description}</p>
          </Details>
        )}
      </Content>
    </Card>
  );
}

export default FighterCard;
