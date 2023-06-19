import { ReactNode, createContext, useState } from "react";

interface SearchContextType {
  searchResults: any;
  favoriteResults: any;
  setSearchResults: (results: object[]) => void;
  addFavoriteResult: (result: object) => void;
  removeFavoriteResult: (_id: string) => void;
  isFavorite: (_id: string) => boolean;
}

const SearchContext = createContext<SearchContextType>({
  searchResults: [],
  favoriteResults: [],
  setSearchResults: () => {},
  addFavoriteResult: () => {},
  removeFavoriteResult: () => {},
  isFavorite: () => false,
});

interface SearchProviderProps {
  children: ReactNode;
}

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchResults, setSearchResults] = useState<object[]>([]);
  const [favoriteResults, setFavoriteResults] = useState<object[]>([]);

  const addFavoriteResult = (result: any) => {
    setFavoriteResults((prev) => [...prev, result]);
  };

  const removeFavoriteResult = (_id: string) => {
    setFavoriteResults((prev) => prev.filter((result) => result.id !== _id));
  };

  const isFavorite = (_id: string) => {
    return favoriteResults.some((result) => result.id === _id);
  };

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        favoriteResults,
        setSearchResults,
        addFavoriteResult,
        removeFavoriteResult,
        isFavorite,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
