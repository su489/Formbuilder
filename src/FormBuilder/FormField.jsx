import React from 'react'

const FormField = ({field}) => {
    const renderField = () => {
        switch (field.type) {
            case "text":
            case "email":
            case "number":
                return (
                    <input type={field.type} name={field.label} onChange={handleChange} required={field.required}></input>
                );
            case 'radio':
            case 'checkbox':
                return (
                    <input type={field.type} name={field.label} onChange={handleChange} required={field.required}></input>
                )
            case 'select':
                return(
                <select value={fieldType} onChange={handleChange} required={field.required}>
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                    <option value="number">Number</option>
                    <option value="radio">Radio</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="dropdown">Dropdown</option>

                </select>
                )
                default:
                    return null

        }
    }
    return (
        <div>
            <label>{field.label}</label>
            {renderField()}
        </div>
    )
}

export default FormField