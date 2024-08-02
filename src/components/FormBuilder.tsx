import React from "react";
import { IFormContent } from "./FormConstructor";

const FormBuilder: React.FC<IFormContent> = React.memo(
  ({ inputs, textareas, checkboxes }) => {
    const isEmpty =
      inputs.length === 0 && textareas.length === 0 && checkboxes.length === 0;

    return (
      <div>
        {!isEmpty ? (
          <div>
            {inputs.length > 0
              ? inputs.map((input) => (
                  <input
                    type="text"
                    key={input}
                    placeholder={`Input ${input}`}
                  />
                ))
              : null}
            {textareas.length > 0
              ? textareas.map((textarea) => (
                  <textarea
                    key={textarea}
                    placeholder={`Textarea ${textarea}`}
                  />
                ))
              : null}
            {checkboxes.length > 0
              ? checkboxes.map((checkbox) => (
                  <input type="checkbox" key={checkbox} />
                ))
              : null}
          </div>
        ) : null}
      </div>
    );
  }
);

export default FormBuilder;
