import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import {  useDispatch ,useSelector} from 'react-redux'
import { increment,notIncrement,changeStatus } from '../features/slice';

export default function Game() {
    
    const count = useSelector(state=>state.counter)
    const dispatch = useDispatch()

    function handleChoose(e){
        const condition =
        e.target.getAttribute("data-directt")===["left","right","left","right","right","left","left","right" ,"right","left"][Math.round(Math.random()*10)]
        
        if(condition) {
            dispatch(increment())
        }else{
            dispatch(notIncrement())
        }
        if(count.played===9){
            localStorage.setItem("roundPlayed",+localStorage.getItem("roundPlayed")+1)
            dispatch(changeStatus("EndGame"))
        }
    }
    return (
        <>
            <h1>CHOOSE LEFT OR RIGHT </h1>
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        m: 1,
                        width: 180,
                        height: 180,
                    },
                }}
            >
                <Button variant="contained" sx={{fontSize:"2rem",background:"#85D7FD"}} onClick={handleChoose} data-directt="left" elevation={24} >
                    LEFT
                </Button>
                <Button  variant="contained" sx={{fontSize:"2rem",background:"#85D7FD"}} onClick={handleChoose} data-directt="right" elevation={24}>
                    RIGHT
                </Button>
            </Box>
            <h1>Correct choice:{count.correct}/{count.played}</h1>
        </>
    )
}