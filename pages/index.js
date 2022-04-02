import Link from "next/link";

function HomePage() {
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
    </div>
  );
}
export default HomePage;
