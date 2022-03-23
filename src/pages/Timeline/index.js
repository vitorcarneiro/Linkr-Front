// import { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FaRegHeart } from 'react-icons/fa';
import "../../styles/reset.css";

export default function Timeline() {

    const timeline = [
        {
            "user": {
                "name": "Juvenal Juvêncio",
                "picture": "https://i.pinimg.com/originals/f8/f3/01/f8f301698392ee89abd583fe98c83a54.jpg"
            },
            "url": {
                "link": "https://reactjs.org",
                "title": "Como aplicar o Material UI em um projeto React",
                "description": "Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.",
                "image": "https://cdn.peekalink.io/public/images/22134683-c5b4-432f-876c-ed6e54be862a/30334247-635e-4d6d-907d-0ec39dd2ec5b.jpg"
            },
            "description": "Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material",
            "likesQty": 13,
        },
        {
            "user": {
                "name": "Juvenal Juvêncio",
                "picture": "https://i.kym-cdn.com/entries/icons/original/000/016/546/hidethepainharold.jpg"
            },
            "url": {
                "link": "https://github.com/",
                "title": "GitHub: Where the world builds software",
                "description": "GitHub is where over 73 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and feat...",
                "image": "https://cdn.peekalink.io/public/images/57900b1c-d279-47f7-af5f-aae4f3ca08d0/52fed94c-ecf2-4e00-809b-ca681d2431d2.jpg"
            },
            "description": "Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material",
            "likesQty": 25,
        },
        {
            "user": {
                "name": "Juju",
                "picture": "https://i.pinimg.com/originals/f8/f3/01/f8f301698392ee89abd583fe98c83a54.jpg"
            },
            "url": {
                "link": "https://reactjs.org",
                "title": "Como aplicar o React",
                "description": "Hey! I  blog.  , new .     click through to another page.",
                "image": "https://cdn.peekalink.io/public/images/22134683-c5b4-432f-876c-ed6e54be862a/30334247-635e-4d6d-907d-0ec39dd2ec5b.jpg"
            },
            "description": "Muito maneiro     UI  ,   ! #react #material",
            "likesQty": 13,
        },
    ];

    return (
        <Container>
            <Feed>
                <Title to={"/"}> timeline </Title>

                <ShareBox>
                    <form>
                        <LinkShared>
                            What are you going to share today?
                        </LinkShared>

                        <LinkInput
                            placeholder="http:/..."
                            type="url"
                        />

                        <DescriptionInput
                            placeholder="Awesome article about #javascript"
                        />

                        <PublishButton>
                            Publish
                        </PublishButton>
                    </form>
                </ShareBox>
                
                {timeline.map( post => 
                    <PostBox>
                        <LeftPostContainer>
                            <img src={post.user.picture} alt={post.user.name} />
                            
                            <FaRegHeart
                                size={17}
                                color={"#FFFFFF"}
                            />

                            <p>{`${post.likesQty} likes`}</p>
                        </LeftPostContainer>


                        <RightPostContainer>
                            <h1>{post.user.name}</h1>

                            <article>
                                <p>{post.description}</p>
                            </article>

                            <a href={post.url.link} target="_blank">
                                <LinkPreview>
                                    <LinkData>
                                        <h1>{post.url.title}</h1>

                                        <p>{post.url.description}</p>

                                        <h2>{post.url.link}</h2>
                                    </LinkData>

                                    <LinkImage>
                                        <img src={post.url.image} alt={post.url.title}/>
                                    </LinkImage>
                                </LinkPreview>
                            </a>
                        </RightPostContainer>
                    </PostBox>
                )}
            </Feed>
        </Container>
    )

}

const Container = styled.main`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333333;
    display: flex;
    justify-content: center;
    box-sizing: border-box;

    * {
        box-sizing: border-box;
    }
`;

const Feed = styled.div`
    padding: 72px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

const Title = styled(Link)`
    font-size: 33px;
    color: #FFF;
    font-family: Oswald;
    font-weight: 700;
    margin-top: 19px;
    align-self: flex-start;

    &:hover {
        text-decoration: underline;
    }
`;

const ShareBox = styled.div`
    width: 100%;
    max-width: 615px;
    height: 164px;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 10px 15px;

    form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5px;
    }
`;

const LinkShared = styled.div`
    font-family: Lato;
    color: #707070;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    text-align: center;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const LinkInput = styled.input`
    background-color: #EFEFEF;
    width: 100%;
    height: 30px;
    border: 0px solid;
    border-radius: 5px;
    padding: 6px 0 8px 11px;

    font-family: Lato;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: 16px;
    text-align: left;

    ::placeholder {
        color: #949494;
    }

    :focus{
        outline: 2px solid #1877F2;
    }
`;

const DescriptionInput = styled.textarea`
    background-color: #EFEFEF;
    width: 100%;
    height: 47px;
    border: 0px solid;
    border-radius: 5px;
    padding: 6px 0 8px 11px;

    font-family: Lato;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: 16px;
    text-align: left;
    resize: none;

    ::placeholder {
        color: #949494;
    }

    :focus{
        outline: 2px solid #1877F2;
    }
`;

const PublishButton = styled.button`
    min-width: 35%;
    height: 22px;
    background-color: #1877F2;
    border: 0px solid;
    border-radius: 5px;
    align-self: end;

    font-family: Lato;
    color: #FFFFFF;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    cursor: pointer;
`;

const PostBox = styled.div`
    width: 100%;
    max-width: 615px;
    height: auto;
    max-height: 340px;
    background-color: #171717;
    padding: 15px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 14px;
    font-family: Lato;
    font-weight: 400;
`;

const LeftPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #FFFFFF;
        object-fit: cover;
        margin-bottom: 17px;
        cursor: pointer;
    }

    p {
        font-size: 9px;
        text-align: center;
        color: #FFFFFF;
        margin: 12px 0;
    }

    svg {
        cursor: pointer;
    }
`;

const RightPostContainer = styled.div`
    height: auto;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;

    h1 {
        font-weight: 400;
        font-size: 17px;
        text-align: left;
        color: #FFFFFF;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: pointer;
    }

    article {
        width: 100%;
        height: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        
        p {
            font-family: Lato;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
            text-align: left;
            color: #B7B7B7;
        }
    }
`;

const LinkPreview = styled.div`
    width: 100%;
    height: auto;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    overflow: hidden;
    display: flex;
    align-items: stretch;
    cursor: pointer;
`;

const LinkData = styled.div`
    width: 68%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 5px;

    h1 {
        width: 100%;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        font-size: 11px;
        font-weight: 400;
        line-height: 13px;
        text-align: left;
        color: #CECECE; 
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;       
    }

    p {
        font-size: 9px;
        font-weight: 400;
        line-height: 11px;
        text-align: left;
        color: #9B9595;
        white-space: normal;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }

    h2 {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 9px;
        font-weight: 400;
        line-height: 11px;
        text-align: left;
        color: #CECECE;
    }
`;

const LinkImage = styled.div`
    width: 32%;
    overflow: hidden;
    background-color: #FFFFFF;
    display: flex;

    img {
        width: 100%;
        object-fit: cover;
    }
`;