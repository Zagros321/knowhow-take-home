import { BackButtonWrapper, StyledLink } from "./BackButton.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RouteConstants } from "../../../constants/RouteConstants";
import { Text } from "../../Text/Text";
import { faArrowRotateBackward } from "@fortawesome/free-solid-svg-icons";

export const BackButton = () => {
  return (
    <StyledLink to={RouteConstants.SEARCH}>
      <BackButtonWrapper>
        <FontAwesomeIcon icon={faArrowRotateBackward} />
        <Text>Go Back</Text>
      </BackButtonWrapper>
    </StyledLink>
  );
};
