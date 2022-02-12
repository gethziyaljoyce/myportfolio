import styled from 'styled-components'
import { FiGithub } from 'react-icons/fi';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import ecomImg from '../media/ecommerce.png';
import memImg from '../media/memories.PNG';
import refImg from '../media/referal-link.PNG';
import videoImg from '../media/video-chat-app.PNG';
import wpcImg from '../media/wpc.PNG';


const Card = ({ item: { title, body, image, tech, linkgithub, linkdemo } }) => {
    let imgUrl = "";
    let imgData = { image };
    if (imgData.image === 'ecommerce') {
        imgUrl = ecomImg;
    } else if (imgData.image === 'memories') {
        imgUrl = memImg;
    } else if (imgData.image === 'referal') {
        imgUrl = refImg;
    } else if (imgData.image === 'video') {
        imgUrl = videoImg;
    } else {
        imgUrl = wpcImg;
    }
    return (
        <>
            <CardContainer data-aos="zoom-in">
                <div>
                    <img src={imgUrl}></img>
                </div>
                <CardContent>
                    <Flex>
                        <h3>{title}</h3>
                        <CardLink>
                            <a
                                href={linkgithub}
                                target={"_blank"}
                                rel="noopener noreferrer">
                                <FiGithub className='icon' />
                            </a>
                            <a
                                href={linkdemo}
                                target={"_blank"}
                                rel="noopener noreferrer">
                                <BsBoxArrowUpRight className='icon' />
                            </a>
                        </CardLink>
                    </Flex>
                    <p>{body}</p>
                    <pre>{tech}</pre>
                </CardContent>
            </CardContainer>
        </>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 960px;
    background-color: rgba(255, 255, 255, 0.972);
    box-shadow: 1px 3px 32px -7px black;
    border-radius:10px;
    text-align: center;
    overflow: hidden;
    img {
        width: 97%;
        border-radius: 10px;
        margin-top: .7rem; 
        box-shadow: 1px 3px 32px -1px black;
    }
    @media (max-width: 768px){
        width: 100%;
    }
`
const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 411px){
        flex-direction: column;
    }
`
const CardContent = styled.div`
    text-align: left;
    h3 {
        margin: 1rem;
        padding: 1rem;
        font-size: 2rem;
        color: #3d3f42;
    }
    p {
        margin: 1rem;
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: 400;
        color: #343a40;
        @media (max-width: 768px){
            font-size: 1.8rem;
        }
        @media (max-width: 480px){
            font-size: 1rem;
        }
    }
    pre {
        margin: 1rem ;
        padding: 1rem;
        font-size: 1rem;
        font-weight: 700;
        @media (max-width: 768px){
            font-size: 1.6rem;
        }
        @media (max-width: 480px){
            font-size: 1.1rem;
        }
    }
`
const CardLink = styled.div`

    .icon{
        font-size: 2rem;
        color: #343a40;
        margin: 2.5rem 2rem 1rem .5rem;
        @media (max-width: 411px){
            margin: .7rem 1rem 1rem 2rem;
        }
        &:hover{
            color: rgba(255, 0, 255, 0.513);
            transition: all 0.5s ease;
        }
    }
`
export default Card