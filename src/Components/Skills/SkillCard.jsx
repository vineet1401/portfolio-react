import React from 'react'

const SkillCard = ({ Skill }) => {
    return (
        Skill.map((items, index) => {
            return (
                <div key={index} className="card">
                    <img className='Skillicon' src={items.icon} alt={items.name} />
                    <div className="Skillname">{items.name}</div>
                </div>
            )
        })
    )
}

export default SkillCard;