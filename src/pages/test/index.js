import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

const TestPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>
        {t("pages:test.title", {
          lng: "en-US", // It doesn't work
        })}
      </h2>
    </div>
  );
};

export default TestPage;
