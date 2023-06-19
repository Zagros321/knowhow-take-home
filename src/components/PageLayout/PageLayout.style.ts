import styled from "styled-components";
export const PageLayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  /* overflow: hidden; */
  background-color: ${(props) => props.theme.colors.white};
`;
export default PageLayoutWrapper;
