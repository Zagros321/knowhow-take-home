import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const BackButtonWrapper = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 8px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  position: absolute;
  left: 16px;
`;
