import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, Cell, Section } from "@telegram-apps/telegram-ui";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";

import { ZODIACS } from "@/constants/zodiacs.constants";

import "./HoroscopeList.css";
import { getZodiacSign } from "@/api/horoscope.api";
import { ZodiacName } from "@/types/zodiac.types";
import { useHoroscopeModal } from "@/contexts/HoroscopeModalContext";

export const HoroscopeList: FC = () => {
  const { openModal } = useHoroscopeModal();
  const { t, i18n } = useTranslation();

  const handleTranslationClick = () => {
    const lang = i18n.language;
    i18n.changeLanguage(lang === "en" ? "ru" : "en");
  };

  const handleSignClick = async (sign: ZodiacName) => {
    const data = await getZodiacSign(sign, i18n.language);

    if (data) {
      openModal(t(`zodiac.${sign}`), data.horoscope);
    }
  };

  return (
    <Section
      footer="Horoscope application "
      header={
        <div className="horoscope-grid__header">
          <SectionHeader>{t("horoscope.title")}</SectionHeader>
          <div className="horoscope-grid__locale">
            <Button size="s" mode="plain" onClick={handleTranslationClick}>
              {i18n.language.toUpperCase()}
            </Button>
          </div>
        </div>
      }
    >
      {ZODIACS.map((item) => (
        <Cell
          onClick={() => handleSignClick(item.key)}
          before={item.icon}
          key={item.key}
          subtitle={t(`period.${item.key}`)}
        >
          {t(`zodiac.${item.key}`)}
        </Cell>
      ))}
    </Section>
  );
};
