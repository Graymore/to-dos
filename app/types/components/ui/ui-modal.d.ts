import type { TModal } from "~/types/shared/modals";

export interface UiModalProps {
  name: TModal;
  title?: string;
  closable?: boolean;
}