import PackWrapper from "./PackWrapper";
import Pack from "./Pack";

function Home() {
  return (
    <PackWrapper>
      <Pack name="sample" />
      <Pack name="B" />
      <Pack name="A" />
    </PackWrapper>
  );
}

export default Home;
