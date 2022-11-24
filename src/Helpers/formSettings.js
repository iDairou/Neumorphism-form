export const settings = [
  [
    {
      label: "First name",
      name: "firstName",
      type: "text",
      isRequired: true,
      pattern: /[a-zA-Z]{2,}/,
      error: "Wrong name",
      placeholder: "Your first name...",
    },
    {
      label: "Last name",
      name: "lastName",
      type: "text",
      isRequired: true,
      pattern: /[a-zA-Z]{2,}/,
      error: "Wrong surname!",
      placeholder: "Your last name...",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      isRequired: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      error: "Wrong email!",
      placeholder: "Your email...",
    },
    {
      label: "Phone number",
      name: "phone",
      type: "tel",
      isRequired: true,
      pattern: /[0-9]{3}-[0-9]{3}-[0-9]{3}/,
      error: "Wrong phone number!",
      placeholder: "Your phone number...",
    },
  ],

  [
    {
      label: `What's your programming experience in years?`,
      name: "years",
      type: "radio",
      isRequired: true,
      options: ["Less than 1 year", "1-2 years", "3-5 years", "Over 5 years"],
      error: "One option must be selected.",
    },
    {
      label: "Availability",
      name: "availability",
      type: "radio",
      isRequired: true,
      options: [
        "Currently available",
        "In 1 week",
        "In 1 month",
        "In 3 months",
      ],
      error: "One option must be selected.",
    },
    {
      label: "What framework/library are you similiar with on front-end?",
      name: "framework",
      isRequired: true,
      type: "checkbox",
      options: ["React", "Angular", "Vue"],
      error: "Atleast one option must be selected.",
    },

    {
      label: "Your financial expectations: (neeto)",
      name: "finance",
      type: "number",
      isRequired: true,
      error: "Pass on your salary expectations.",
    },
  ],
  [
    {
      label: `What do you value most about working together in a team?`,
      name: "team",
      type: "textarea",
      isRequired: true,
      pattern: "/^[A-Za-z0-9. ]{5,100}$/",
      error: "Wrong data",
      placeholder: "Write here...",
    },
    {
      label: `Do you wanna tell us more about yourself?`,
      name: "yourself",
      type: "textarea",
      isRequired: false,
      pattern: "/^[A-Za-z0-9. ]{5,100}$/",
      error: "Wrong data",
      placeholder: "Tell us more about yourself...",
    },
  ],
];
