import PackWrapper from "./PackWrapper";
import PackLink from "./PackLink";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <PackWrapper>
        <PackLink name="sample" />
        <PackLink name="B" />
        <PackLink name="A" />
      </PackWrapper>
    </div>
  );
}

export default Home;
