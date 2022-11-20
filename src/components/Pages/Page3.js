import React from "react";
import Form from "../Form/Form";
import { settings } from "../../Helpers/formSettings";
import Textarea from "../Textarea/Textarea";

const Page3 = ({ formData, setFormData }) => {
  return (
    <Form>
      {settings[2].map((item) => {
        return (
          <>
            <label htmlFor={item.name} key={item.name}>
              {item.label}
            </label>
            <Textarea
              value={formData[item.name]}
              onChange={(e) =>
                setFormData({ ...formData, [item.name]: e.target.value })
              }
              name={item.name}
            ></Textarea>
          </>
        );
      })}
    </Form>
  );
};
export default Page3;
