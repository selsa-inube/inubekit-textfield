import { props, parameters } from "../props";
import { Textfield, ITextfield } from "..";
import { TextfieldController } from "./TextfieldController";

const story = {
  title: "inputs/Textfield",
  components: [Textfield],
  parameters,
  argTypes: props,
};

const Default = (args: ITextfield) => <TextfieldController {...args} />;
Default.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  placeholder: "Write your full name",
  value: "",
  size: "wide",
  disabled: false,
  required: false,
  type: "text",
  message: "",
  fullwidth: false,
};

export default story;

export { Default };
