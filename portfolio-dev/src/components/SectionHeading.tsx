interface Props {
  preHeading: string;
  heading_1: string;
  heading_2: string;
  subTitle: string;
}

const SectionHeading = ({
  preHeading,
  heading_1,
  heading_2,
  subTitle,
}: Props) => {
  return (
    <>
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-widest text-base-content/80 font-semibold mb-2">
          {preHeading}
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {heading_1} <span className="text-teal-500">{heading_2}</span>
        </h2>

        <p className="text-sm text-base-content/80 max-w-lg mx-auto mt-3 leading-relaxed">
          {subTitle}
        </p>
      </div>
    </>
  );
};

export default SectionHeading;
