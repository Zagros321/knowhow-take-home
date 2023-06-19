import { styled } from "styled-components";

export const InputWrapper = styled.div`
  display: inline-flex;
  border-radius: 1rem;
  align-items: center;
  border: 1px solid black;
  max-width: 150px;
  padding: 0.5rem;
  height: fit-content;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

export const SearchButton = styled.button`
  max-width: 150px;
  padding: 0.5rem;
  height: fit-content;
  border-radius: 1rem;
  background-color: transparent;
  margin-left: 4px;
  &:hover {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const FormWrapper = styled.form`
  display: flex;
`;
