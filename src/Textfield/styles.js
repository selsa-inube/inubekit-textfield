import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const StyledContainer = styled.div`
  cursor: ${({ $disabled }) => $disabled && "not-allowed"};
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "280px")};
`;

const StyledContainerLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  pointer-events: ${({ $disabled }) => $disabled && "none"};
`;

const StyledInputContainer = styled.div`
  display: grid;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  user-select: none;
  padding-left: 16px;
  padding-right: 16px;
  pointer-events: ${({ $disabled }) => $disabled && "none"};
  opacity: ${({ $disabled }) => $disabled && "0.5"};
  background-color: ${({ $disabled, theme }) =>
    $disabled
      ? theme?.input?.background?.color?.disabled
      : inube.input.background.color.default};
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
          theme?.input?.border?.color?.disabled ||
          inube.input.border.color.disabled
        );
      }

      if ($status === "invalid") {
        return (
          theme?.input?.border?.color?.invalid ||
          inube.input.border.color.invalid
        );
      }

      if ($focused) {
        return (
          theme?.input?.border?.color?.focus || inube.input.border.color.focus
        );
      }
      return (
        theme?.input?.border?.color?.regular || inube.input.border.color.regular
      );
    }};
`;

const StyledInput = styled.input`
  outline: none;
  border-radius: 8px;
  font-family: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.font};
  font-size: ${inube.typography.body.large.size};
  font-weight: 400;
  line-height: ${inube.typography.body.large.lineHeight};
  letter-spacing: ${inube.typography.body.large.tracking};
  background-color: ${({ $disabled, theme }) =>
    $disabled
      ? theme?.input?.background?.color?.disabled
      : inube.input.background.color.default};
  color: ${({ $disabled, theme }) =>
    $disabled
      ? theme?.input?.content?.color?.disabled ||
        inube.input.content.color.disabled
      : theme?.input?.content?.color?.regular ||
        inube.input.content.color.regular};

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
      theme?.input?.placeholder?.color?.regular ||
      inube.input.placeholder.color.regular};
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

const StyledMessageContainer = styled.div`
  margin-top: 4px;
  pointer-events: none;
`;

export {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledMessageContainer,
};
