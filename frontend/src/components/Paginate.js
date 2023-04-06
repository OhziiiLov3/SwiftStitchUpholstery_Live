import React from 'react'
import { Pagination } from "react-bootstrap";
import { LinkContainer, } from "react-router-bootstrap";
// import {  useLocation } from "react-router-dom";


const Paginate = ({pages, page, keyword='',isAdmin=false}) => {

  if (keyword) {
    keyword = keyword.split("?keyword=")[1].split("&")[0];
  }
   const pagesArray = [...Array(pages).keys()];
    console.log("KEYWORD:",keyword);

  return (
    pages > 1 && (
      <Pagination >
        {pagesArray.map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? {
                    pathname: "/",
                    search: `?keyword=${keyword}&page=${x + 1}`,
                  }
                : {
                    pathname: "/admin/productlist",
                    search: `/?keyword=${keyword}&page=${x + 1}`,
                  }
            }
          >
            <Pagination.Item  key={pagesArray} active = {x + 1 === page} className="m-1">
              {x + 1}
            </Pagination.Item>
          </LinkContainer>
        ))
        }
      </Pagination>
    )
  );
}

export default Paginate