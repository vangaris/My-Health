import React from 'react'

import './examinations-card.component.scss'

const examinationCard = ({ _id, doctor, medical_examination, completed }) => (
    <div className="collection-item">
        <div className="collection-footer">
            <span className='name'> {medical_examination}</span>
            <span className="price"> {doctor}</span>
            <span className="price"> {completed ? <h1> completed</h1> : <h1> open </h1>}</span>
        </div>
    </div>
)

export default examinationCard