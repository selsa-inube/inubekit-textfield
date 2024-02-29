import styled from "styled-components";

import { typography } from "./typography";
import { inube } from "@inubekit/foundations";

const $setBackgroundColor = ({ $readOnly }) =>
  $readOnly && inube.label.content.color.regular;

export const StyledContainer = styled.div`
  cursor: ${({ $disabled }) => $disabled && "not-allowed"};
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "280px")};
`;

export const StyledContainerLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  pointer-events: ${({ $disabled }) => $disabled && "none"};
`;

export const StyledInputContainer = styled.div`
  display: grid;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  user-select: none;
  padding-left: 16px;
  padding-right: 16px;
  pointer-events: ${({ $disabled }) => $disabled && "none"};
  opacity: ${({ $disabled }) => $disabled && "0.5"};
  background-color: ${$setBackgroundColor};
  grid-template-columns: ${({ $iconBefore, $iconAfter }) => {
    if ($iconBefore && $iconAfter) {
      return "auto 1fr auto";
    }

    if ($iconBefore && !$iconAfter) {
      return "auto 1fr";
    }

    if (!$iconBefore && $iconAfter) {
      return "1fr auto";
    }

    return "1fr";
  }};
  border: 1px solid
    ${({ $disabled, $status, $focused, theme }) => {
      if ($disabled) {
        return (
          theme?.label?.content?.color?.disabled ||
          inube.label.content.color.disabled
        );
      }

      if ($status === "invalid") {
        return (
          theme?.label?.content?.color?.invalid ||
          inube.label.content.color.invalid
        );
      }

      if ($focused) {
        return (
          theme?.label?.content?.color?.focus || inube.label.content.color.focus
        );
      }
      return (
        theme?.label?.content?.color?.regular ||
        inube.label.content.color.regular
      );
    }};
`;

export const StyledInput = styled.input`
  outline: none;
  border-radius: 8px;
  font-family: ${typography.body.large.font};
  font-size: ${typography.body.large.size};
  font-weight: ${typography.body.large.weight};
  line-height: ${typography.body.large.lineHeight};
  letter-spacing: ${typography.body.large.tracking};
  background-color: ${$setBackgroundColor};
  color: ${({ $disabled, theme }) =>
    $disabled
      ? theme?.text?.gray?.content?.color?.disabled ||
        inube.text.gray.content.color.disabled
      : theme?.text?.dark?.content?.color?.regular ||
        inube.text.dark.content.color.regular};

  width: ${({ $fullwidth }) => $fullwidth && "100%"};
  height: ${({ $size }) => ($size === "compact" ? "40px" : "48px")};

  border: none;
  &[type="number"] {
    appearance: textfield;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
  }
  ::placeholder {
    color: ${({ theme }) =>
      theme?.text?.gray?.content?.color?.regular ||
      inube.text.gray.content.color.regular};
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-moz-search-cancel-button {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledMessageContainer = styled.div`
  pointer-events: none;
  color: ${({ $disabled, $status, theme }) => {
    if ($disabled) {
      return (
        theme?.text?.gray?.content?.color?.disabled ||
        inube.text.gray.content.color.disabled
      );
    }

    if ($status === "valid") {
      return (
        theme?.text?.success?.content?.color?.regular ||
        inube.text.success.content.color.regular
      );
    }

    if ($status === "invalid") {
      return (
        theme?.text?.danger?.content?.color?.regular ||
        inube.text.danger.content.color.regular
      );
    }
  }};
`;
