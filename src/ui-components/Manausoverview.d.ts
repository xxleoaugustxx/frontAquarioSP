/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Animal, Cor } from "../models";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ManausoverviewOverridesProps = {
    Manausoverview?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1167"?: PrimitiveOverrideProps<ViewProps>;
    "pregui\u00E7a 2"?: PrimitiveOverrideProps<ImageProps>;
    Manaus?: PrimitiveOverrideProps<TextProps>;
    "Bicho-Pregui\u00E7a"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1165"?: PrimitiveOverrideProps<ViewProps>;
    Herbivoro?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ManausoverviewProps = React.PropsWithChildren<Partial<ViewProps> & {
    animal?: Animal;
    cor?: Cor;
} & {
    overrides?: ManausoverviewOverridesProps | undefined | null;
}>;
export default function Manausoverview(props: ManausoverviewProps): React.ReactElement;
