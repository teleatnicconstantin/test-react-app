import { createSlice } from "@reduxjs/toolkit";
import { Languages } from "../../../typings/types";
import { defaultLocale } from "../../../constants";

import translationsEn from "../../../language/en/translations.json";
import translationsRo from "../../../language/ro/translations.json";

type TranslationState = {
  locale: Languages;
  translations: {
    [key: string]: number;
  };
};

const savedLocale = localStorage.getItem("locale") as Languages | null;
const currentLang: Languages =
  savedLocale && Object.values(Languages).includes(savedLocale)
    ? savedLocale
    : defaultLocale;

const loadTranslations = (locale: Languages) => {
  if (locale === Languages.en) {
    return translationsEn;
  }
  if (locale === Languages.ro) {
    return translationsRo;
  }
  return {};
};

const initialState: TranslationState = {
  locale: currentLang,
  translations: loadTranslations(currentLang),
};

const translationSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {
    setCurrentLocale(state, { payload }) {
      state.locale = payload;
      state.translations = loadTranslations(payload);

      localStorage.setItem("locale", payload);
    },
  },
});

export const { setCurrentLocale } = translationSlice.actions;

export default translationSlice.reducer;
