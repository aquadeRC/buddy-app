import React , {useState, useEffect} from "react";
import {
    TitleWrapper,
    ArticleWrapper,
    NewsSectionHeader,
    Wrapper,
    ContentWrapper
} from "components/templates/NewsSection/NewsSection.styles";
import Button from "../../atoms/Button/Button";

import axios from "axios";

const token = 'b651365ec3bf2ed1f4d7fb45d8f405';

const NewsSection = () =>
{
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.post('https://graphql.datocms.com/' ,
            {
                query: `{
                          allArticles {
                            id
                            title
                            category
                            content
                            image {
                            url  
                            }
                          }
                        }`
            },
            {
            headers: {
                authorization: `Bearer ${token}`,
            }

        })
            .then(({data: {data}})=> {
                setArticles(data.allArticles);
            })
            .catch(() =>{
                setError('Nie możemy załadować wiadomości');
            })
    },[]);

    return (
        <Wrapper>
            <NewsSectionHeader>Sekcja wiadomościz uniwersytetu</NewsSectionHeader>
            {articles.length >0  ?  articles.map(({id, title, category, content, image = null}) => (
                <ArticleWrapper key={id}>
                    <TitleWrapper>
                        <h3>{title}</h3>
                        <p>{category}</p>
                    </TitleWrapper>
                    <ContentWrapper>
                        <p>
                            {content}
                        </p>
                        {image ? <img src={image.url} alt="artykol" /> : null}
                    </ContentWrapper>
                    <Button isBig>Wiecej</Button>
                </ArticleWrapper>
            )) : <NewsSectionHeader>{error ? error : 'Ładowanie..'}</NewsSectionHeader>}
        </Wrapper>

    )
};

export default NewsSection;