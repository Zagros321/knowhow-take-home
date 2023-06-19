import { GifItem } from "./GifItem/GifItem";
import { GifListWrapper } from "./GifList.style";
import { RouteConstants } from "../../../constants/RouteConstants";
import { SearchContext } from "../../../context/SearchProvider";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export const GifList = () => {
  const { searchResults, favoriteResults } = useContext(SearchContext);
  const location = useLocation();
  const isFavoritesPage = location.pathname === RouteConstants.FAVORITES;
  const gifListData = isFavoritesPage ? favoriteResults : searchResults;
  console.log(searchResults);
  return (
    <GifListWrapper>
      {gifListData?.map((item) => {
        return (
          <GifItem
            isFavoritesPage={isFavoritesPage}
            key={item.id}
            data={item}
          />
        );
      })}
    </GifListWrapper>
  );
};
