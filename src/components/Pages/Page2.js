import React from "react";
import Form from "../FormView/FormView";
import RadioButton from "../InputRadio/RadioButton";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import InputText from "../InputText/Input";
import ErrorMessage from "../ErrorMessage/ErrorMassage";

const Page2 = ({ formData, setFormData, errors, fields }) => {
  const getRadioInputs = (item) => {
    return (
      <>
        <h3 key={item.name}>{item.label}</h3>
        <div
          // style={} STYLE DLA RADIO
          key={item.label}
          onChange={(e) =>
            setFormData({ ...formData, [item.name]: e.target.value })
          }
        >
          {item.options.map((opt) => {
            return (
              <RadioButton
                opt={opt}
                checked={formData[item.name] === opt}
                key={opt}
                name={item.name}
                type={item.type}
                value={opt}
              />
            );
          })}
        </div>
        {errors ? <ErrorMessage>{errors[item.name]}</ErrorMessage> : null}
      </>
    );
  };
  const getCheckboxInputs = (item) => {
    console.log(formData[item.name]);

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
            setFormData({
              ...formData,
              [item.name]: filteredArr,
            });
          }}
        >
          {item.options.map((opt) => {
            return (
              <>
                <InputCheckbox
                  onChange={() => console.log("change")}
                  opt={opt}
                  checked={formData[item.name].includes(opt)}
                  key={item.name}
                  name={item.name}
                  type={item.type}
                  value={opt}
                ></InputCheckbox>
              </>
            );
          })}
        </div>
        <ErrorMessage>{errors[item.name]}</ErrorMessage>
      </>
    );
  };

  return (
    <Form>
      {fields.map((item) => {
        if (item.type === "radio") {
          return getRadioInputs(item);
        }
        if (item.type === "checkbox") {
          return getCheckboxInputs(item);
        }
        return (
          <>
            <h3 key={item.label}>
              {item.label}
              <InputText
                placeholder={item.placeholder}
                name={item.name}
                onChange={(e) =>
                  setFormData({ ...formData, [item.name]: e.target.value })
                }
                key={item.name}
                type={item.type}
                value={formData[item.name]}
              ></InputText>
            </h3>
            <ErrorMessage>{errors[item.name]}</ErrorMessage>
          </>
        );
      })}
    </Form>
  );
};
export default Page2;
