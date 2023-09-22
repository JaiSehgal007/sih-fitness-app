import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import './Utility.css';

const data = [{id: 0, label: "Today"},{id: 1, label: "This Month"}, {id: 2, label: "This Year"}];

const SelectDropDown = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    setOpen(false)
  }
  
  return (
    <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).label : "Today"}
        <FontAwesomeIcon icon={faAngleDown} className="icon" />
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items.map(item => (
          <div key={item.id} className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
            <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectDropDown;