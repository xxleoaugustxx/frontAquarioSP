/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useNavigateAction,
  useStateMutationAction,
} from "./utils";
import { Animal } from "../models";
import { schema } from "../models/schema";
import { Image, Text, TextField, View } from "@aws-amplify/ui-react";
export default function NewPokemon(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldThreeEightEightFourSixZeroFiveValue,
    setTextFieldThreeEightEightFourSixZeroFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightEightFourSevenThreeThreeValue,
    setTextFieldThreeEightEightFourSevenThreeThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightEightFourSixSevenZeroValue,
    setTextFieldThreeEightEightFourSixSevenZeroValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightEightOneFiveSevenNineValue,
    setTextFieldThreeEightEightOneFiveSevenNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightEightFourSevenZeroFiveValue,
    setTextFieldThreeEightEightFourSevenZeroFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightEightFourSixSevenSevenValue,
    setTextFieldThreeEightEightFourSixSevenSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightEightFourSixEightFourValue,
    setTextFieldThreeEightEightFourSixEightFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightEightFourSevenOneTwoValue,
    setTextFieldThreeEightEightFourSevenOneTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightEightFourSevenFiveOneValue,
    setTextFieldThreeEightEightFourSevenFiveOneValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightEightFourSixNineOneValue,
    setTextFieldThreeEightEightFourSixNineOneValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightEightFourSixNineEightValue,
    setTextFieldThreeEightEightFourSixNineEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightEightFourSevenFourTwoValue,
    setTextFieldThreeEightEightFourSevenFourTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightEightFourSevenOneNineValue,
    setTextFieldThreeEightEightFourSevenOneNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightEightFourSixThreeOneValue,
    setTextFieldThreeEightEightFourSixThreeOneValue,
  ] = useStateMutationAction("");
  const trendingPokedexPngCommaTransparentPngOpenParenthesisOneSixNineZeroxOneTwoZeroSevenCloseParenthesisPinPngOneOnClick =
    useDataStoreCreateAction({
      fields: {
        nome: textFieldThreeEightEightFourSixZeroFiveValue,
        registro: textFieldThreeEightEightFourSevenThreeThreeValue,
        idade: textFieldThreeEightEightFourSixSevenZeroValue,
        especie: textFieldThreeEightEightOneFiveSevenNineValue,
        temperaturaIdeal: textFieldThreeEightEightFourSevenZeroFiveValue,
        bpmIdeal: textFieldThreeEightEightFourSixSevenSevenValue,
        habitat: textFieldThreeEightEightFourSixEightFourValue,
        imagem: textFieldThreeEightEightFourSevenOneTwoValue,
        comentarios: textFieldThreeEightEightFourSevenFiveOneValue,
        especialista: textFieldThreeEightEightFourSixNineOneValue,
        tamanho: textFieldThreeEightEightFourSixNineEightValue,
        peso: textFieldThreeEightEightFourSevenFourTwoValue,
        cor: textFieldThreeEightEightFourSevenOneNineValue,
        alimentacao: textFieldThreeEightEightFourSixThreeOneValue,
      },
      model: Animal,
      schema: schema,
    });
  const xOnClick = useNavigateAction({ type: "url", url: "/" });
  return (
    <View
      width="349px"
      height="666px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NewPokemon")}
      {...rest}
    >
      <View
        width="349px"
        height="510.77px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="23.31%"
        left="0%"
        right="0%"
        borderRadius="50px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(10,140,196,1)"
        {...getOverrideProps(overrides, "Rectangle 1164")}
      ></View>
      <View
        width="349px"
        height="415px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="37.69%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="50px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(236,236,236,1)"
        {...getOverrideProps(overrides, "Rectangle 1166")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="68px"
        height="24.12px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="283px"
        left="21px"
        {...getOverrideProps(overrides, "Group 2")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="700"
          color="rgba(40,194,176,1)"
          lineHeight="18.15340805053711px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="68px"
          height="24.12px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Especie"
          {...getOverrideProps(overrides, "Especie")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="68px"
        height="24.12px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="325px"
        left="21px"
        {...getOverrideProps(overrides, "Group 1")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="700"
          color="rgba(40,194,176,1)"
          lineHeight="18.15340805053711px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="68px"
          height="24.12px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Idade"
          {...getOverrideProps(overrides, "Idade")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="147px"
        height="24.12px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="367px"
        left="21px"
        {...getOverrideProps(overrides, "Group 3")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="700"
          color="rgba(40,194,176,1)"
          lineHeight="18.15340805053711px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="147px"
          height="24.12px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Temperatura Ideal"
          {...getOverrideProps(overrides, "Temperatura Ideal")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="147px"
        height="24.12px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="409px"
        left="21px"
        {...getOverrideProps(overrides, "Group 4")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="700"
          color="rgba(40,194,176,1)"
          lineHeight="18.15340805053711px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="147px"
          height="24.12px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="BPM Ideal"
          {...getOverrideProps(overrides, "BPM Ideal")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="68px"
        height="24.12px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="451px"
        left="21px"
        {...getOverrideProps(overrides, "Group 5")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="700"
          color="rgba(40,194,176,1)"
          lineHeight="18.15340805053711px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="68px"
          height="24.12px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Habitat"
          {...getOverrideProps(overrides, "Habitat")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="105px"
        height="24.12px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="493px"
        left="21px"
        {...getOverrideProps(overrides, "Group 6")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="700"
          color="rgba(40,194,176,1)"
          lineHeight="18.15340805053711px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="105px"
          height="24.12px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Especialista"
          {...getOverrideProps(overrides, "Especialista")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="105px"
        height="24.12px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="535px"
        left="21px"
        {...getOverrideProps(overrides, "Group 7")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="700"
          color="rgba(40,194,176,1)"
          lineHeight="18.15340805053711px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="105px"
          height="24.12px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Tamanho"
          {...getOverrideProps(overrides, "Tamanho")}
        ></Text>
      </View>
      <Image
        width="45.85%"
        height="20.79%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="16.97%"
        bottom="62.25%"
        left="52.44%"
        right="1.72%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://raw.githubusercontent.com/xxleoaugustxx/aquariosp/main/charmander.gif"
        {...getOverrideProps(overrides, "charmander 1")}
      ></Image>
      <Image
        width="18.34%"
        height="7.72%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1.5%"
        bottom="90.78%"
        left="60.74%"
        right="20.92%"
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
      <TextField
        width="161px"
        height="35px"
        position="absolute"
        top="278px"
        left="173px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightEightOneFiveSevenNineValue}
        onChange={(event) => {
          setTextFieldThreeEightEightOneFiveSevenNineValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3881579")}
      ></TextField>
      <TextField
        width="161px"
        height="35px"
        position="absolute"
        top="320px"
        left="173px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightEightFourSixSevenZeroValue}
        onChange={(event) => {
          setTextFieldThreeEightEightFourSixSevenZeroValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3884670")}
      ></TextField>
      <TextField
        width="161px"
        height="35px"
        position="absolute"
        top="404px"
        left="173px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightEightFourSixSevenSevenValue}
        onChange={(event) => {
          setTextFieldThreeEightEightFourSixSevenSevenValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3884677")}
      ></TextField>
      <TextField
        width="161px"
        height="35px"
        position="absolute"
        top="362px"
        left="173px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightEightFourSevenZeroFiveValue}
        onChange={(event) => {
          setTextFieldThreeEightEightFourSevenZeroFiveValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3884705")}
      ></TextField>
      <TextField
        width="161px"
        height="35px"
        position="absolute"
        top="446px"
        left="173px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightEightFourSixEightFourValue}
        onChange={(event) => {
          setTextFieldThreeEightEightFourSixEightFourValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3884684")}
      ></TextField>
      <TextField
        width="161px"
        height="35px"
        position="absolute"
        top="488px"
        left="173px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightEightFourSixNineOneValue}
        onChange={(event) => {
          setTextFieldThreeEightEightFourSixNineOneValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3884691")}
      ></TextField>
      <TextField
        width="161px"
        height="35px"
        position="absolute"
        top="530px"
        left="173px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightEightFourSixNineEightValue}
        onChange={(event) => {
          setTextFieldThreeEightEightFourSixNineEightValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3884698")}
      ></TextField>
      <View
        padding="0px 0px 0px 0px"
        width="105px"
        height="24.12px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="577px"
        left="21px"
        {...getOverrideProps(overrides, "Group 8")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="700"
          color="rgba(40,194,176,1)"
          lineHeight="18.15340805053711px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="105px"
          height="24.12px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Peso"
          {...getOverrideProps(overrides, "Peso")}
        ></Text>
      </View>
      <TextField
        width="161px"
        height="35px"
        position="absolute"
        top="572px"
        left="173px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightEightFourSevenFourTwoValue}
        onChange={(event) => {
          setTextFieldThreeEightEightFourSevenFourTwoValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3884742")}
      ></TextField>
      <TextField
        width="147px"
        height="35px"
        position="absolute"
        top="23px"
        left="24px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightEightFourSixZeroFiveValue}
        onChange={(event) => {
          setTextFieldThreeEightEightFourSixZeroFiveValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3884605")}
      ></TextField>
      <TextField
        width="147px"
        height="35px"
        position="absolute"
        top="67px"
        left="24px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField3884612")}
      ></TextField>
      <TextField
        width="147px"
        height="35px"
        position="absolute"
        top="111px"
        left="24px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightEightFourSixThreeOneValue}
        onChange={(event) => {
          setTextFieldThreeEightEightFourSixThreeOneValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3884631")}
      ></TextField>
      <TextField
        width="147px"
        height="35px"
        position="absolute"
        top="155px"
        left="24px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightEightFourSevenOneTwoValue}
        onChange={(event) => {
          setTextFieldThreeEightEightFourSevenOneTwoValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3884712")}
      ></TextField>
      <TextField
        width="72px"
        height="35px"
        position="absolute"
        top="199px"
        left="24px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightEightFourSevenOneNineValue}
        onChange={(event) => {
          setTextFieldThreeEightEightFourSevenOneNineValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3884719")}
      ></TextField>
      <TextField
        width="72px"
        height="35px"
        position="absolute"
        top="199px"
        left="99px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField3884726")}
      ></TextField>
      <TextField
        width="64px"
        height="35px"
        position="absolute"
        top="67px"
        left="212px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightEightFourSevenThreeThreeValue}
        onChange={(event) => {
          setTextFieldThreeEightEightFourSevenThreeThreeValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField3884733")}
      ></TextField>
      <TextField
        width="161px"
        height="35px"
        position="absolute"
        top="615px"
        left="173px"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightEightFourSevenFiveOneValue}
        onChange={(event) => {
          setTextFieldThreeEightEightFourSevenFiveOneValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3884751")}
      ></TextField>
      <View
        padding="0px 0px 0px 0px"
        width="105px"
        height="23px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="619px"
        left="21px"
        {...getOverrideProps(overrides, "Group 9")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="700"
          color="rgba(40,194,176,1)"
          lineHeight="18.15340805053711px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="105px"
          height="23px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Comentários"
          {...getOverrideProps(overrides, "Coment\u00E1rios")}
        ></Text>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="48px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="30px"
        height="43px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18px"
        left="300px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="X"
        onClick={() => {
          xOnClick();
        }}
        {...getOverrideProps(overrides, "X")}
      ></Text>
    </View>
  );
}
