import "./roulette.css";

const TextTitle = () => {
  return (
    <section className="mb-[20px]">
      <p className="text-[40px] text-center">選擇障礙專區</p>
    </section>
  );
};

const Roulette = () => {
  const LENGTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <main className="mx-auto w-[400px] h-[400px] border border-white ">
      <section className="w-full h-full rounded-full bg-white relative overflow-hidden">
        {LENGTH.map((item, index) => {
          return (
            <div key={index} className="roulette-section">
              {item}
            </div>
          );
        })}
      </section>
    </main>
  );
};

const WhatAreYouDoingToday = () => {
  return (
    <main className="pt-[100px] xl:px-myself md:px-[100px]">
      <TextTitle />
      <Roulette />
    </main>
  );
};

export default WhatAreYouDoingToday;
