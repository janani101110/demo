import React, { useEffect, useState } from 'react'
import QuestionCard from '../../Component/QuestionCard/QuestionCard'
import { Box, Pagination } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { Search } from '../../Component/Search/Search'
import { getQuestions, incrementViewCount } from '../../Services/questionService'
import { formatPostTime } from './timeFormat'

const img = require("../../Component/Assets/forum/OIP.jpeg");

export const Forum= () => {
  const navigate = useNavigate();

  const [cardData, setCardData] = useState([]);
  const [ pCount, setPCount] = useState(1);
  const [ pIndex, setPIndex] = useState(0);

  useEffect(()=>{
    fetchQuestions();
    pageCount();

  },[cardData])

  const fetchQuestions = async () => {
    try {
      const qData = await getQuestions();
      // Modify the postTime to display relative time
      const updatedData = qData.map(item => ({
        ...item,
        postTime: formatPostTime(item.date),
      }));
      setCardData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handlePress = async(id, viewCount)=>{
    await incrementViewCount(id, viewCount)
    localStorage.setItem('postId', id)
    navigate("/post")
  }

  const pageCount = ()=>{
    const postCount = cardData.length / 5

    if(postCount>1){
      setPCount(parseInt(postCount+1));
    }
  }

  const handlePageChange = (event, value) => {
    setPIndex((value - 1) * 5); // Adjust pIndex based on the selected page
  }

  return (
    <Box sx={{display:"flex",flexDirection:'column', alignItems:'center', justifyContent:'center'}}>

      <Search/>

      <Box sx={{padding:'0 150px'}}>

        {cardData.slice(pIndex,pIndex+5).map((item,index)=>(
          
          <div onClick={()=>handlePress(item._id, item.viewCount)}>
            <QuestionCard 
            key = {index}
            imgURL = {img}
            question = {item.title} 
            userName ={ item.userName} 
            postTime={item.postTime} 
            pQuestion ={item.problem} 
            Views = {item.viewCount} 
            Replies = {item.commentsCount} />
          </div>

        ))}
      </Box>
      
      <Box sx={{marginBottom:'25px'}}>
        <Pagination count={pCount} onChange={handlePageChange}/>
      </Box>
      
      
      
    </Box>
    
  )
}
