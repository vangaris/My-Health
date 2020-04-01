import React from 'react'
import CustomButton from '../custom-button/custom-button.component'

import './examinations-card.style.scss'

const examinationCard = ({ id, doctor, medical_examination, completed, description }) => (
    <div className="examinations-container">
        <div className="examinations-cart">
            <span className='examinations'>Εξέταση: {medical_examination}</span>
            <span className="doctor"> Γιατρός: {doctor}</span>
            {completed ? (<span className="status">Ολοκληρώθηκε: ναι </span>)
                : (<span className="status">Ολοκληρώθηκε: οχι </span>)}
            <span className='description'>Σχόλια: {description}</span>
            {/* <input type='checkbox'> Ολοκληρώθηκε </input> */}
            <div className="buttons">
                {completed ? <CustomButton style={{ background: '#E65100' }}> Ακυρωση </CustomButton> : <CustomButton style={{ background: '#1B5E20' }} > &#10004; </CustomButton>}
                <CustomButton style={{ background: '#FFAB00' }}> &#9997; </CustomButton>
                <CustomButton style={{ background: '#B71C1C' }}> &#10008;  </CustomButton>
            </div>
        </div>
    </div >
)

export default examinationCard