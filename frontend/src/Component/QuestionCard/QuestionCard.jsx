import React from 'react'
import  './styles.css';
import { Box, Hidden, Typography} from '@mui/material';
import { blue } from '@mui/material/colors';

function QuestionCard(props) {
  return (
    <Box className='cardBox'>
        <Box sx={{  display: 'flex', flex: 1,marginBottom:'15px' }}>
            <Box className='proPicFrame'>
               <img src={props.imgURL} className='proImg'/>
            </Box>
            <Box >
                <Typography 
                    sx={{
                        fontSize:20,
                        fontWeight :'bold',
                        color:' #101318',
    
                        }}>
                            { props.question }
                       </Typography>

                <Box sx={{  display: 'flex', flex: 1, }}>

                    <Typography sx={{fontSize:14 , fontWeight:'400', color: '#7E8597' }}>{props.userName}</Typography>
                    <Typography sx={{fontSize:14 , fontWeight:'400', color: '#7E8597'}}>{props.postTime}</Typography>

                </Box>
            </Box>
        </Box>

        <Box sx={{ marginBottom:'15px'}}>
    <Typography sx={{ fontSize:16,fontWeight:'400',color:'#5C677D',height:'50px',overflow:'hidden'}}> {props.pQuestion}</Typography>
        </Box>

        <Box sx={{display:'flex', flex:1, gap:'10px'}}>
            <Typography sx={{fontSize:14 , fontWeight:'400', color: '#7E8597', marginRight:'15px'}}>
           {props.Views} Views
            </Typography>


            <Typography sx={{fontSize:14 , fontWeight:'400', color: '#7E8597'}}>
          {props.Replies} Replies
            </Typography>
        </Box>
    </Box>
  )
}

export default QuestionCard
