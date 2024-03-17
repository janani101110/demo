import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

export const ResoComment = () => {
  return (
    <div className='reso-comment'>
          <div className='reso-comment-header'>
            <div className='reso-com'>
              <div className='resocomuser'><h3>@chathuabeyrathna</h3></div>
              <div className='resocomdate'><p>13/03/2024</p></div>
            </div>
            <div className='reso-comment-actions'>
              <BiEdit />
              <MdDelete />
            </div>
          </div>
          <p>Nice Information</p>
    </div>
  )
}
