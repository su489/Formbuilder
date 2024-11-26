import React from 'react'
import FormField from './FormField'


const FormPreview = ({fields}) => {

    const handleSubmit=()=>{
        
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        {fields.map((field)=>(
            <FormField key ={field.id} field={field}/>
        ))}
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormPreview