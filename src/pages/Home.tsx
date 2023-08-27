import { useEffect } from "react";
import i18n from "common/languages/i18n";
import useLanguage from "hooks/useLanguage";
import { Language, Theme } from "store/slices/appSlice";
import Button from "components/Button";
import useTheme from "hooks/useTheme";
import useGetAllArticles from "hooks/useGetAllArticles";
import { Article } from "api/article/article.model";

const Home = () => {
  const { language, setCurrentLanguage } = useLanguage();

  const { theme, setCurrentTheme } = useTheme();

  const { getArticles, articles, loading, error } = useGetAllArticles();

  const setDarkTheme = () => setCurrentTheme(Theme.DARK);
  const setLightTheme = () => setCurrentTheme(Theme.LIGHT);

  useEffect(() => {
    getArticles();
  }, []);

  const handleThemeButtonClick = () => {
    if (theme === Theme.DARK) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  const handleLanguageButtonClick = () => {
    if (language === Language.EN) {
      setCurrentLanguage(Language.SWE);
    } else {
      setCurrentLanguage(Language.EN);
    }
  };

  const renderArticles = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>{error}</p>;
    } else if (articles) {
      return articles.map((article: Article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </div>
      ));
    }
  };

  return (
    <div className="page-home">
      <h1>{i18n.t("home")}</h1>
      <Button onClick={handleThemeButtonClick}>
        {theme === Theme.DARK ? "🌒" : "☀️"}
      </Button>
      <Button onClick={handleLanguageButtonClick}>
        {language === Language.EN ? "EN" : "SWE"}
      </Button>
      {renderArticles()}
    </div>
  );
};

export default Home;
