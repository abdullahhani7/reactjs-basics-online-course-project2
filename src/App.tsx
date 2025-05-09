import ProductCard from "./conponents/ProductCard";
import Button from "./conponents/ui/Button";
import Input from "./conponents/ui/Input";
import Modal from "./conponents/ui/Modal";
import { formInputsList, productList } from "./data";
import { useState, type ChangeEvent } from "react";
import type { IProduct } from "./interfaces";

const App = () => {
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  });

  //  State
  const [isOpen, setIsOpen] = useState(false);

  // Handler
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({ ...product });
  };
  // Renders
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col">
      <label
        htmlFor={input.id}
        className="text-gray-700 text-sm font-medium mb-[2px]"
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={""}
        onChange={onChangeHandler}
      />
    </div>
  ));
  return (
    <main className="container">
      <Button className="bg-blue-700 hover:bg-blue-800" onClick={openModal}>
        Add
      </Button>

      <div className="grid grid-cols-1 p-2 m-5 rounded-md mdgap-2 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3">
          {renderFormInputList}
          <div className="flex items-center space-x-3">
            <Button className="bg-blue-700 hover:bg-blue-800">Cancel</Button>
            <Button className="bg-gray-300 hover:bg-gray-500">Submit</Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
