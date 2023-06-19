import { GifItemWrapper, Img, InnerWrapper } from "./GifItem.stye";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchContext } from "../../../../context/SearchProvider";
import { Text } from "../../../../components/Text/Text";
import { theme } from "../../../../theme/theme";

export const GifItem = ({ data, isFavoritesPage = false }) => {
  const { addFavoriteResult, isFavorite, removeFavoriteResult } =
    useContext(SearchContext);
  const [favorited, setFavorited] = useState(isFavorite(data.id));
  const handleFavoriteClick = () => {
    if (!favorited) {
      addFavoriteResult(data);
      setFavorited(true);
    } else {
      removeFavoriteResult(data.id);
      setFavorited(false);
    }
  };
  return (
    <GifItemWrapper>
      <InnerWrapper>
        <Img src={data?.images?.original?.url} />
        {isFavoritesPage ? (
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => removeFavoriteResult(data.id)}
          />
        ) : (
          <FontAwesomeIcon
            color={favorited ? theme.colors.red : theme.colors.gray}
            icon={faHeart}
            onClick={handleFavoriteClick}
          />
        )}
      </InnerWrapper>
      <Text>Title: {data.title}</Text>
      <Text>Username: {data.username}</Text>
    </GifItemWrapper>
  );
};
