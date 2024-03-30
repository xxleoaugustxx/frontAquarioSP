/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NewPokemonOverridesProps = {
    NewPokemon?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1166"?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    Especie?: PrimitiveOverrideProps<TextProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    Idade?: PrimitiveOverrideProps<TextProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Temperatura Ideal"?: PrimitiveOverrideProps<TextProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "BPM Ideal"?: PrimitiveOverrideProps<TextProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    Habitat?: PrimitiveOverrideProps<TextProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    Especialista?: PrimitiveOverrideProps<TextProps>;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    Tamanho?: PrimitiveOverrideProps<TextProps>;
    "charmander 1"?: PrimitiveOverrideProps<ImageProps>;
    "Trending - Pokedex Png, Transparent Png(1690x1207) - PinPng 1"?: PrimitiveOverrideProps<ImageProps>;
    TextField3881579?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3884670?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3884677?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3884705?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3884684?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3884691?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3884698?: PrimitiveOverrideProps<TextFieldProps>;
    "Group 8"?: PrimitiveOverrideProps<ViewProps>;
    Peso?: PrimitiveOverrideProps<TextProps>;
    TextField3884742?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3884605?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3884612?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3884631?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3884712?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3884719?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3884726?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3884733?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3884751?: PrimitiveOverrideProps<TextFieldProps>;
    "Group 9"?: PrimitiveOverrideProps<ViewProps>;
    "Coment\u00E1rios"?: PrimitiveOverrideProps<TextProps>;
    X?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NewPokemonProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NewPokemonOverridesProps | undefined | null;
}>;
export default function NewPokemon(props: NewPokemonProps): React.ReactElement;
