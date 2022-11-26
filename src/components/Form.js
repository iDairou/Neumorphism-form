import React, { useState } from "react";
import Header from "./Header/Header";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Button from "./Button/Button";
import Progresbar from "./Progressbar/Progressbar";
import { validate } from "../Helpers/validation";
import { settings } from "../Helpers/formSettings";
import Container from "../Container/Container";
import FinalPage from "./Pages/FinalPage";

const Form = () => {
  const pages = [Page1, Page2, Page3];
  const [page, setPage] = useState(0);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    years: "",
    availability: "",
    framework: [],
    finance: "",
    team: "",
    yourself: "",
  });

  const handleNextButton = () => {
    // const err = validate(settings[page], formData);
    // setErrors(err);
    // if (Object.keys(err).length === 0) {

    // }
    return page < pages.length - 1 ? setPage(page + 1) : null;
  };
  const handlePrevButton = () => {
    return page <= pages.length - 1 && page > 0 ? setPage(page - 1) : null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Rozwiązanie do refaktoryzacji
  // const renderPages = (page) => {
  //   switch (page) {
  //     case 0:
  //       return <Page1 formData={formData} setFormData={setFormData}></Page1>;
  //     case 1:
  //       return <Page2 formData={formData} setFormData={setFormData}></Page2>;
  //     case 2:
  //       return <Page3 formData={formData} setFormData={setFormData}></Page3>;
  //     default:
  //       return null;
  //   }
  // };

  const Component = pages[page];

  return (
    <div>
      <Header>We're waiting for your CV!</Header>
      <Progresbar
        style={{
          width: ((page + 1) / pages.length) * 100 + `%`,
        }}
      />
      <Container>
        <Component
          errors={errors}
          formData={formData}
          setFormData={setFormData}
        />

        <Button hidden={page === 0 ? true : false} onClick={handlePrevButton}>
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
      </Container>
    </div>
  );
};;
export default Form;
