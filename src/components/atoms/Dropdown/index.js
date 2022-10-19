import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Dropdown.module.scss';

/**
* <Dropdown
*   options={ [{label:..., value:...}, {label:..., value:...}] }
*   onSelect={() => console.log('Select')}
*   selectedValue={}
* />
 *
 * @prop {array} options dropdown options objects array
 * @prop {Function} onSelect selected function handler 
 * @prop {mixed} selectedValue displaying selected value props

 */

export default function Dropdown({
  options,
  selectedValue,
  onSelect,
}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const [ddSelectedIndex, setDDSelectedIndex] = useState(0);

  const selectedIndex = options.map(d => d.value).indexOf(selectedValue);

  if(selectedIndex !== ddSelectedIndex) setDDSelectedIndex(selectedIndex);

  const select = (optionIndex) => {
    setDDSelectedIndex(optionIndex);
    setIsOpen(false);
    onSelect(options[optionIndex].value);
  };

  const itemLabel = option => option.label;

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
          onBlur={(e) => setIsOpen(false)}
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

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]).isRequired,
  onSelect: PropTypes.func
}
