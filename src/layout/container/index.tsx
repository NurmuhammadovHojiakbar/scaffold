import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Page from "../page";
import ContainerHeader from "@/components/container-header";

type PropType = {
  title: string;
  children: React.ReactNode;
  headerTitle: string;
  // linksList: undefined;
};

const Container = ({ title, children, headerTitle }: PropType) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <Page title={title}>
      <ContainerHeader title={headerTitle} />
      <main>{children}</main>
    </Page>
  );
};

export default Container;
