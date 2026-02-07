interface Props {
  iconName: string;
  techName: string;
}

const SmallTechIcons = ({ iconName, techName }: Props) => {
  return (
    <>
      <span className="inline-flex items-center gap-2 bg-base-300 py-2 px-3 rounded-full justify-center">
        <img
          height="14"
          width="14"
          src={`/icons/${iconName}.svg`}
          alt={iconName}
        />
        <span className="text-xs font-medium">{techName}</span>
      </span>
    </>
  );
};

export default SmallTechIcons;
