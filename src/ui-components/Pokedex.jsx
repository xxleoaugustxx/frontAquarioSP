/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Image, View } from "@aws-amplify/ui-react";
export default function Pokedex(props) {
  const { overrides, ...rest } = props;
  const trendingPokedexPngCommaTransparentPngOpenParenthesisOneSixNineZeroxOneTwoZeroSevenCloseParenthesisPinPngOneOnClick =
    useNavigateAction({ type: "url", url: "/create" });
  return (
    <View
      width="64px"
      height="49px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Pokedex")}
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
        src="https://raw.githubusercontent.com/xxleoaugustxx/aquariosp/main/Trending%20-%20Pokedex%20Png%2C%20Transparent%20Png(1690x1207)%20-%20PinPng.png"
        onClick={() => {
          trendingPokedexPngCommaTransparentPngOpenParenthesisOneSixNineZeroxOneTwoZeroSevenCloseParenthesisPinPngOneOnClick();
        }}
        {...getOverrideProps(
          overrides,
          "Trending - Pokedex Png, Transparent Png(1690x1207) - PinPng 1"
        )}
      ></Image>
    </View>
  );
}
