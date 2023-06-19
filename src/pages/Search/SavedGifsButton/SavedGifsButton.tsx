import { Link } from "react-router-dom";
import { RouteConstants } from "../../../constants/RouteConstants";
import { SavedGifsButtonWrapper } from "./SavedGifsButton.style";

export const SavedGifsButton = () => {
  return (
    <SavedGifsButtonWrapper>
      <Link to={RouteConstants.FAVORITES}>My Saved Gifs</Link>
    </SavedGifsButtonWrapper>
  );
};
