import { useRouter } from "next/router";

function DetailsPage() {
  //dynamic routing
  const router = useRouter();
  const newsId = router.query.newsId;
  return (
    <>
      <h1>Dynamic Routing Page</h1>
    </>
  );
}

export default DetailsPage;
