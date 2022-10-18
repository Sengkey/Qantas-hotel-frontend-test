import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Dropdown.module.scss';

/**
* <Dropdown
*   options={ [{label:..., value:...}, {label:..., value:...}] }
*   itemLabel={(d) => d.label}
*   onSelect={() => console.log('Select')}
*   selectedIndex={}
* />
 *
 * @prop {array} options dropdown options array objects
 * @prop {Function} itemLabel returning a value of the active object
 * @prop {Function} onSelect callback function to update parent state DOM
 * @prop {number} selectedIndex displaying selected active index of dropdown

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

Dropdown.propTypes = {
  options: PropTypes.array,
  itemLabel: PropTypes.func,
  selectedIndex: PropTypes.number,
  onSelect: PropTypes.func
}
