import React from 'react'

import './examinations-card.style.scss'

const examinationCard = ({ id, doctor, medical_examination, completed, description }) => (
    <div className="examinations-container">
        <div className="examinations-cart">
            {id}
            <span className='examinations'><b>Εξέταση: </b> {medical_examination}</span>
            <span className='description'><b>Σχόλια: </b> {description}</span>
            <span className="doctor"> <b>Γιατρός: </b> {doctor}</span>
            <span className="status"> <b >Ολοκληρώθηκε: </b> {completed ? <p > ναι </p> : <p> οχι </p>} </span>
        </div>
    </div>
)

export default examinationCard