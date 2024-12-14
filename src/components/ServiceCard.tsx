import Image from "next/image";
import TextLinkButton from "./TextLinkButton";

interface BuildingCardProps {
  title: string;
  price: string;
  linkText: string;
  url: string;
  imageSrc: string;
  altText?: string; // Optional: Add alt text for accessibility
}

const ServiceCard: React.FC<BuildingCardProps> = ({
  title,
  price,
  linkText,
  url,
  imageSrc,
  altText = "Image",
}) => {
  return (
    <div className="max-w-[300px]  mx-auto sm:max-w-[500px]">
      <div className=" rounded-lg">
        <Image
          src={imageSrc}
          alt={altText}
          width={600}
          height={150}
          className="w-full mx-auto"
        />
      </div>
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <p className="text-gray-600">{price}</p>
      <TextLinkButton linkText={linkText} url={url} />
    </div>
  );
};

export default ServiceCard;
