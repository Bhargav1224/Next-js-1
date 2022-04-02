// domain-name/news
// based on the filename, next js will displaying the routes
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>News page</h1>
      <ul>
        <li>
          <Link href="/news/something-else">news items were displaying</Link>
        </li>
        <li>news were something</li>
      </ul>
    </>
  );
}

export default NewsPage;
