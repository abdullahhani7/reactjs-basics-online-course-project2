import type { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL , price, category} = product;
  return (
    <div className="mx-auto md:mx-0 md:max-w-lg max-w-sm flex flex-col p-2 border rounded-md">
      <Image imageURL={imageURL} alt={"Product Name"} className="rounded-md" />

      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>

      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer " />
        <span className="w-5 h-5 bg-yellow-500 rounded-full cursor-pointer" />
      </div>

      <div className="flex items-center justify-between">
        <span>{price}</span>

        <Image
          imageURL= {category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-center "
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-red-700" width="w-full">
          DELETE
        </Button>
        <Button className="bg-blue-700 hover:bg-blue-800">EDIT</Button>
        <Button className="bg-slate-700 hover:bg-slate-800">LOADING</Button>
      </div>
    </div>
  );
};

export default ProductCard;
