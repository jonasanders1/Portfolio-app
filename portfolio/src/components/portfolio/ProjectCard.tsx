import React, { useState } from "react";
import "./portfolio.css"

interface ProjectItem {
  id: number;
  name: string;
  image: {
    projectImage: string[]
  };
  description: string;
}


const ProjectCard: React.FC<{item : ProjectItem}> = ({item}) => {

  // state for keeping track of the current image[index]
  const[imageIndex, setImageIndex] = useState(0)


  // function for handling the forwards button
  const handleNextImage = () => {
    const imageCount = item.image.projectImage.length
    if (imageIndex == imageCount - 1){
      setImageIndex(0)
    }
    else{
    setImageIndex(prev => prev + 1)
    }
  }
  // function for handling the backwards button
  const handlePreviousImage = () => {
    const imageCount = item.image.projectImage.length
    if (imageIndex == 0){
      setImageIndex(imageCount - 1)
    }
    else{
    setImageIndex(prev => prev - 1)
    }
  }

  return (
    <div className="project__card">

      <div className="project__main">
        <div className="image__container">
          <div className="project__header">
              <h3>{item.name}</h3>
          </div>
          <img className="project__main-image" src={item.image.projectImage[imageIndex]}  width={150}/>
          <div className="image__button-container">
              <button className="image-button" onClick={handlePreviousImage}>
                <i className='bx bxs-left-arrow'></i>
              </button>
              <button className="image-button" onClick={handleNextImage}>
                <i className='bx bxs-right-arrow'></i>
              </button>
          </div>
        </div>
      </div>

      <div className="project__description">
          <p>{item.description}</p>
      </div>

      <div className="project__footer">
          <button className="project__button">
            <i className='bx bx-code-alt project__button-icon'></i>
            <span className="project__button-text">code</span>
          </button>

          <button className="project__button">
            <i className='bx bx-right-arrow-alt project__button-icon'></i>
            <span className="project__button-text">demo</span>
          </button>
      </div>

    </div>
  )
}

export default ProjectCard