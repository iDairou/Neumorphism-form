import React, { useState } from "react";
import Header from "./Header/Header";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Button from "./Button/Button";
import Progresbar from "./Progressbar/Progressbar";
import { checkValidation } from "../Helpers/validation";

const pages = [Page1, Page2, Page3];

const Form = () => {
  const [page, setPage] = useState(0);

  const handleNextButton = () => {
    return page < 2 ? setPage(page + 1) : null;
  };
  const handlePrevButton = () => {
    return page <= 2 && page > 0 ? setPage(page - 1) : null;
  };
  checkValidation();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("OK");
  };

  const Component = pages[page];
  return (
    <div>
      <Header>We're Waiting for your CV!</Header>
      <Progresbar
        style={{
          width:
            page === 0
              ? "33.3%"
              : page === 1
              ? "66.6%"
              : page === 2
              ? "100%"
              : null,
        }}
      />
      <Component />
      <Button disabled={page === 0 ? true : false} onClick={handlePrevButton}>
        Prev
      </Button>

      {page !== pages.length - 1 ? (
        <Button
          disabled={page === pages.length - 1 ? true : false}
          onClick={handleNextButton}
        >
          Next
        </Button>
      ) : (
        <Button onClick={handleSubmit}>Send</Button>
      )}
    </div>
  );
};
export default Form;
