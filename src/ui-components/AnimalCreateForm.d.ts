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
export declare type AnimalCreateFormInputValues = {
    nome?: string;
    registro?: string;
    idade?: number;
    especie?: string;
    temperaturaIdeal?: number;
    bpmIdeal?: number;
    habitat?: string;
    imagem?: string;
    comentarios?: string;
    alimentacao?: string;
    cor?: string;
    especialista?: string;
    tamanho?: string;
    peso?: string;
};
export declare type AnimalCreateFormValidationValues = {
    nome?: ValidationFunction<string>;
    registro?: ValidationFunction<string>;
    idade?: ValidationFunction<number>;
    especie?: ValidationFunction<string>;
    temperaturaIdeal?: ValidationFunction<number>;
    bpmIdeal?: ValidationFunction<number>;
    habitat?: ValidationFunction<string>;
    imagem?: ValidationFunction<string>;
    comentarios?: ValidationFunction<string>;
    alimentacao?: ValidationFunction<string>;
    cor?: ValidationFunction<string>;
    especialista?: ValidationFunction<string>;
    tamanho?: ValidationFunction<string>;
    peso?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnimalCreateFormOverridesProps = {
    AnimalCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
    registro?: PrimitiveOverrideProps<TextFieldProps>;
    idade?: PrimitiveOverrideProps<TextFieldProps>;
    especie?: PrimitiveOverrideProps<TextFieldProps>;
    temperaturaIdeal?: PrimitiveOverrideProps<TextFieldProps>;
    bpmIdeal?: PrimitiveOverrideProps<TextFieldProps>;
    habitat?: PrimitiveOverrideProps<TextFieldProps>;
    imagem?: PrimitiveOverrideProps<TextFieldProps>;
    comentarios?: PrimitiveOverrideProps<TextFieldProps>;
    alimentacao?: PrimitiveOverrideProps<TextFieldProps>;
    cor?: PrimitiveOverrideProps<TextFieldProps>;
    especialista?: PrimitiveOverrideProps<TextFieldProps>;
    tamanho?: PrimitiveOverrideProps<TextFieldProps>;
    peso?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnimalCreateFormProps = React.PropsWithChildren<{
    overrides?: AnimalCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnimalCreateFormInputValues) => AnimalCreateFormInputValues;
    onSuccess?: (fields: AnimalCreateFormInputValues) => void;
    onError?: (fields: AnimalCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnimalCreateFormInputValues) => AnimalCreateFormInputValues;
    onValidate?: AnimalCreateFormValidationValues;
} & React.CSSProperties>;
export default function AnimalCreateForm(props: AnimalCreateFormProps): React.ReactElement;
