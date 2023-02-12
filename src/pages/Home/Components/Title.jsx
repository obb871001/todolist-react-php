const Title = ({ t, center, noMargin }) => {
  return (
    <p
      className={`font-bold text-[50px] mb-[20px] ${noMargin && "!mb-0"} ${
        center && "text-center"
      }`}
    >
      {t}
    </p>
  );
};

export default Title;
