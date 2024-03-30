/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Image, View } from "@aws-amplify/ui-react";
export default function Pokebola(props) {
  const { overrides, ...rest } = props;
  const pokebolapokeballpngZeroOneOnClick = useNavigateAction({
    type: "url",
    url: "/create",
  });
  return (
    <View
      width="114px"
      height="112px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Pokebola")}
      {...rest}
    >
      <Image
        width="100%"
        height="100%"
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
        objectFit="cover"
        src="https://raw.githubusercontent.com/xxleoaugustxx/aquariosp/main/Pokebola-pokeball-png-0.png"
        onClick={() => {
          pokebolapokeballpngZeroOneOnClick();
        }}
        {...getOverrideProps(overrides, "Pokebola-pokeball-png-0 1")}
      ></Image>
    </View>
  );
}
