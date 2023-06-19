import { InnerWrapper, SearchPageWrapper } from "./SearchPage.styles";

import { GifList } from "./GifList/GifList";
import { SavedGifsButton } from "./SavedGifsButton/SavedGifsButton";
import { SearchBar } from "./SearchBar/SearchBar";

export const SearchPage = () => {
  return (
    <SearchPageWrapper>
      <InnerWrapper>
        <SearchBar />
        <SavedGifsButton />
      </InnerWrapper>
      <GifList />
    </SearchPageWrapper>
  );
};
export default SearchPage;
