import React, { useState } from 'react'
import FormField from './FormField';
import FormPreview from './FormPreview';

const FormBuilder = () => {

    const[fieldtype,setFieldType]=useState("text")
    const[label,setLabel]=useState();
    const[required,setRequired]=useState(false);
    const[fields,setFields]=useState([])

    const addField=()=>{
      if(label === ''){
        alert('label is required')
        return;
      }
      const newField={
        id:fields.length+1,
        type:fieldtype,
        label,
        required,
      }
      setFields([...fields,newField])
      setLabel("")
      setRequired(false)
    }
  return (
    <div>
        <h2> Add Form Fields</h2>
        <div>
            <label>Field Type:</label>
            <select value={fieldtype} onChange={(e)=>setFieldType(e.target.value)}>
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="number">Number</option>
                <option value="radio">Radio</option>
                <option value="checkbox">Checkbox</option>
                <option value="dropdown">Dropdown</option>
                
            </select>
        </div>
        <div>
                <label>Label:</label>
                <input type ="text" value={label}
                onChange={(e)=>setLabel(e.target.value)}>
                </input>
        </div>
        <div>
        <label>Required</label>
        <input type="checkbox"
        checked={required}
        onChange={(e)=>setRequired(e.target.value)}        
        ></input>
        </div>
        <button onClick={addField}>Add Field</button>
        <div>
          <h2>Form Preview</h2>
          {fields.length === 0?(
            <p>No fields added</p>
          ):(
            <FormPreview fields ={fields}/>
          )}
        </div>
    </div>
  )
}

export default FormBuilder