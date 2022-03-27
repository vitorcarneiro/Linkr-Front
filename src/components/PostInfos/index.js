import axios from 'axios';
import { useNavigate } from 'react-router';
import React, { useContext, useEffect, useState } from 'react';
import { IoMdTrash } from 'react-icons/io'
import UserContext from '../../Providers/UserContext';
import { PostContainer, LinkPreview, LinkData, LinkImage, UsernameWrapper, IconsWrapper } from './styles';
import { deletePost } from '../../services/api';

function PostInfos({ post }) {
    const [userInfos, setUserInfos] = useState([]);
    const navigate = useNavigate();


    console.log(post.id)
    const { token } = useContext(UserContext);

    useEffect(() => {
        const promise = axios.get(`http://localhost:5000/users`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        promise.then(response => {
            setUserInfos(response.data);
        });
        promise.catch(error => console.log("erro#1-PlansPage: ", error.response));

    }, [])

    function highlightHashtags(description) {
        const descriptionArray = description.split(' ');
        const newDescriptionArray = [];

        for (let i = 0; i < descriptionArray.length; i++) {
            if (descriptionArray[i][0] === "#") {
                const hashtag = descriptionArray[i].replace("#", "");

                newDescriptionArray.push(<a href={`/hashtags/${hashtag}`}><strong>{descriptionArray[i]}</strong> </a>);

                continue;
            }
            newDescriptionArray.push(`${descriptionArray[i]} `);
        }

        return newDescriptionArray;
    }

    function cancelPlan() {
        console.log("cancelar")
        // const promise = axios.delete(`http://localhost:5000/feed/${post.id}`, {
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // });

        const promise = deletePost(token, post.id)

        promise.then((response) => {
            console.log("deletou : post|id ", post.id)
            navigate('/');
        });

        promise.catch((error) => {
            alert("Algo deu errado, tente novamente mais tarde");
            console.log(error.response);
        });
    }


    return (
        <PostContainer>
            <UsernameWrapper>
                <h1>{post.user.name}</h1>
                <IconsWrapper>
                    {post.user.id === userInfos.id ? (<IoMdTrash onClick={() => cancelPlan()} ></IoMdTrash>) : <></>}
                </IconsWrapper>
            </UsernameWrapper>

            <article>
                <p>{highlightHashtags(post.description)}</p>
            </article>

            <a href={post.url.link} target="_blank" rel="noreferrer">
                <LinkPreview>
                    <LinkData>
                        <h1>{post.url.title}</h1>

                        <p>{post.url.description}</p>

                        <h2>{post.url.link}</h2>
                    </LinkData>

                    <LinkImage>
                        <img src={post.url.image} alt={post.url.title} />
                    </LinkImage>
                </LinkPreview>
            </a>
        </PostContainer>
    );
}

export default PostInfos;