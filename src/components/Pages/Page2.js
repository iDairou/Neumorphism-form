import React from "react";
import Form from "../Form/Form";
import { settings } from "../../Helpers/formSettings";

const Page2 = ({ formData, setFormData }) => {
  const getRadioInputs = (item) => {
    return (
      <>
        <h3 key={item.name}>{item.label}</h3>
        <div
          key={item.label}
          onChange={(e) =>
            setFormData({ ...formData, [item.name]: e.target.value })
          }
        >
          {item.options.map((opt) => {
            return (
              <>
                <label>{opt}</label>
                <input
                  key={opt}
                  name={item.name}
                  type={item.type}
                  value={opt}
                />
              </>
            );
          })}
        </div>
      </>
    );
  };
  const getSelectInputs = (item) => {
    return (
      <>
        <h3 key={item.name}>{item.label}</h3>
        <div
          key={item.label}
          onChange={(e) =>
            setFormData({ ...formData, [item.name]: e.target.value })
          }
        >
          {item.options.map((opt) => {
            return (
              <>
                <label key={item.label} htmlFor={item.name}>
                  {opt}
                </label>
                <input
                  key={opt}
                  name={item.name}
                  type={item.type}
                  value={opt}
                ></input>
              </>
            );
          })}
        </div>
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
            <h3 key={item.label}>
              {item.label}
              <input key={item.name} type={item.type}></input>
            </h3>
          </>
        );
      })}
    </Form>
  );
};
export default Page2;
