import { useState } from "react";

import { Textfield, ITextfield } from "..";

const TextfieldController = (props: ITextfield) => {
  const { value = "", status = "pending" } = props;
  const [form, setForm] = useState({ value, status });

  function isAlphabetical(value: string) {
    return /^[a-zA-Z]+$/.test(value);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ value: e.target.value, status: "pending" });
  };

  const onFocus = () => {
    if (form.status === "invalid") {
      return setForm({ ...form, status: "invalid" });
    }
    setForm({ ...form, status: "pending" });
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = isAlphabetical(e.target.value);
    setForm({ ...form, status: isValid ? "valid" : "invalid" });
  };

  const message =
    form.status === "valid"
      ? "The field has been successfully validated"
      : "(Please enter only letters in this field)";

  return (
    <Textfield
      {...props}
      value={form.value}
      onChange={onChange}
      status={form.status}
      onFocus={onFocus}
      onBlur={onBlur}
      message={message}
    />
  );
};

export { TextfieldController };
