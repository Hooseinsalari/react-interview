import React, { useState } from "react";

// interface
import { OptionFormProps, Genre } from "../../models";

const OptionForm: React.FC<OptionFormProps> = ({ options, setOptions }) => {
  const [newOption, setNewOption] = useState<string>("");

  const newOptionChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewOption(e.target.value);
  };

  const addOptionHandler = () => {
    if (newOption.trim()) {
      const newOptionObj: Genre = {
        name: newOption.trim(),
      };

      setOptions((options) => [...(options || []), newOptionObj]);
      setNewOption("");
    }
  };

  const removeOptionHandler = (name: string) => {
    const updatedOptions = options?.filter((i) => i.name !== name);
    setOptions(updatedOptions);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newOption}
          onChange={newOptionChangeHandler}
        />
        <button onClick={addOptionHandler}>Add</button>
      </div>
      <ul>
        {options?.map((g, index) => (
          <li key={index}>
            {g.name}
            <button onClick={() => removeOptionHandler(g.name)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionForm;
