// @flow
import React, { type Node } from 'react';
import { CrossIcon } from './indicators';
import classnames from 'classnames';
import type { CommonProps } from '../types';

export type MultiValueProps = CommonProps & {
  children: Node,
  components: any,
  cropWithEllipsis: boolean,
  data: any,
  innerProps: any,
  isFocused: boolean,
  isDisabled: boolean,
  removeProps: {
    onTouchEnd: any => void,
    onClick: any => void,
    onMouseDown: any => void,
  },
};

export const multiValueCSS = ({
  theme: { spacing, borderRadius, colors },
}: MultiValueProps) => ({
  label: 'multiValue',
  backgroundColor: colors.neutral10,
  borderRadius: borderRadius / 2,
  display: 'flex',
  margin: spacing.baseUnit / 2,
  minWidth: 0, // resolves flex/text-overflow bug
});

export const multiValueLabelCSS = ({
  theme: { borderRadius, colors },
  cropWithEllipsis,
}: MultiValueProps) => ({
  borderRadius: borderRadius / 2,
  color: colors.neutral80,
  fontSize: '85%',
  overflow: 'hidden',
  padding: 3,
  paddingLeft: 6,
  textOverflow: cropWithEllipsis ? 'ellipsis' : null,
  whiteSpace: 'nowrap',
});

export const multiValueRemoveCSS = ({
  theme: { spacing, borderRadius, colors },
  isFocused,
}: MultiValueProps) => ({
  alignItems: 'center',
  borderRadius: borderRadius / 2,
  backgroundColor: isFocused && colors.dangerLight,
  display: 'flex',
  paddingLeft: spacing.baseUnit,
  paddingRight: spacing.baseUnit,
  ':hover': {
    backgroundColor: colors.dangerLight,
    color: colors.danger,
  },
});

export type MultiValueGenericProps = {
  children: Node,
  data: any,
  innerProps: { className?: string },
  selectProps: any,
};
export const MultiValueGeneric = ({
  children,
  innerProps,
}: MultiValueGenericProps) => <div {...innerProps}>{children}</div>;

export const MultiValueContainer = MultiValueGeneric;
export const MultiValueLabel = MultiValueGeneric;
export type MultiValueRemoveProps = {
  children: Node,
  data: any,
  innerProps: {
    className: string,
    onTouchEnd: any => void,
    onClick: any => void,
    onMouseDown: any => void,
  },
  selectProps: any,
};
export function MultiValueRemove({
  children,
  innerProps,
}: MultiValueRemoveProps) {
  return <div {...innerProps}>{children || <CrossIcon size={14} />}</div>;
}

const MultiValue = (props: MultiValueProps) => {
  const {
    children,
    className,
    components,
    cx,
    data,
    getStyles,
    innerProps,
    isDisabled,
    removeProps,
    selectProps,
  } = props;

  const { Container, Label, Remove } = components;

  return (
    <Container
      data={data}
      innerProps={{
        className: classnames(
          classnames(getStyles('multiValue', props)),
          cx(
            {
              'multi-value': true,
              'multi-value--is-disabled': isDisabled,
            },
            className
          )
        ),
        ...innerProps,
      }}
      selectProps={selectProps}
    >
      <Label
        data={data}
        innerProps={{
          className: classnames(
            classnames(getStyles('multiValueLabel', props)),
            classnames(
              {
                'multi-value__label': true,
              },
              className
            )
          ),
        }}
        selectProps={selectProps}
      >
        {children}
      </Label>
      <Remove
        data={data}
        innerProps={{
          className: classnames(
            classnames(getStyles('multiValueRemove', props)),
            classnames(
              {
                'multi-value__remove': true,
              },
              className
            )
          ),
          ...removeProps,
        }}
        selectProps={selectProps}
      />
    </Container>
  );
};

MultiValue.defaultProps = {
  cropWithEllipsis: true,
};

export default MultiValue;
