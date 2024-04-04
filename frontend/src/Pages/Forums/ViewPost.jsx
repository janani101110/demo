import { Box, Typography } from '@mui/material'
import { display, fontSize, fontWeight } from '@mui/system'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getAQuestion } from '../../Services/questionService'
import { formatPostTime } from './timeFormat'

function ViewPost() {

    const postId = localStorage.getItem('postId')

    const [ questionData, setQuestionData] = useState({});

    useEffect(()=>{
        fetchAQuestion();
    },[questionData])
    
    const fetchAQuestion = async ()=>{
        try {
            const question = await getAQuestion(postId)
            
            const postTime = formatPostTime(question.date)
            const updatedData = { ...question, postTime };

            setQuestionData(updatedData)
            // console.log(questionData)
            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Box sx={{padding:'100px'}}>
      
            <Box sx={{ borderTop: '2px solid #979DAD', padding:"25px" }}> 
                <Typography sx={{fontSize:'32px',
                                fontWeight:'bold', 
                                color:'#000000',
                                marginBottom:'15px'
                                
                                }}>
                    {questionData.title}                
                         
                </Typography>
            </Box>


            <Box sx={{padding:"0 25px",}}>

                

                <Box sx={ {display:'flex' , marginBottom:'15px', gap:'15px'}}>  

                    <Box className='proPicFrame'>
                        <img src={require("../../Component/Assets/forum/OIP.jpeg")} className='proImg'/>
                    </Box>  

                    

                    <Box sx={{  display: 'flex',justifyContent:'space-between',  width:"100%"}}>
                       
                        <Box>
                            <Typography sx={{fontSize:16 , fontWeight:'medium', color: '#000000' , marginRight:'15px'}}>Shaveen Maleesha</Typography>
                            <Typography sx={{fontSize:14 , fontWeight:'medium', color: '#7E8597'}}> {questionData.postTime} </Typography>
                        </Box>
                        <Typography sx={{fontSize:14 , fontWeight:'medium', color: '#7E8597'}} >{questionData.viewCount} Views</Typography>
                    </Box>

                </Box>
                


                <Box sx={{ marginBottom:'15px', marginLeft:'80px', }}>
                    <Typography sx={{ fontSize:16,fontWeight:'regular',color:'#40485BD',}}>{questionData.problem}</Typography>
                </Box>
                

            </Box>
       <Box sx={{borderBottom:'2px solid #979DAD'}}></Box>

       <Box>
                    
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold', marginTop: '20px', marginBottom: '15px' }}>
                    {questionData.commentsCount} Comments
                </Typography> 

                <Box sx={{display:'flex', width:'100%',gap:'15px', padding:'25px'}}>
                    <Box className='proPicFrame'>
                        <img src={require("../../Component/Assets/forum/OIP.jpeg")} className='proImg'/>
                    </Box>  

                    <input style={{ fontSize: '16px', fontWeight: 'regular',padding:'5px', marginTop: '20px', border:"none", borderBottom:'1px solid #979DAD', outline:'none', width:"60%"}} placeholder='Add Comment...' />  
                
                </Box>

                

                <Box sx={{ borderBottom: '1px solid #979DAD', marginTop: '20px' }}></Box>
        </Box>

        <Box sx={{display:'flex', gap:"15px", width:'100%', padding:'25px'}}>
                    <Box className='proPicFrame' >
                        <img src={require("../../Component/Assets/forum/OIP.jpeg")} className='proImg'/>
                    </Box> 

                <Box>

                    <Typography sx={{ fontSize: '16px', fontWeight: 'bold', }}>
                        Chathurya Abeyrathne  
                    </Typography> 

                    <Typography sx={{fontSize:14 , fontWeight:'medium', color: '#7E8597'}}>3 Hours ago</Typography>

                    <Typography sx={{ fontSize: '16px', fontWeight: 'regular', marginTop: '20px', marginBottom: '15px' }}>  If that's all of your code then how do you communicate with the shield?If that's all of your code then how do you communicate with the shield?
                        Try the link in my signature might give you more help.
                    </Typography>

                </Box>

                <Box sx={{ borderBottom: '1px solid #979DAD', marginTop: '20px' }}></Box>
        </Box>

    </Box>
    
    
  )
}

export default ViewPost
