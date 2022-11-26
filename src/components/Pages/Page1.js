import React from "react";
import Form from "../Form/Form";
import InputText from "../InputText/Input";
import { settings } from "../../Helpers/formSettings";

const Page1 = ({ formData, setFormData, errors }) => {
  console.log();
  return (
    <Form>
      {settings[0].map((item) => (
        <>
          <label key={item.name}>{item.label} </label>
          <InputText
            placeholder={item.placeholder}
            name={item.name}
            onChange={(e) =>
              setFormData({ ...formData, [item.name]: e.target.value })
            }
            value={formData[item.name]}
            required={item.isRequired}
            type={item.type}
          ></InputText>
          <p>{errors[item.name]}</p>
        </>
      ))}
    </Form>
  );
};
export default Page1;
