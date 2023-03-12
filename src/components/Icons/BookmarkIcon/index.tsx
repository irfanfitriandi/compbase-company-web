import { IconProps } from "../IconProps";

const BookmarkIcon = ({ secondary, ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 100 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="9" y="11" width="81" height="98" fill={secondary} />
      <path
        d="M7.14286 0H92.8571V7.14286H100V128.571H85.7143V121.429H71.4286V114.286H57.1429V107.143H42.8571V114.286H28.5714V121.429H14.2857V128.571H0V7.14286H7.14286V0ZM14.2857 14.2857V107.143H21.4286V100H35.7143V92.8571H42.8571V85.7143H57.1429V92.8571H64.2857V100H78.5714V107.143H85.7143V14.2857H14.2857Z"
        fill="black"
      />
    </svg>
  );
};

export default BookmarkIcon;
