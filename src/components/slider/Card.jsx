import React from 'react'

const Card = ({ name, designation, image }) => {
    return (
        <div className='card p-3 bg-light'>
            <div className="d-flex gap-2 align-items-center">
                <div className='bg-primary' style={{ borderRadius: "50%", height: "70px", width: "70px" }}>
                    <img src={image} alt="" />
                </div>
                <div className='d-flex flex-column gap-2'>
                    <p className='mb-0'>{name}</p>
                    <p className='mb-0' style={{ fontSize: "12px", fontStyle: "italic" }}>{designation}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
