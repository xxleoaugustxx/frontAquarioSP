/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Animal, Especialista } from "../models";
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
export declare type FlorestaOverridesProps = {
    Floresta?: PrimitiveOverrideProps<ViewProps>;
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
    loriem38463965?: PrimitiveOverrideProps<TextProps>;
    loriem38463966?: PrimitiveOverrideProps<TextProps>;
    loriem38463967?: PrimitiveOverrideProps<TextProps>;
    loriem38463972?: PrimitiveOverrideProps<TextProps>;
    "loriem epsilum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"?: PrimitiveOverrideProps<TextProps>;
    loriem38463969?: PrimitiveOverrideProps<TextProps>;
    loriem38463970?: PrimitiveOverrideProps<TextProps>;
    Herbivoro?: PrimitiveOverrideProps<TextProps>;
    "#001"?: PrimitiveOverrideProps<TextProps>;
    Manaus?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FlorestaProps = React.PropsWithChildren<Partial<ViewProps> & {
    animal?: Animal;
    especialista?: Especialista;
} & {
    overrides?: FlorestaOverridesProps | undefined | null;
}>;
export default function Floresta(props: FlorestaProps): React.ReactElement;
