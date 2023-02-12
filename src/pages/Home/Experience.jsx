import Timeline from "./Components/Timeline";
import Title from "./Components/Title";
import dayjs from "dayjs";

const today = dayjs();
const startDate = dayjs("2021-06-17");
const diff = today.diff(startDate, "day");
const LearnDay = ((diff - 120) / 365).toFixed(1);
const Experience = () => {
  return (
    <section>
      <Title t={`Experience (${LearnDay}Y)`} />
      <Timeline />
    </section>
  );
};

const Body = () => {
  return (
    <section className=" pt-[70px] min-h-[100vh] px-myself relative">
      <Experience />
    </section>
  );
};

export default Body;
