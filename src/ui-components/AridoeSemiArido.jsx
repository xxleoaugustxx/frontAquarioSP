/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Floresta from "./Floresta";
import { Image, View } from "@aws-amplify/ui-react";
export default function AridoeSemiArido(props) {
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
      {...getOverrideProps(overrides, "AridoeSemiArido")}
      {...rest}
    >
      <Floresta
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
        {...getOverrideProps(overrides, "Floresta")}
      ></Floresta>
      <Image
        width="49.28%"
        height="26.93%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="12.28%"
        bottom="60.79%"
        left="26.65%"
        right="24.07%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "jabuti 1")}
      ></Image>
    </View>
  );
}
