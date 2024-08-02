import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import FormBuilder from "./FormBuilder";

export interface IFormContent {
  inputs: number[];
  textareas: number[];
  checkboxes: number[];
}

const FormConstructor = () => {
  const [inputsCount, setInputsCount] = useState<number>(0);
  const [textareasCount, setTextareasCount] = useState<number>(0);
  const [checkboxesCount, setCheckboxesCount] = useState<number>(0);
  const [formContent, setFormContent] = useState<IFormContent>({
    inputs: [],
    textareas: [],
    checkboxes: [],
  });

  const createArray = (length: number): number[] => {
    return length > 0 ? Array.from({ length }, (_, k) => k + 1) : [];
  };

  const buildForm = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const newFormContent = {
        inputs: createArray(inputsCount),
        textareas: createArray(textareasCount),
        checkboxes: createArray(checkboxesCount),
      };
      if (JSON.stringify(newFormContent) !== JSON.stringify(formContent)) {
        setFormContent(newFormContent);
      }
    },
    [inputsCount, textareasCount, checkboxesCount, formContent]
  );

  return (
    <div>
      <form onSubmit={buildForm}>
        <label htmlFor="inputsCounter">Inputs</label>
        <input
          type="number"
          min={0}
          value={inputsCount}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputsCount(Number(e.target.value))
          }
        />
        <label htmlFor="textareasCounter">Textareas</label>
        <input
          type="number"
          min={0}
          value={textareasCount}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTextareasCount(Number(e.target.value))
          }
        />
        <label htmlFor="checkboxesCounter">Checkboxes</label>
        <input
          type="number"
          min={0}
          value={checkboxesCount}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCheckboxesCount(Number(e.target.value))
          }
        />
        <input type="submit" value="Create Form" />
      </form>
      <FormBuilder
        inputs={formContent.inputs}
        textareas={formContent.textareas}
        checkboxes={formContent.checkboxes}
      />
    </div>
  );
};

export default FormConstructor;
