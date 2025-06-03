import PackWrapper from "./PackWrapper";
import PackLink from "./PackLink";

function Home() {
  return (
    <PackWrapper>
      <PackLink to="sample" />
      <PackLink to="B" />
    </PackWrapper>
  );
}

export default Home;
