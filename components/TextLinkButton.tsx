import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

interface ButtonProps {
  linkText: string;
  url: string;
  className?: string; // Additional classes
}

const TextLinkButton: React.FC<ButtonProps> = ({
  linkText,
  url,
  className,
}) => {
  return (
    <Link className={`font-bold flex items-center ${className}`} href={url}>
      <p className="m-0 text-orange-500">{linkText}</p> &nbsp;{" "}
      <FaLongArrowAltRight className="text-orange-500" />
    </Link>
  );
};

export default TextLinkButton;
