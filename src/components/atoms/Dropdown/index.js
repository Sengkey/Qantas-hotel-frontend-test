import React, { useState } from 'react';
import style from './Dropdown.module.scss';

/**
* <Dropdown
*   options={ [{label:..., value:...}, {label:..., value:...}] }
*   itemLabel={(d) => d.label}
*   onSelect={() => console.log('Select')}
*   selectedIndex={}
* />
 *
 * @prop {Function} onSelect
 * @prop {mixed} ... All other props will be forwarded to the native DOM select element.

 */

export default function Dropdown({
  options,
  itemLabel,
  selectedIndex,
  onSelect,
}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const [ddSelectedIndex, setDDSelectedIndex] = useState(0);

  if(selectedIndex !== ddSelectedIndex) setDDSelectedIndex(selectedIndex);

  const select = (optionIndex) => {
    setDDSelectedIndex(optionIndex);
    onSelect(optionIndex);
  };

  return (
    <div
      className={style.Box + (isOpen ? " is--selected" : "")}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="dropdown__inner" id="dropdown-container">

        <select
          className="dropdown__inner__select"
          id="dropdown-select-input"
          onChange={evt => select(evt.target.value)}
          value={ddSelectedIndex}
        >
          {options.map((option, i) => (
            <option value={i} key={i}>
              {itemLabel(option)}
            </option>
          ))}
        </select>
        
      </div>
    </div>
  );
};
