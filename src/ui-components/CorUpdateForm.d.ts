/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Cor } from "../models";
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
export declare type CorUpdateFormInputValues = {
    cor?: string;
};
export declare type CorUpdateFormValidationValues = {
    cor?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CorUpdateFormOverridesProps = {
    CorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cor?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CorUpdateFormProps = React.PropsWithChildren<{
    overrides?: CorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cor?: Cor;
    onSubmit?: (fields: CorUpdateFormInputValues) => CorUpdateFormInputValues;
    onSuccess?: (fields: CorUpdateFormInputValues) => void;
    onError?: (fields: CorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CorUpdateFormInputValues) => CorUpdateFormInputValues;
    onValidate?: CorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CorUpdateForm(props: CorUpdateFormProps): React.ReactElement;
