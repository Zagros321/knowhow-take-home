import {
  FormWrapper,
  InputWrapper,
  SearchButton,
  SearchInput,
} from "./SearchBar.styles";
import { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GIPHY_SEARCH_API_URL } from "../../../constants/ApiConstants";
import { SearchContext } from "../../../context/SearchProvider";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useAxios } from "../../../services/useAxios";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { response, error, loading, makeRequest } = useAxios();
  const { setSearchResults } = useContext(SearchContext);
  useEffect(() => {
    setSearchResults(response?.data.data);
  }, [response, setSearchResults]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    makeRequest("get", `${GIPHY_SEARCH_API_URL}&q=${searchTerm}`);
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={onInputChange}
          aria-label="Search for gifs from giphy"
        ></SearchInput>
      </InputWrapper>
      <SearchButton type="submit">Search for gifs</SearchButton>
    </FormWrapper>
  );
};
