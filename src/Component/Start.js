import { Button } from '@mui/material';
import {  useDispatch} from 'react-redux'
import { changeStatus } from '../features/slice.js';
export default function Start() {
    
    const dispatch = useDispatch()
    function handleStart() {
        dispatch(changeStatus("game"))
    }
    return (
        <>

            <h1>Can I win 50/50</h1>
            <Button
                onClick={handleStart}
                variant="contained" color="primary" aria-label="add">
                Start
                

            </Button>

        </>
    )
}