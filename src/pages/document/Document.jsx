import React from 'react'
import './Document.scss'
import cloudComputing from '../../assets/images/cloud-computing.jpg'
import javascript from '../../assets/images/javascript.jpeg'
import reactjs from '../../assets/images/reactjs.png'
import { toast } from 'react-toastify'
import ReactPaginate from 'react-paginate'
import BlockItem from '../../components/blockItem/BlockItem'
const Document = () => {

  const Data = [
    {
      id:1,
      title:'Tài liệu Javascript',
      img:javascript,
      alt:'ảnh tài liệu javascript',
      dowloads:50
    }, 
    {
      id:2,
      title:'Tài liệu ReactJs',
      img:reactjs,
      alt:'ảnh tài liệu reactjs',
      dowloads:50
    },
     {
      id:3,
      title:'Tài liệu Cloud Computing',
      img:cloudComputing,
      alt:'ảnh tài liệu cloud computing',
      dowloads:50
    }

  ]

  const handleDowload = ()=> {

    toast.success("Dowload thành công !")
  }
  return (
    <div className="document">

      <div class="container">
        <h1 className='title'>Bạn có thể dowload tài liệu tại đây !!</h1>
        <div class="row mb-5">

          {Data.map((item)=> {

            return (
               <div class="col-4 mb-4">
                  <BlockItem  data={item}/>
              </div>
            )
          })}
         
      
        </div>

        <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                // onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={10}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousLinkClassName='page-link'
                previousClassName='page-item'
                nextClassName='page-iten'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-lin'
                containerClassName='pagination'
                activeClassName='active'
            />
      </div>

    </div>
    
  )
}

export default Document