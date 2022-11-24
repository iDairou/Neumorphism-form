export const validate = (settings, values) => {
  const errors = {};
  settings.forEach(({ name, isRequired, error, pattern }) => {
    const value = values[name].trim();
    console.log(value, !pattern.test(value), pattern);
    if ((isRequired && value.length === 0) || !pattern.test(value)) {
      errors[name] = error;
    }
  });
  return errors;
};
