/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Overview(props) {
  const { animal, overrides, ...rest } = props;
  return (
    <View
      width="349px"
      height="250px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Overview")}
      {...rest}
    >
      <View
        width="349px"
        height="250px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="50px"
        padding="0px 0px 0px 0px"
        backgroundColor={animal?.cor}
        {...getOverrideProps(overrides, "Rectangle 1168")}
      ></View>
      <Image
        width="52.72%"
        height="75.2%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="18.4%"
        bottom="6.4%"
        left="43.27%"
        right="4.01%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={animal?.imagem}
        {...getOverrideProps(overrides, "pregui\u00E7a 3")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="29.045454025268555px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="142px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18.4%"
        bottom="70%"
        left="7.16%"
        right="52.15%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={animal?.nome}
        {...getOverrideProps(overrides, "Manaus")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="18.15340805053711px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="30%"
        bottom="62.8%"
        left="7.16%"
        right="60.17%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={animal?.nome}
        {...getOverrideProps(overrides, "Bicho-Pregui\u00E7a")}
      ></Text>
      <View
        width="77px"
        height="23px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="50.8%"
        bottom="40%"
        left="7.16%"
        right="70.77%"
        borderRadius="50px"
        padding="0px 0px 0px 0px"
        backgroundColor={
          animal?.alimentacao == "Herbivoro" ? "#41B507" : "#CD2D0A"
        }
        {...getOverrideProps(overrides, "Rectangle 1169")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="113px"
        height="23px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="52%"
        bottom="38.8%"
        left="9.46%"
        right="58.17%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={animal?.alimentacao}
        {...getOverrideProps(overrides, "Herbivoro")}
      ></Text>
    </View>
  );
}
