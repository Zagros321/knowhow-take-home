import { styled } from "styled-components";

export const GifItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  width: 20%;
  min-width: 6rem;
  padding: 1rem;
  max-width: 12rem;
  height: fit-content;
`;
export const InnerWrapper = styled.div`
  width: 100%;
  height: 6rem;
  position: relative;
  svg {
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;
    height: 32px;
    transition: opacity 0.3s ease-in;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  min-width: inherit;
  max-width: inherit;
  height: 6rem;
  left: 0;
  top: 0;
`;
