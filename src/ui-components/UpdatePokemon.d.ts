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
export declare type UpdatePokemonOverridesProps = {
    UpdatePokemon?: PrimitiveOverrideProps<ViewProps>;
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
    TextField38851624?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38851625?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38851626?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38851627?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38851628?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38851629?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38851630?: PrimitiveOverrideProps<TextFieldProps>;
    "Group 8"?: PrimitiveOverrideProps<ViewProps>;
    Peso?: PrimitiveOverrideProps<TextProps>;
    TextField38851633?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38851634?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38851635?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38851636?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38851637?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38851638?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38851639?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38851640?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38851641?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38851642?: PrimitiveOverrideProps<TextFieldProps>;
    "Group 9"?: PrimitiveOverrideProps<ViewProps>;
    "Coment\u00E1rios"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UpdatePokemonProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UpdatePokemonOverridesProps | undefined | null;
}>;
export default function UpdatePokemon(props: UpdatePokemonProps): React.ReactElement;
