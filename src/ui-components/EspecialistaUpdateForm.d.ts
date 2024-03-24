/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Especialista } from "../models";
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
export declare type EspecialistaUpdateFormInputValues = {
    nome?: string;
};
export declare type EspecialistaUpdateFormValidationValues = {
    nome?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EspecialistaUpdateFormOverridesProps = {
    EspecialistaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EspecialistaUpdateFormProps = React.PropsWithChildren<{
    overrides?: EspecialistaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    especialista?: Especialista;
    onSubmit?: (fields: EspecialistaUpdateFormInputValues) => EspecialistaUpdateFormInputValues;
    onSuccess?: (fields: EspecialistaUpdateFormInputValues) => void;
    onError?: (fields: EspecialistaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EspecialistaUpdateFormInputValues) => EspecialistaUpdateFormInputValues;
    onValidate?: EspecialistaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EspecialistaUpdateForm(props: EspecialistaUpdateFormProps): React.ReactElement;
