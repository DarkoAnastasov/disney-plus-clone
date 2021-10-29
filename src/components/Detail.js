import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components'
import db from '../firebase';

function Detail() {

    const { id } = useParams();
    const [movie, setMovie] = useState()

    useEffect(() => {
        db.collection("Movies")
          .doc(id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setMovie(doc.data());
            } else {
              console.log("no such document in firebase 🔥");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      }, [id]);

    return (
        <Container>
            {movie && (
            <>
                <Background>
                    <img src={movie.BackgroundImg} alt="" />
                </Background>
                 <ImageTitle>
                    <img src={movie.TitleImg} alt="" />
                 </ImageTitle>
                 <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                {movie.Genres}
            </SubTitle>
            <Description>
                {movie.Description}
            </Description>
            </>
            )}
        </Container>
    )
}

export default Detail

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    `;
const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;
    img {
        width: 100vw;
        height: 100vh;
        @media (max-width: 768px) {
        width: initial;
        }
    }
    `;
const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;
    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
    `;

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
    `;

const PlayButton = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb (249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);
    img {
        width: 32px;
    }
    &:hover {
        background: rgb(198, 198, 198);
    }
    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
        img {
        width: 25px;
        }
    }
    `;
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    `;


const AddButton = styled.button`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;
    }
    &:nth-child(2) {
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
    }
    }
    `;

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
    `;


const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;