import React from 'react'
import "./form-input.scss";

const FormInput = ({ handleChange, label, ...otherpropety }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherpropety} />
            {
                label ? <label className={`${otherpropety.value.length}?"shrink":"" form-input-label`}>{label}</label> : null
            }
        </div >
    )
}

export default FormInput
