import React from "react";
import Form from "../Form/Form";
import { settings } from "../../Helpers/formSettings";

const Page2 = () => {
  const getRadioInputs = (item) => {
    return (
      <>
        <h3 key={item.name}>{item.label}</h3>
        {item.options.map((opt) => {
          return (
            <label>
              {opt}
              <input
                key={opt}
                name={item.name}
                type={item.type}
                value={opt}
              ></input>
            </label>
          );
        })}
      </>
    );
  };
  const getSelectInputs = (item) => {
    return (
      <>
        <h3 key={item.name}>{item.label}</h3>
        {item.options.map((opt) => {
          return (
            <>
              <input name={item.name} type={item.type}></input>
              <label htmlFor={item.name}>{opt}</label>
            </>
          );
        })}
      </>
    );
  };

  return (
    <Form>
      {settings[1].map((item) => {
        if (item.type === "radio") {
          return getRadioInputs(item);
        }
        if (item.type === "checkbox") {
          return getSelectInputs(item);
        }
        return (
          <>
            <h3>
              {item.label}
              <input type={item.type}></input>
            </h3>
          </>
        );
      })}
    </Form>
  );
};
export default Page2;
