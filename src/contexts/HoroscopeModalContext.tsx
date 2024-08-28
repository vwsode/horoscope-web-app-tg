import { createContext, useContext, useState, FC, ReactNode } from "react";

interface HoroscopeModalContextProps {
  title: string;
  description: string;
  isOpen: boolean;
  openModal: (title: string, description: string) => void;
  closeModal: () => void;
}

const HoroscopeModalContext = createContext<
  HoroscopeModalContextProps | undefined
>(undefined);

export const HoroscopeModalProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (newTitle: string, newDescription: string) => {
    setTitle(newTitle);
    setDescription(newDescription);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <HoroscopeModalContext.Provider
      value={{ title, description, isOpen, openModal, closeModal }}
    >
      {children}
    </HoroscopeModalContext.Provider>
  );
};

export const useHoroscopeModal = () => {
  const context = useContext(HoroscopeModalContext);
  if (!context) {
    throw new Error(
      "useHoroscopeModal must be used within a HoroscopeModalProvider"
    );
  }
  return context;
};
