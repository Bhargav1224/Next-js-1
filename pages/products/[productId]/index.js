import { useRouter } from "next/router";

//dynamic routes for next js
//http://localhost:3000/products/1 ---- > this page render

//now we need to achieve  http://localhost:3000/products/1/reviews/1 ---page , so we have created [productId] dynamic folder
//inside that we will go to build reviews folder and will achieve this reviews/1 page

function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <h1>Details about product- {productId} </h1>
    </>
  );
}

export default ProductDetails;
