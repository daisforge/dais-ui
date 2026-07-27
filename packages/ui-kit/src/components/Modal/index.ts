import type { ModalProps } from '@salutejs/sdds-finai';
import { Modal, modalClasses } from '@salutejs/sdds-finai';
import { ComponentProps } from 'react';

type ModalCompProps = ComponentProps<typeof Modal>;

export type { ModalCompProps, ModalProps };
export { Modal, modalClasses };
