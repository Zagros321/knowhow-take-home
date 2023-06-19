import { FavoritesPageWrapper, InnerWrapper } from "./FavoritesPage.styles";

import { BackButton } from "../../components/SharedButtons/BackButton/BackButton";
import { GifList } from "../Search/GifList/GifList";
import { Title } from "../../components/Text/Title";

export const FavoritesPage = () => {
  return (
    <FavoritesPageWrapper>
      <InnerWrapper>
        <BackButton />
        <Title>My Saved GIFs</Title>
      </InnerWrapper>
      <GifList />
    </FavoritesPageWrapper>
  );
};
export default FavoritesPage;
