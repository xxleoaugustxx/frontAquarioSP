/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Animal } from "../models";
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
export declare type AnimalOverridesProps = {
    Animal?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1166"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1165"?: PrimitiveOverrideProps<ViewProps>;
    "pregui\u00E7a 1"?: PrimitiveOverrideProps<ImageProps>;
    "Bicho-Pregui\u00E7a"?: PrimitiveOverrideProps<TextProps>;
    Sobre?: PrimitiveOverrideProps<TextProps>;
    Especie?: PrimitiveOverrideProps<TextProps>;
    Idade?: PrimitiveOverrideProps<TextProps>;
    Habitat?: PrimitiveOverrideProps<TextProps>;
    Especialista?: PrimitiveOverrideProps<TextProps>;
    "Coment\u00E1rios"?: PrimitiveOverrideProps<TextProps>;
    "Temperatura Ideal"?: PrimitiveOverrideProps<TextProps>;
    "BPM Ideal"?: PrimitiveOverrideProps<TextProps>;
    loriem38872173?: PrimitiveOverrideProps<TextProps>;
    loriem38872174?: PrimitiveOverrideProps<TextProps>;
    loriem38872175?: PrimitiveOverrideProps<TextProps>;
    loriem38872176?: PrimitiveOverrideProps<TextProps>;
    Peso?: PrimitiveOverrideProps<TextProps>;
    loriem38872178?: PrimitiveOverrideProps<TextProps>;
    Tamanho?: PrimitiveOverrideProps<TextProps>;
    loriem38872180?: PrimitiveOverrideProps<TextProps>;
    loriem38872181?: PrimitiveOverrideProps<TextProps>;
    loriem38872182?: PrimitiveOverrideProps<TextProps>;
    loriem38872183?: PrimitiveOverrideProps<TextProps>;
    Herbivoro?: PrimitiveOverrideProps<TextProps>;
    "#001"?: PrimitiveOverrideProps<TextProps>;
    Manaus?: PrimitiveOverrideProps<TextProps>;
    X?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AnimalProps = React.PropsWithChildren<Partial<ViewProps> & {
    animal?: Animal;
} & {
    overrides?: AnimalOverridesProps | undefined | null;
}>;
export default function Animal(props: AnimalProps): React.ReactElement;
