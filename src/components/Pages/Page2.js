import React from "react";
import Form from "../Form/Form";
import { settings } from "../../Helpers/formSettings";

const Page2 = ({ formData, setFormData, errors }) => {
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
        {errors ? <p>{errors[item.name]}</p> : null}
      </>
    );
  };
  const getSelectInputs = (item) => {
    return (
      <>
        <h3 key={item.name}>{item.label}</h3>
        <div
          key={item.label}
          onChange={(e) => {
            const filteredArr = e.target.checked
              ? [...formData.framework, e.target.value]
              : [...formData.framework].filter(
                  (value) => value !== e.target.value
                );
            console.log(filteredArr);
            setFormData({
              ...formData,
              [item.name]: filteredArr,
            });
          }}
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
                ></input>
              </>
            );
          })}
        </div>
        <p>{errors[item.name]}</p>
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
              <input
                onChange={(e) =>
                  setFormData({ ...formData, [item.name]: e.target.value })
                }
                key={item.name}
                type={item.type}
              ></input>
            </h3>
            <p>{errors[item.name]}</p>
          </>
        );
      })}
    </Form>
  );
};
export default Page2;
