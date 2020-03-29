import React from 'react'

import './examinations-card.style.scss'

const examinationCard = ({ id, doctor, medical_examination, completed, description }) => (
    <div className="examinations-container">
        <div className="examinations-cart">
            <span className='examinations'>Εξέταση: {medical_examination}</span>
            <span className="doctor"> Γιατρός: {doctor}</span>
            {completed ? (<span className="status">Ολοκληρώθηκε: ναι </span>)
                : (<span className="status">Ολοκληρώθηκε: οχι </span>)}
            <span className='description'>Σχόλια: {description}</span>
        </div>
    </div>
)

export default examinationCard