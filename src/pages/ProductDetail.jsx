import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "../components/Container";
import Rating from "../components/Rating";
import BreadCrumb from "../components/BreadCrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { productSlug } = useParams();

  const { products } = useProductStore();

const { carts, addCart } = useCartStore();

// Find the current product 
  const currentProduct = products.find((product) => product.slug == productSlug);

  // Check if the product is in the cart
  const isInCart = carts.some((cart) => cart.productId === currentProduct.id);

  // Handle Add To Cart action
  // const handleAddToCartBtn = (event) => {

  //   event.stopPropagation();
  //   const newCart = {
  //     id: Date.now(),
  //     productId: currentProduct.id,
  //     productPrice: currentProduct.price,
  //     productTitle: currentProduct.title,
  //     productImage: currentProduct.image,
  //     quantity: 1,
  //   };  
  //   addCart(newCart);
  // };

  // const handleAddedBtn = (event) => {
  //   event.stopPropagation();
  //   toast.success("Item is already in My Cart");
  // };

  // Handle Add To Cart another version 
  const handleAddToCart = () => {
    if (isInCart) {
      toast.error("Item is already added in My Cart");
      return;
    }
    addCart({
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    });
    toast.success("Item added to cart");
  };


  // console.log(currentProduct)

  return (
    <Container className="px-5">
      <BreadCrumb currentPageTitle="Product Detail" />
      <div className="border border-black p-10 my-10">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div className=" col-span-1">
            <img
              src={currentProduct.image}
              className=" h-[300px] md:h-auto md:w-2/4 block mb-5 md:mb-0 md:mx-auto"
              alt=""
            />
          </div>

          <div className="col-span-1 flex flex-col gap-5 items-start">
            <h3 className="text-3xl font-bold">{currentProduct.title}</h3>
            <p className="bg-gray-200 text-gray-700 inline-block px-5 py-1 ">
              {currentProduct.category}
            </p>
            <p>{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between w-full items-center">
              <p>Price : ({currentProduct.price})</p>
              
              {/* /* {carts.find((el) => el.productId === currentProduct.id) ? (
                <button
                  className=" text-sm border border-black px-3 py-1 focus:bg-slate-900 focus:text-white "
                  onClick={handleAddedBtn}
                >
                  Added
                </button>
              ) : (
              <button
              onClick={handleAddToCartBtn}
              className=" text-sm border border-black px-3 py-1 ">
                Add Cart
              </button>
              )} */ }
              <button
                onClick={handleAddToCart}
                className={`text-sm border px-3 py-1 ${isInCart ? "bg-black text-white" : "border-black"}`}
              >
                {isInCart ? "Added" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
