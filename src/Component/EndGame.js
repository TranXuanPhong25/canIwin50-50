import { Button } from '@mui/material';
import {  useDispatch ,useSelector} from 'react-redux'
import { reset} from '../features/slice.js';
export default function Start() {
    const count = useSelector(state=>state.counter)
    
    const dispatch = useDispatch()
    function handleReset() {
        
        dispatch(reset())
    }
    return (
        <>
            {
                count.correct <6 ?<h1>Wait for another chance ({count.correct}/10)</h1>:<h1>You won 50/50 with {Math.round(count.correct*10+(Math.floor(Math.random()*9)))}%</h1>
            }
            <Button
                onClick={handleReset}
                variant="contained" color="primary" aria-label="add">
                Restart

            </Button>
            
        </>
    )
}