/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EspecialistaCreateFormInputValues = {
    nome?: string;
};
export declare type EspecialistaCreateFormValidationValues = {
    nome?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EspecialistaCreateFormOverridesProps = {
    EspecialistaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EspecialistaCreateFormProps = React.PropsWithChildren<{
    overrides?: EspecialistaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EspecialistaCreateFormInputValues) => EspecialistaCreateFormInputValues;
    onSuccess?: (fields: EspecialistaCreateFormInputValues) => void;
    onError?: (fields: EspecialistaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EspecialistaCreateFormInputValues) => EspecialistaCreateFormInputValues;
    onValidate?: EspecialistaCreateFormValidationValues;
} & React.CSSProperties>;
export default function EspecialistaCreateForm(props: EspecialistaCreateFormProps): React.ReactElement;
