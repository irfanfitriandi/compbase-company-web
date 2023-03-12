import React from "react";
import { Card, Divider } from "antd";
import BookmarkIcon from "../Icons/BookmarkIcon";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

interface ClientProps {
  id?: number;
  name: string;
  compname: string;
  img: string;
  className?: string;
  color: string;
  onClickBookmark: () => void;
}

const ClientCard: React.FC<ClientProps> = ({
  id,
  compname,
  name,
  img,
  className,
  color,
  onClickBookmark,
  ...props
}) => {
  const navigate = useNavigate();

  const onClickDetail = () => {
    navigate(`/client/${id}`);
  };

  return (
    <Card
      className={className}
      hoverable
      cover={<img alt={name} src={img} />}
      actions={[
        <div className="flex justify-center items-center">
          <BookmarkIcon
            className="w-4 hover:scale-125 duration-200"
            onClick={onClickBookmark}
            secondary={color}
          />
        </div>,
        <div className="flex justify-center items-center">
          <ArrowRightIcon
            className="w-5 hover:scale-125 duration-200"
            onClick={onClickDetail}
          />
        </div>,
      ]}
      {...props}
    >
      <Meta title={name} description={`from ${compname}`} />
    </Card>
  );
};

export default ClientCard;
