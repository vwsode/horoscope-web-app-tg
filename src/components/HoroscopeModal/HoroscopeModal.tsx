import { FC } from "react";
import { Button, Modal, Placeholder } from "@telegram-apps/telegram-ui";
import { ModalClose } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";

import { useHoroscopeModal } from "@/contexts/HoroscopeModalContext";

import "./HoroscopeModal.css";

interface HoroscopeModalProps {
  title: string;
  description: string;
  isOpen: boolean;
}

export const HoroscopeModal: FC<HoroscopeModalProps> = ({
  title,
  description,
  isOpen,
}) => {
  const { closeModal } = useHoroscopeModal();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeModal();
    }
  };

  return (
    <Modal
      onOpenChange={handleOpenChange}
      header={
        <div className="horoscope-modal__header">
          <ModalClose>
            <Button mode="plain">Назад</Button>
          </ModalClose>
        </div>
      }
      open={isOpen}
    >
      <Placeholder description={description} header={title}></Placeholder>
    </Modal>
  );
};
