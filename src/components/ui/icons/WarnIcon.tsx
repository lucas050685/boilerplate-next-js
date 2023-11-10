import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

export const WarnIcon = (props: Omit<FontAwesomeIconProps, 'icon'>) => <FontAwesomeIcon icon={faTriangleExclamation} />;
