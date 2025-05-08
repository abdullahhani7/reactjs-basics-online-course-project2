import ProductCard from "./conponents/ProductCard";
import Button from "./conponents/ui/Button";
import Modal from "./conponents/ui/Modal";
import { productList } from "./data";
import { useState } from "react";

const App = () => {
  //  State
  const [isOpen, setIsOpen] = useState(false);

  // Handler
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // Renders
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <main className="container">
          <Button className="bg-blue-700 hover:bg-blue-800" onClick={openModal}>Add</Button>

      <div className="grid grid-cols-1 p-2 m-5 rounded-md mdgap-2 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <div className="flex items-center space-x-3">
          <Button className="bg-blue-700 hover:bg-blue-800">Cancel</Button>
          <Button className="bg-gray-300 hover:bg-gray-800">Submit</Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
