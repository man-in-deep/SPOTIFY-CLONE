"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { BsPlayFill } from "react-icons/bs";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: FC<ListItemProps> = ({ image, href, name }) => {
  const router = useRouter();
  const onClick = () => {
    // TODO: Add authentication before redirecting
    router.push(href);
  };
  return (
    <button
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
      onClick={onClick}
    >
      <div className="relative min-h-[76px] min-w-[72px]">
        <Image className="object-cover" src={image} alt={name} fill />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute flex transition opacity-0 rounded-full items-center justify-center bg-green-500 p-2 drop-shadow-xl right-5 group-hover:opacity-100 hover:scale-110">
        <BsPlayFill className="text-black" size={25} />
      </div>
    </button>
  );
};

export default ListItem;
