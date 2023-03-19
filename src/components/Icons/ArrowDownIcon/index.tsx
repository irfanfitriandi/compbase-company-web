import { IconProps } from "../IconProps";

function ArrowDownIcon({ ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 0H63.6364V9.09091H59.0909V13.6364H54.5455V18.1818H50V22.7273H45.4545V27.2727H40.9091V31.8182H36.3636V36.3636H27.2727V31.8182H22.7273V27.2727H18.1818V22.7273H13.6364V18.1818H9.09091V13.6364H4.54545V9.09091H0V0ZM18.1818 9.09091V13.6364H22.7273V18.1818H27.2727V22.7273H36.3636V18.1818H40.9091V13.6364H45.4545V9.09091H18.1818Z"
        fill="white"
      />
    </svg>
  );
}

export default ArrowDownIcon;
