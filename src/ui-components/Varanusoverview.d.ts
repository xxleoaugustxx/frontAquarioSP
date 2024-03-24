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
export declare type VaranusoverviewOverridesProps = {
    Varanusoverview?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1170"?: PrimitiveOverrideProps<ViewProps>;
    Varanus?: PrimitiveOverrideProps<TextProps>;
    "Lagarto Monitor"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1171"?: PrimitiveOverrideProps<ViewProps>;
    Carnivoro?: PrimitiveOverrideProps<TextProps>;
    "varanus 2"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type VaranusoverviewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: VaranusoverviewOverridesProps | undefined | null;
}>;
export default function Varanusoverview(props: VaranusoverviewProps): React.ReactElement;
