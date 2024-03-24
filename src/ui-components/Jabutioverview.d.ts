/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type JabutioverviewOverridesProps = {
    "6"?: PrimitiveOverrideProps<TextProps>;
    Jabutioverview?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1168"?: PrimitiveOverrideProps<ViewProps>;
    Jabuti?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1169"?: PrimitiveOverrideProps<ViewProps>;
    Herbivoro?: PrimitiveOverrideProps<TextProps>;
    "jabuti 2"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type JabutioverviewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: JabutioverviewOverridesProps | undefined | null;
}>;
export default function Jabutioverview(props: JabutioverviewProps): React.ReactElement;
