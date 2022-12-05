import React, { useState } from "react";
import Header from "./Header/Header";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Button from "./Button/Button";
import Progresbar from "./Progressbar/Progressbar";
import { validate } from "../Helpers/validation";
import { settings } from "../Helpers/formSettings";
import Container from "./Container/Container";
import FinalPage from "./Pages/FinalPage/FinalPage";
import ListItem from "./ListItem/ListItem";

const Form = () => {
  const pages = [Page1, Page2, Page3, FinalPage];
  const [page, setPage] = useState(0);
  const [errors, setErrors] = useState({});

  const init = {
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
  };

  const [formData, setFormData] = useState(init);

  const handleNextButton = () => {
    const err = validate(settings[page], formData);
    setErrors(err);

    if (Object.keys(err).length === 0) {
      return page < pages.length - 1 ? setPage(page + 1) : null;
    }
  };
  const handlePrevButton = () => {
    return page <= pages.length - 1 && page > 0 ? setPage(page - 1) : null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form sent succesfuly");
    setFormData(init);
    setPage(0);
  };

  const getFieldsName = () => {
    const fields = settings.flat();
    return fields;
  };

  const getStateValues = (name) => {
    const values = [];
    for (let [key, value] of Object.entries(formData)) {
      if (name === key) {
        values.push(value);
      }
    }

    if (Array.isArray(values[0])) {
      return values[0].join(", ");
    }

    return values;
  };

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
      {page !== pages.length - 1 ? (
        <Component
          fields={settings[page]}
          errors={errors}
          formData={formData}
          setFormData={setFormData}
        />
      ) : (
        <Component>
          {getFieldsName().map((item) => (
            <ListItem>
              <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
                {item.label}
              </p>
              <p style={{ marginBottom: "10px", wordBreak: "break-word" }}>
                {" "}
                {getStateValues(item.name)}
              </p>
            </ListItem>
          ))}
        </Component>
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
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
      </div>
    </Container>
  </div>
);
};;
export default Form;
