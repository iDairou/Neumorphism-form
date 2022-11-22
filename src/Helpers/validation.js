import { settings } from "./formSettings";
const getItemsToValidate = () => {
  let itemsToValidate = [];
  settings.filter((item) =>
    item.forEach((item) => (item.pattern ? itemsToValidate.push(item) : null))
  );
  return itemsToValidate;
};

export const checkValidation = (state) => {
  let wrongValues = [];
  getItemsToValidate().forEach(({ name, isRequired, pattern, error }) => {
    const value = state[name];
    if (isRequired) {
      if (pattern) {
        if (!pattern.test(value)) {
          wrongValues.push(error);
        }
      }
      
    }
  });
  return wrongValues;
};
