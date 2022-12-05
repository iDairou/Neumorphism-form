import React from "react";
import Form from "../FormView/FormView";
import Textarea from "../Textarea/Textarea";
import ErrorMessage from "../ErrorMessage/ErrorMassage";
const Page3 = ({ formData, setFormData, errors, fields }) => {
  return (
    <Form>
      {fields.map((item) => {
        return (
          <>
            <label htmlFor={item.name} key={item.name}>
              {item.label}
            </label>
            <Textarea
              placeholder={item.placeholder}
              value={formData[item.name]}
              onChange={(e) =>
                setFormData({ ...formData, [item.name]: e.target.value })
              }
              name={item.name}
            ></Textarea>
            <p>{formData[item.name].length}/500</p>
            <ErrorMessage>{errors[item.name]}</ErrorMessage>
          </>
        );
      })}
    </Form>
  );
};
export default Page3;
