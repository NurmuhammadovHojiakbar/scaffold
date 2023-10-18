import { CaseStudyList } from "@/components/case-study";
import Container from "@/layout/container";

const CaseStudy = () => {
  // const links = [
  //   {
  //     id: 1,
  //     path: "/",
  //     title: "Home",
  //   },
  //   {
  //     id: 2,
  //     title: "Case Study",
  //   },
  // ];
  return (
    <Container title="Case Study" headerTitle="">
      <CaseStudyList />
    </Container>
  );
};

export default CaseStudy;
