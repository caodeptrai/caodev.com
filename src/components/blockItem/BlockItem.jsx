import React from 'react'
import './BlockItem.scss'

const BlockItem = (data) => {
    console.log("check data",data)
  return (
     <div className="document-item">
              {/* <img className='document-item-img' src={javascript} alt="ảnh tài liệu javascript" />
              <h2 className='document-item-title'>Tài liệu Javascript</h2>
                <div className="document-item-control">
                  <span>Lượt tải: 50</span>
                  <button className='btn btn-primary' onClick={()=>handleDowload()}>Dowload</button>
                </div> */}
    </div>
  )
}

export default BlockItem