import React from "react";
import { useRouter } from "next/router";
function Doc() {
  const router = useRouter();
  //   console.log(router);
  const { params } = router.query;
  //   console.log(params); // array of string (paths)
  // here params be an array of strings(paths), we can see
  // what ever we gave as a folder name that will be visible in the router with the same name

  // rendering based on the conditions

  //http://localhost:3000/docs
  // if user visits this page , it will shows 404-page not found, to avoid this change folder from [...params].js to[[...params]].js----> this is called optional catch all routes

  return (
    <React.Fragment>
      {params?.length === 2 ? (
        <h1>
          Viewing docs for the {params[0]} and {params[1]}
        </h1>
      ) : params?.length === 1 ? (
        <h1>Viewing docs for the {params[0]}</h1>
      ) : (
        <h1>Docs HomePage</h1>
      )}
    </React.Fragment>
  );
}

export default Doc;
