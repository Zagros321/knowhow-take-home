import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Loading = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faSpinner} />
      Loading..
    </div>
  );
};
