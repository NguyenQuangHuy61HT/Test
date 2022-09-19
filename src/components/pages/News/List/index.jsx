import React from 'react';
import './styles.scss'
function List({ List }) {
  return (
    <>
    {
        List.map((elm,idx)=>{
            return (
              <div className="Card" key={idx}>
                <span>{elm.title}</span>
                <div className="card-content">
                  <img src={elm.img} alt="image_course" />
                  <p>
                    {elm.text}
                  </p>
                </div>
              </div>
            );
        })
    }
     
    </>
  );
}

export default List;