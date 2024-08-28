import { List } from "@telegram-apps/telegram-ui";
import type { FC } from "react";

import { HoroscopeList } from "@/components/HoroscopeList/HoroscopeList";
import { HoroscopeModal } from "@/components/HoroscopeModal/HoroscopeModal";
import { useHoroscopeModal } from "@/contexts/HoroscopeModalContext";
import React from "react";

export const IndexPage: FC = () => {
  const { isOpen, title, description } = useHoroscopeModal();
  // const [open, setOpen] = React.useState(false);

  return (
    <List>
      {/* <button onClick={() => setOpen((prev) => !prev)}>Opne</button> */}
      <HoroscopeList />


      <HoroscopeModal isOpen={isOpen} description={description} title={title} />
    </List>
  );
};
