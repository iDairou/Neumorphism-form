export const validate = (settings, values) => {
  const errors = {};
  settings.forEach(({ name, isRequired, error, pattern }) => {
    const value = values[name];
    console.log(value);
    if ((isRequired && value.length === 0) || value === 0) {
      errors[name] = error;
    }
  });
  return errors;
};
