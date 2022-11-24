import React from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { settings } from "../../Helpers/formSettings";

const Page1 = ({ formData, setFormData, errors }) => {
  console.log();
  return (
    <Form>
      {settings[0].map((item) => (
        <>
          <label key={item.name}>{item.label} </label>
          <Input
            pattern={item.pattern}
            placeholder={item.placeholder}
            name={item.name}
            onChange={(e) =>
              setFormData({ ...formData, [item.name]: e.target.value })
            }
            value={formData[item.name]}
            required={item.isRequired}
            type={item.type}
          ></Input>
          <p>{errors[item.name]}</p>
        </>
      ))}
    </Form>
  );
};
export default Page1;
