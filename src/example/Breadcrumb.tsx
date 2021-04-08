import React from "react";
import Breadcrumb from "../quark/Breadcrumb";
import BreadcrumbItem from "../quark/BreadcrumbItem";

const BreadcrumbEx = (): JSX.Element => {
  return (
    <>
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="index.html">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Library</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="index.html">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="index.html">Library</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Data</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </>
  );
};

export default BreadcrumbEx;
