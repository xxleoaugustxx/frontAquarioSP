/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Animal } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function AnimalUpdateForm(props) {
  const {
    id: idProp,
    animal: animalModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nome: "",
    registro: "",
    idade: "",
    especie: "",
    temperaturaIdeal: "",
    bpmIdeal: "",
    habitat: "",
    imagem: "",
    comentarios: "",
    grupo: "",
    cor: "",
    corG: "",
  };
  const [nome, setNome] = React.useState(initialValues.nome);
  const [registro, setRegistro] = React.useState(initialValues.registro);
  const [idade, setIdade] = React.useState(initialValues.idade);
  const [especie, setEspecie] = React.useState(initialValues.especie);
  const [temperaturaIdeal, setTemperaturaIdeal] = React.useState(
    initialValues.temperaturaIdeal
  );
  const [bpmIdeal, setBpmIdeal] = React.useState(initialValues.bpmIdeal);
  const [habitat, setHabitat] = React.useState(initialValues.habitat);
  const [imagem, setImagem] = React.useState(initialValues.imagem);
  const [comentarios, setComentarios] = React.useState(
    initialValues.comentarios
  );
  const [grupo, setGrupo] = React.useState(initialValues.grupo);
  const [cor, setCor] = React.useState(initialValues.cor);
  const [corG, setCorG] = React.useState(initialValues.corG);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = animalRecord
      ? { ...initialValues, ...animalRecord }
      : initialValues;
    setNome(cleanValues.nome);
    setRegistro(cleanValues.registro);
    setIdade(cleanValues.idade);
    setEspecie(cleanValues.especie);
    setTemperaturaIdeal(cleanValues.temperaturaIdeal);
    setBpmIdeal(cleanValues.bpmIdeal);
    setHabitat(cleanValues.habitat);
    setImagem(cleanValues.imagem);
    setComentarios(cleanValues.comentarios);
    setGrupo(cleanValues.grupo);
    setCor(cleanValues.cor);
    setCorG(cleanValues.corG);
    setErrors({});
  };
  const [animalRecord, setAnimalRecord] = React.useState(animalModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Animal, idProp)
        : animalModelProp;
      setAnimalRecord(record);
    };
    queryData();
  }, [idProp, animalModelProp]);
  React.useEffect(resetStateValues, [animalRecord]);
  const validations = {
    nome: [{ type: "Required" }],
    registro: [],
    idade: [],
    especie: [],
    temperaturaIdeal: [],
    bpmIdeal: [],
    habitat: [],
    imagem: [{ type: "URL" }],
    comentarios: [],
    grupo: [],
    cor: [],
    corG: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nome,
          registro,
          idade,
          especie,
          temperaturaIdeal,
          bpmIdeal,
          habitat,
          imagem,
          comentarios,
          grupo,
          cor,
          corG,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Animal.copyOf(animalRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AnimalUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nome"
        isRequired={true}
        isReadOnly={false}
        value={nome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome: value,
              registro,
              idade,
              especie,
              temperaturaIdeal,
              bpmIdeal,
              habitat,
              imagem,
              comentarios,
              grupo,
              cor,
              corG,
            };
            const result = onChange(modelFields);
            value = result?.nome ?? value;
          }
          if (errors.nome?.hasError) {
            runValidationTasks("nome", value);
          }
          setNome(value);
        }}
        onBlur={() => runValidationTasks("nome", nome)}
        errorMessage={errors.nome?.errorMessage}
        hasError={errors.nome?.hasError}
        {...getOverrideProps(overrides, "nome")}
      ></TextField>
      <TextField
        label="Registro"
        isRequired={false}
        isReadOnly={false}
        value={registro}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              registro: value,
              idade,
              especie,
              temperaturaIdeal,
              bpmIdeal,
              habitat,
              imagem,
              comentarios,
              grupo,
              cor,
              corG,
            };
            const result = onChange(modelFields);
            value = result?.registro ?? value;
          }
          if (errors.registro?.hasError) {
            runValidationTasks("registro", value);
          }
          setRegistro(value);
        }}
        onBlur={() => runValidationTasks("registro", registro)}
        errorMessage={errors.registro?.errorMessage}
        hasError={errors.registro?.hasError}
        {...getOverrideProps(overrides, "registro")}
      ></TextField>
      <TextField
        label="Idade"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={idade}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nome,
              registro,
              idade: value,
              especie,
              temperaturaIdeal,
              bpmIdeal,
              habitat,
              imagem,
              comentarios,
              grupo,
              cor,
              corG,
            };
            const result = onChange(modelFields);
            value = result?.idade ?? value;
          }
          if (errors.idade?.hasError) {
            runValidationTasks("idade", value);
          }
          setIdade(value);
        }}
        onBlur={() => runValidationTasks("idade", idade)}
        errorMessage={errors.idade?.errorMessage}
        hasError={errors.idade?.hasError}
        {...getOverrideProps(overrides, "idade")}
      ></TextField>
      <TextField
        label="Especie"
        isRequired={false}
        isReadOnly={false}
        value={especie}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              registro,
              idade,
              especie: value,
              temperaturaIdeal,
              bpmIdeal,
              habitat,
              imagem,
              comentarios,
              grupo,
              cor,
              corG,
            };
            const result = onChange(modelFields);
            value = result?.especie ?? value;
          }
          if (errors.especie?.hasError) {
            runValidationTasks("especie", value);
          }
          setEspecie(value);
        }}
        onBlur={() => runValidationTasks("especie", especie)}
        errorMessage={errors.especie?.errorMessage}
        hasError={errors.especie?.hasError}
        {...getOverrideProps(overrides, "especie")}
      ></TextField>
      <TextField
        label="Temperatura ideal"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={temperaturaIdeal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              nome,
              registro,
              idade,
              especie,
              temperaturaIdeal: value,
              bpmIdeal,
              habitat,
              imagem,
              comentarios,
              grupo,
              cor,
              corG,
            };
            const result = onChange(modelFields);
            value = result?.temperaturaIdeal ?? value;
          }
          if (errors.temperaturaIdeal?.hasError) {
            runValidationTasks("temperaturaIdeal", value);
          }
          setTemperaturaIdeal(value);
        }}
        onBlur={() => runValidationTasks("temperaturaIdeal", temperaturaIdeal)}
        errorMessage={errors.temperaturaIdeal?.errorMessage}
        hasError={errors.temperaturaIdeal?.hasError}
        {...getOverrideProps(overrides, "temperaturaIdeal")}
      ></TextField>
      <TextField
        label="Bpm ideal"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bpmIdeal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              nome,
              registro,
              idade,
              especie,
              temperaturaIdeal,
              bpmIdeal: value,
              habitat,
              imagem,
              comentarios,
              grupo,
              cor,
              corG,
            };
            const result = onChange(modelFields);
            value = result?.bpmIdeal ?? value;
          }
          if (errors.bpmIdeal?.hasError) {
            runValidationTasks("bpmIdeal", value);
          }
          setBpmIdeal(value);
        }}
        onBlur={() => runValidationTasks("bpmIdeal", bpmIdeal)}
        errorMessage={errors.bpmIdeal?.errorMessage}
        hasError={errors.bpmIdeal?.hasError}
        {...getOverrideProps(overrides, "bpmIdeal")}
      ></TextField>
      <TextField
        label="Habitat"
        isRequired={false}
        isReadOnly={false}
        value={habitat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              registro,
              idade,
              especie,
              temperaturaIdeal,
              bpmIdeal,
              habitat: value,
              imagem,
              comentarios,
              grupo,
              cor,
              corG,
            };
            const result = onChange(modelFields);
            value = result?.habitat ?? value;
          }
          if (errors.habitat?.hasError) {
            runValidationTasks("habitat", value);
          }
          setHabitat(value);
        }}
        onBlur={() => runValidationTasks("habitat", habitat)}
        errorMessage={errors.habitat?.errorMessage}
        hasError={errors.habitat?.hasError}
        {...getOverrideProps(overrides, "habitat")}
      ></TextField>
      <TextField
        label="Imagem"
        isRequired={false}
        isReadOnly={false}
        value={imagem}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              registro,
              idade,
              especie,
              temperaturaIdeal,
              bpmIdeal,
              habitat,
              imagem: value,
              comentarios,
              grupo,
              cor,
              corG,
            };
            const result = onChange(modelFields);
            value = result?.imagem ?? value;
          }
          if (errors.imagem?.hasError) {
            runValidationTasks("imagem", value);
          }
          setImagem(value);
        }}
        onBlur={() => runValidationTasks("imagem", imagem)}
        errorMessage={errors.imagem?.errorMessage}
        hasError={errors.imagem?.hasError}
        {...getOverrideProps(overrides, "imagem")}
      ></TextField>
      <TextField
        label="Comentarios"
        isRequired={false}
        isReadOnly={false}
        value={comentarios}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              registro,
              idade,
              especie,
              temperaturaIdeal,
              bpmIdeal,
              habitat,
              imagem,
              comentarios: value,
              grupo,
              cor,
              corG,
            };
            const result = onChange(modelFields);
            value = result?.comentarios ?? value;
          }
          if (errors.comentarios?.hasError) {
            runValidationTasks("comentarios", value);
          }
          setComentarios(value);
        }}
        onBlur={() => runValidationTasks("comentarios", comentarios)}
        errorMessage={errors.comentarios?.errorMessage}
        hasError={errors.comentarios?.hasError}
        {...getOverrideProps(overrides, "comentarios")}
      ></TextField>
      <TextField
        label="Grupo"
        isRequired={false}
        isReadOnly={false}
        value={grupo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              registro,
              idade,
              especie,
              temperaturaIdeal,
              bpmIdeal,
              habitat,
              imagem,
              comentarios,
              grupo: value,
              cor,
              corG,
            };
            const result = onChange(modelFields);
            value = result?.grupo ?? value;
          }
          if (errors.grupo?.hasError) {
            runValidationTasks("grupo", value);
          }
          setGrupo(value);
        }}
        onBlur={() => runValidationTasks("grupo", grupo)}
        errorMessage={errors.grupo?.errorMessage}
        hasError={errors.grupo?.hasError}
        {...getOverrideProps(overrides, "grupo")}
      ></TextField>
      <TextField
        label="Cor"
        isRequired={false}
        isReadOnly={false}
        value={cor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              registro,
              idade,
              especie,
              temperaturaIdeal,
              bpmIdeal,
              habitat,
              imagem,
              comentarios,
              grupo,
              cor: value,
              corG,
            };
            const result = onChange(modelFields);
            value = result?.cor ?? value;
          }
          if (errors.cor?.hasError) {
            runValidationTasks("cor", value);
          }
          setCor(value);
        }}
        onBlur={() => runValidationTasks("cor", cor)}
        errorMessage={errors.cor?.errorMessage}
        hasError={errors.cor?.hasError}
        {...getOverrideProps(overrides, "cor")}
      ></TextField>
      <TextField
        label="Cor g"
        isRequired={false}
        isReadOnly={false}
        value={corG}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              registro,
              idade,
              especie,
              temperaturaIdeal,
              bpmIdeal,
              habitat,
              imagem,
              comentarios,
              grupo,
              cor,
              corG: value,
            };
            const result = onChange(modelFields);
            value = result?.corG ?? value;
          }
          if (errors.corG?.hasError) {
            runValidationTasks("corG", value);
          }
          setCorG(value);
        }}
        onBlur={() => runValidationTasks("corG", corG)}
        errorMessage={errors.corG?.errorMessage}
        hasError={errors.corG?.hasError}
        {...getOverrideProps(overrides, "corG")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || animalModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || animalModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
