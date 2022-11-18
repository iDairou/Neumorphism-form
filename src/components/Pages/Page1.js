import React from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { settings } from "../../Helpers/formSettings";

const Page1 = () => {
  return (
    <Form>
      {settings[0].map((item) => (
        <label key={item.name}>
          {item.label}
          <Input required={item.isRequired} type={item.type}></Input>
          <div>{item.error}</div>
        </label>
      ))}
    </Form>
  );
};
export default Page1;
