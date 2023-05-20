import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import step_data from './json_files/steps_data.json';
import {motion} from 'framer-motion';


const StepTile = ({title,text,side}) => {

    
    const Diamond = () => {
        const [stepTitle,setSteptitle] = useState('');
        const [stepLabel,setSteplabel] = useState('');

        useEffect(() => {
            const step = title.split(': ');
            setSteptitle(step[0]);
            setSteplabel(step[1]);

        },[]);

        return(
            <Box id='tile-diamond' sx={{
                left:(side=='left' || !side)? 0:'',
                right:(side=='right')? 0:''
            }} >
                <Box id='diamond-inner'>
                    <Box id='diamond-text-holder' >
                        <div>
                            {stepTitle}:
                        </div>
                        <div>
                            {stepLabel}
                        </div>
                    </Box>
                </Box>  
            </Box>
        )
    }

    return(
        <Box id='tile-body' >
            
            <Diamond side={side} />
            

            <Box id='step-text' sx={{
                right:(side=='left' || !side)? 0:'',
                left:(side=='right')? 0:''
            }}>
                {text}
            </Box>
            
            


        </Box>
    )
}

const Steps = () => {

    return(
        <Box id='steps-main'>

            {
                Object.keys(step_data).map(key => {
                    const item = step_data[key];
                    return(
                        <StepTile key={key} title={item.title} text={item.text} side={item.side} />
                    )
                })
            }

        </Box>
    )
}


const ContactLinks = () => {

    

    useEffect(() => {
        const mainBody = document.querySelector('#border-box');
        




    },[])


    const ContactDiamond = ({hovering}) => {

        return(
            <motion.div id='contact-diamond' 
            
            animate={{
                scale:hovering? 1.05:1,
                backgroundColor:hovering? '#ffffff77':'#202020',
                transition:{
                    duration:.5
                }
            }}
            >
                <Box id='contact-diamond-inner' >
                    
                </Box>
            </motion.div>
        )
    }

    

    const ContactLink = ({icon}) => {

        const [hovering,setHovering] = useState(false);

        return(
            <Box id='link-body'
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            >
                
                <ContactDiamond hovering={hovering} />

                <Box sx={{
                    width:'80%',
                    height:'70px',
                }}>

                </Box>

            </Box>
        )
    }


    return(
        <Box id='border-box'>
            <ContactLink />
            <ContactLink />
            <ContactLink />
        </Box>
    )   
}




const Contact = () => {

    return(
        <Box id='contact-body' >
            <Box id='section-one'>

                <Box id='section-one-title'>
                    Contact
                </Box>

                <Box id='line' ></Box>

                <Box sx={{
                    width:'100%',
                    height:'90%',
                    marginTop:'60px',
                    display:'flex'
                }}>

                    <ContactLinks />
                    <Steps />
                </Box>
                


            </Box>
        </Box>
    )
}


export default Contact;