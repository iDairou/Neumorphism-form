import React from "react";
import Form from "../Form/Form";
import { settings } from "../../Helpers/formSettings";
import Textarea from "../Textarea/Textarea";

const Page3 = () => {
  return (
    <Form>
      {settings[2].map((item) => {
        return (
          <>
            <label htmlFor={item.name} key={item.name}>
              {item.label}
            </label>
            <Textarea name={item.name}></Textarea>
          </>
        );
      })}
    </Form>
  );
};
export default Page3;
