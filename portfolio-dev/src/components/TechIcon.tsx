interface Props {
  iconName: string;
  techName: string;
}

const TechIcon = ({ iconName, techName }: Props) => {
  return (
    <span className="inline-flex bg-base-300 items-center gap-2  py-2 px-3 rounded-full justify-center">
      <img
        height="20"
        width="20"
        src={`/icons/${iconName}.svg`}
        alt={iconName}
        className=""
      />
      <span className="text-sm font-medium">{techName}</span>
    </span>
  );
};

export default TechIcon;
