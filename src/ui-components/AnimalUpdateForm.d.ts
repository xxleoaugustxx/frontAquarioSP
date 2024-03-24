/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Animal } from "../models";
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
export declare type AnimalUpdateFormInputValues = {
    nome?: string;
    registro?: string;
    idade?: number;
    especie?: string;
    temperaturaIdeal?: number;
    bpmIdeal?: number;
    habitat?: string;
    imagem?: string;
    comentarios?: string;
    grupo?: string;
    cor?: string;
    corG?: string;
};
export declare type AnimalUpdateFormValidationValues = {
    nome?: ValidationFunction<string>;
    registro?: ValidationFunction<string>;
    idade?: ValidationFunction<number>;
    especie?: ValidationFunction<string>;
    temperaturaIdeal?: ValidationFunction<number>;
    bpmIdeal?: ValidationFunction<number>;
    habitat?: ValidationFunction<string>;
    imagem?: ValidationFunction<string>;
    comentarios?: ValidationFunction<string>;
    grupo?: ValidationFunction<string>;
    cor?: ValidationFunction<string>;
    corG?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnimalUpdateFormOverridesProps = {
    AnimalUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
    registro?: PrimitiveOverrideProps<TextFieldProps>;
    idade?: PrimitiveOverrideProps<TextFieldProps>;
    especie?: PrimitiveOverrideProps<TextFieldProps>;
    temperaturaIdeal?: PrimitiveOverrideProps<TextFieldProps>;
    bpmIdeal?: PrimitiveOverrideProps<TextFieldProps>;
    habitat?: PrimitiveOverrideProps<TextFieldProps>;
    imagem?: PrimitiveOverrideProps<TextFieldProps>;
    comentarios?: PrimitiveOverrideProps<TextFieldProps>;
    grupo?: PrimitiveOverrideProps<TextFieldProps>;
    cor?: PrimitiveOverrideProps<TextFieldProps>;
    corG?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnimalUpdateFormProps = React.PropsWithChildren<{
    overrides?: AnimalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    animal?: Animal;
    onSubmit?: (fields: AnimalUpdateFormInputValues) => AnimalUpdateFormInputValues;
    onSuccess?: (fields: AnimalUpdateFormInputValues) => void;
    onError?: (fields: AnimalUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnimalUpdateFormInputValues) => AnimalUpdateFormInputValues;
    onValidate?: AnimalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AnimalUpdateForm(props: AnimalUpdateFormProps): React.ReactElement;
