import React from 'react'

interface FooterProps{
  link: string
}


const Footer: React.FC<FooterProps> = ({link}) => {
  return (
    <div className='project__footer'>

        <a href={link} target='_blank' className='project__button'>
            <i className='bx bx-code-alt image-button'></i>
            <span>code</span>
        </a>

        <a className='project__button'>
            <i className='bx bx-right-arrow-alt'></i>
            <span>demo</span>
        </a>

    </div>
  )
}

export default Footer