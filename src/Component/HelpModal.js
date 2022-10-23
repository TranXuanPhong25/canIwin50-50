import {forwardRef,useState} from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import closeM from "../img/close.png"
// web.cjs is required for IE11 support
import { useSpring, animated } from '@react-spring/web'
import question_mark from "../img/question_mark.png"

const Fade = forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function SpringModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>

            <img onClick={handleOpen} width="52" heigh="52" src={question_mark} alt="help" />
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 200,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <img onClick={handleClose} width="20" height="20" style={{cursor:"pointer",position:"absolute",right:10,top:10}} src={closeM} alt="close"/>
                        <Typography id="spring-modal-title" variant="h6" component="h2">
                            This is a website just make for fun !
                        </Typography>
                        <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                            <p>1. Don't worry about result after you try my web</p>
                            <p>
                                2. How to play this: After hit Start button, you can select either left box or right box. 
                                <br></br>
                                And you have 10 rounds !!!
                                
                            </p>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
