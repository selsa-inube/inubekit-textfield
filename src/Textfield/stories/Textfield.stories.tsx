import { props, parameters } from "../props";
import { Textfield, ITextfieldProps } from "..";
import { TextfieldController } from "./TextfieldController";

const story = {
  title: "inputs/Textfield",
  components: [Textfield],
  parameters,
  argTypes: props,
};

export const Default = (args: ITextfieldProps) => (
  <TextfieldController {...args} />
);
Default.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  placeholder: "Write your full name",
  value: "",
  size: "wide",
  readOnly: false,
  disabled: false,
  required: false,
  type: "text",
  message: "",
  fullwidth: false,
};

export default story;
