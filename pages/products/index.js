import Link from "next/link";

const ProductList = ({ productId = 100 }) => {
  //<Link href="/products/3" replace>Products 3</Link>
  // here replace will throw user to home page instead of productList page (back the history getting changed)

  // replace will replace the url instead of adding the new url to stack

  //Link is used for client side routing , which means routing within out application, if we want to visits other external websites or pages we need to use anchor tag only (<a href="https://www.google.com">visit</a>).
  
  // we should not use anchor tag for client side routing

  return (
    <div>
      <h1>
        <Link href="/products/1">Products 1</Link>
      </h1>
      <h1>
        <Link href="/products/2">Products 2</Link>
      </h1>
      <h1>
        <Link href="/products/3" replace>
          Products 3
        </Link>
      </h1>
      <h1>
        <Link href={`/products/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </h1>

      <br />
      <br />
      <Link href="/">Go to home</Link>
    </div>
  );
};

export default ProductList;
