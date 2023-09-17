import { Helmet, HelmetProvider } from "react-helmet-async";

type PropTypes = {
  title: string;
  children: React.ReactNode;
};

const Page = ({ children, title }: PropTypes) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title} | Scaffolding</title>
      </Helmet>
      <>{children}</>
    </HelmetProvider>
  );
};

export default Page;
