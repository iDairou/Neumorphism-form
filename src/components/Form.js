import React, { useState } from "react";
import Header from "./Header/Header";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Button from "./Button/Button";
import Progresbar from "./Progressbar/Progressbar";

const Form = () => {
  const pages = [Page1, Page2, Page3];
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: 0,
    years: "",
    availability: [],
    framework: "",
    finance: 0,
    team: "",
    yourself: "",
  });
  console.log(formData);

  // const reducer = (state, { name, value }) => ({ ...state, [name]: value });
  // const [state, dispatch] = useReducer(reducer, init);
  // console.log(state);

  const handleNextButton = () => {
    return page < 2 ? setPage(page + 1) : null;
  };
  const handlePrevButton = () => {
    return page <= 2 && page > 0 ? setPage(page - 1) : null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("OK");
  };
  // Rozwiązanie do refaktoryzacji
  const renderPages = (page) => {
    switch (page) {
      case 0:
        return <Page1 formData={formData} setFormData={setFormData}></Page1>;
      case 1:
        return <Page2 formData={formData} setFormData={setFormData}></Page2>;
      case 2:
        return <Page3 formData={formData} setFormData={setFormData}></Page3>;
      default:
        return null;
    }
  };
  // const Component = pages[page];

  // console.log(typeof pages[page]);
  return (
    <div>
      <Header>We're waiting for your CV!</Header>
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
      {renderPages(page)}
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
