import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Connect = () => {
    AOS.init({
        duration: 1200,
    })
    return (
        <>
            <Icons >
                
                    <Link data-aos="fade-left" data-aos-delay="320"
                        to = {{pathname:"https://github.com/gethziyaljoyce"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                            <FaGithub className='icon' title='github'/>
                    </Link>
                    
                    
                    
                    
                
                    <Link data-aos="fade-left" data-aos-delay="330"
                        to = {{pathname:"mailto:jc.getjoy@gmail.com"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer"> 
                            <FaEnvelope className='icon' title='email'/>  
                        </Link>

                   
                </Icons>
        </>
    );
};


const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    text-align: left;
    margin: 5rem 0 3rem 0;
    .icon {
        font-size: 3rem;
        color: whitesmoke;
        margin: 1.1rem;
        &:hover {
        color: #3DC9A7;
        transition: all 0.7s ease;
        } 
    @media (max-width: 768px){
        font-size: 4.8rem;
        margin: 0 3rem 3rem;
        } 
    @media (max-width: 480px){
        font-size: 3.8rem;
        margin: 0 2rem 2.5rem;
        } 
    }
    
@media (max-width: 1502px){
    font-size: 1.2rem;
    margin-top: 5rem;
    } 
/* @media (max-width: 768px){
    font-size: 2.8rem;
    margin-top: 1rem;
    
    } 
@media (max-width: 480px){
    font-size: 1.8rem;
    margin-top: .5rem;
    margin-bottom: 3rem;
    }  */
`
export default Connect;