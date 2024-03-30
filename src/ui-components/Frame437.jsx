/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useDataStoreCreateAction } from "./utils";
import { Animal } from "../models";
import { schema } from "../models/schema";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Frame437(props) {
  const { overrides, ...rest } = props;
  const rectangleOneOneSevenTwoOnClick = useDataStoreCreateAction({
    fields: {},
    model: Animal,
    schema: schema,
  });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="167px"
      height="26px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Frame437")}
      {...rest}
    >
      <View
        width="167px"
        height="26px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(181,181,181,1)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        onClick={() => {
          rectangleOneOneSevenTwoOnClick();
        }}
        {...getOverrideProps(overrides, "Rectangle 1172")}
      ></View>
    </Flex>
  );
}
