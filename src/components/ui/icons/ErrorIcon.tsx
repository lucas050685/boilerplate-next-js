import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export const ErrorIcon = (props: Omit<FontAwesomeIconProps, "icon">) => <FontAwesomeIcon icon={faExclamationCircle} />;
