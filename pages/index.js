import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

function HomePage() {
  const router = useRouter();
  // on success placing the order , going to order page
  const handleProductClick = () => {
    console.log("Placing the order");
    router.push("/products");
    // router.replace("/products");
  };
  const handleTodo = () => {
    console.log("Placing the order");
    router.push("/todos");
    // router.replace("/products");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a>Blog Page</a>
      </Link>
      <br />
      <br />
      <br />
      <Link href="/products">Product Page</Link>
      <br />
      <br />
      <br />
      <button onClick={handleProductClick}>Place Order</button>
      <br />
      <br />
      <br />
      <div>
        <button className={styles.container} onClick={handleTodo}>
          {" "}
          TO-DO G A M E
        </button>
      </div>
    </div>
  );
}
export default HomePage;
