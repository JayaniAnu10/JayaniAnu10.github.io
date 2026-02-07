interface Props {
  iconName: string;
  mediaName: string;
}

const SocialMediaTablet = ({ iconName, mediaName }: Props) => {
  return (
    <>
      <span className="inline-flex items-center gap-2 bg-base-100 py-4 px-3 rounded-full justify-center w-50">
        <img
          height="20"
          width="20"
          src={`https://cdn.simpleicons.org/${iconName}`}
          alt={iconName}
        />
        <span className="text-white text-sm font-medium">{mediaName}</span>
      </span>
    </>
  );
};

export default SocialMediaTablet;
