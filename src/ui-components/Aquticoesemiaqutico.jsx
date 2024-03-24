/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import AridoeSemiArido from "./AridoeSemiArido";
import { Image, View } from "@aws-amplify/ui-react";
export default function Aquticoesemiaqutico(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="349px"
      height="635px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Aquticoesemiaqutico")}
      {...rest}
    >
      <AridoeSemiArido
        width="349px"
        height="635px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Arido e Semi-Arido")}
      ></AridoeSemiArido>
      <Image
        width="48.42%"
        height="26.93%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="12.28%"
        bottom="60.79%"
        left="25.79%"
        right="25.79%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "varanus 1")}
      ></Image>
    </View>
  );
}
