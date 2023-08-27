import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import i18n from "common/languages/i18n";

import { RootState } from "store";
import { Language, setLanguage } from "store/slices/appSlice";

const useLanguage = () => {
  const dispatch = useDispatch();

  const { language } = useSelector((state: RootState) => state.app);

  const setCurrentLanguage = useCallback((language: Language) => {
    i18n.changeLanguage(language);
    dispatch(setLanguage(language));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { language, setCurrentLanguage };
};

export default useLanguage;
