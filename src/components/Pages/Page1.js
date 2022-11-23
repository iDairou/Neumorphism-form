import React from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { settings } from "../../Helpers/formSettings";

const Page1 = ({ formData, setFormData, errors }) => {
  console.log(errors);
  return (
    <Form>
      {settings[0].map((item) => (
        <label key={item.name}>
          {item.label}
          <Input
            name={item.name}
            onChange={(e) =>
              setFormData({ ...formData, [item.name]: e.target.value })
            }
            value={formData[item.name]}
            required={item.isRequired}
            type={item.type}
          ></Input>
          <div>{errors[item.name]}</div>
        </label>
      ))}
    </Form>
  );
};
export default Page1;
