const Circle = () => {
  return (
    <div className="w-[550px] h-[550px] z-[1] rounded-full bg-[#1d1d1d] absolute top-[50%] left-[50%] transform-translate-center"></div>
  );
};
const LeftText = () => {
  return (
    <section className="w-[400px] h-full flex flex-col justify-end pb-[120px] z-10">
      <p className="text-[60px] font-semibold text-[#4a4a4a]">I'm</p>
      <p className="text-[75px] leading-[80px] font-semibold text-white my-[10px]">
        THIS IS MY NAME
      </p>
      <p className="text-[20px] text-[gray]">
        THIS IS MY INTRODUCE THIS IS MY INTRODUCE THIS IS MY INTRODUCE THIS IS
        MY INTRODUCE THIS IS MY INTRODUCE THIS IS MY INTRODUCE
      </p>
    </section>
  );
};

const RightText = () => {
  return (
    <section className="w-[400px] h-full flex flex-col justify-start pt-[120px] z-10">
      {/* <p className="text-[60px] font-semibold text-[#4a4a4a]">I'm</p>
      <p className="text-[75px] leading-[80px] font-semibold text-white my-[10px]">
        THIS IS MY NAME
      </p> */}
      <p className="text-[30px] leading-[30px] text-[gray]">
        THIS IS MY INTRODUCE THIS IS MY INTRODUCE THIS IS MY INTRODUCE THIS IS
        MY INTRODUCE THIS IS MY INTRODUCE THIS IS MY INTRODUCE
      </p>
    </section>
  );
};

const Main = () => {
  return (
    <main className="w-full h-[850px] px-myself">
      <section className="flex items-center justify-between relative h-full">
        <Circle />
        <LeftText />
        <RightText />
      </section>
    </main>
  );
};

export default Main;
