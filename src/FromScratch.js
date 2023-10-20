import tw from "twin.macro";

export default function FromScratch() {
  return (
    <Wrapper>
      <Test>Hello World</Test>
    </Wrapper>
  );
}

const Wrapper = tw.div``;
const Test = tw.h1`text-green-300`;
