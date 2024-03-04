import { useState } from "react";
import { MdOutlineWarning } from "react-icons/md";

import { Text } from "@inubekit/text";
import { Label } from "@inubekit/label";
import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";

import { InputType, Size, Status } from "./props";
import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledMessageContainer,
} from "./styles";

export interface ITextfield {
  label?: string;
  name?: string;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  type?: InputType;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  required?: boolean;
  status?: Status;
  message?: string;
  size?: Size;
  fullwidth?: boolean;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  focused?: boolean;
}

export const Textfield = (props: ITextfield) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled = false,
    type = "text",
    value,
    onChange,
    iconBefore,
    iconAfter,
    required = false,
    status = "pending",
    message,
    size = "wide",
    fullwidth = false,
    onFocus,
    onBlur,
  } = props;

  const [focused, setFocused] = useState(false);

  const interceptFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setFocused(true);
    }
    if (typeof onFocus === "function") {
      onFocus(e);
    }
  };

  const interceptBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(false);
    if (typeof onBlur === "function") {
      onBlur(e);
    }
  };

  return (
    <StyledContainer $fullwidth={fullwidth} $disabled={disabled} $size={size}>
      <StyledContainerLabel
        $alignItems="center"
        $wrap="wrap"
        $size={size}
        $disabled={disabled}
      >
        {label && (
          <Label
            htmlFor={id}
            disabled={disabled}
            focused={focused}
            invalid={status === "invalid" ? true : false}
            size={size === "compact" ? "medium" : "large"}
            margin="0px 0px 0px 16px"
          >
            {label}
          </Label>
        )}

        {required && !disabled && (
          <Text
            type="body"
            size="small"
            appearance="danger"
            margin="0px 0px 0px 4px"
            textAlign={"center"}
          >
            (Requerido)
          </Text>
        )}
      </StyledContainerLabel>

      <StyledInputContainer
        $disabled={disabled}
        $focused={focused}
        $status={status}
        $iconBefore={iconBefore}
        $iconAfter={iconAfter}
      >
        {iconBefore && (
          <Icon
            appearance="gray"
            disabled={disabled}
            icon={iconBefore}
            size={size === "compact" ? "18px" : "24px"}
            spacing="none"
          />
        )}

        <StyledInput
          label={label}
          name={name}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          value={value}
          $iconBefore={iconBefore}
          $iconAfter={iconAfter}
          $required={required}
          $size={size}
          $status={status}
          $fullwidth={fullwidth}
          $focused={focused}
          onChange={onChange}
          onFocus={interceptFocus}
          onBlur={interceptBlur}
        />

        {iconAfter && (
          <Icon
            appearance="gray"
            disabled={disabled}
            icon={iconAfter}
            size={size === "compact" ? "18px" : "24px"}
            spacing="none"
          />
        )}
      </StyledInputContainer>

      {status === "invalid" && !disabled && (
        <StyledMessageContainer disabled={disabled} $status={status}>
          <Stack alignItems="center" gap="4px" margin="5px 0 0 16px">
            <Icon
              appearance={"danger"}
              disabled={disabled}
              icon={<MdOutlineWarning />}
              size="14px"
            />
            <Text
              type="body"
              size="small"
              appearance={"danger"}
              disabled={disabled}
              textAlign={"center"}
            >
              {message && `${message}`}
            </Text>
          </Stack>
        </StyledMessageContainer>
      )}
    </StyledContainer>
  );
};
