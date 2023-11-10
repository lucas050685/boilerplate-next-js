import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const XMark = (props?: Omit<FontAwesomeIconProps, 'icon'>) => <FontAwesomeIcon {...props} icon={faXmark} />;
