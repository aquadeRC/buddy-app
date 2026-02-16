import React from "react";
import {
    TitleWrapper,
    ArticleWrapper,
    NewsSectionHeader,
    Wrapper,
    ContentWrapper
} from "components/templates/NewsSection/NewsSection.styles";
import Button from "../../atoms/Button/Button";


const data = [
    {
        tile:'Nowe komputery w szkole',
        category:'Wiadomości techniczne',
        content:'Ala ma kota kot ma Ale',
        image: null,
    },
    {
        tile:'Nowe komputery w szkole2',
        category:'Wiadomości techniczne',
        content:'Ala ma kota kot ma Ale',
        image: 'https://unsplash.it/500/400',
    },
    {
        tile:'Nowe komputery w szkole 3',
        category:'Wiadomości techniczne',
        content:'Ala ma kota kot ma Ale',
        image: null,
    }
]

const NewsSection = () =>
{
    return (
        <Wrapper>
            <NewsSectionHeader>Sekcja wiadomościz uniwersytetu</NewsSectionHeader>
            {data.map(({title, category, content, image = null}) => (
                <ArticleWrapper key={title}>
                    <TitleWrapper>
                        <h3>{title}</h3>
                        <p>{category}</p>
                    </TitleWrapper>
                    <ContentWrapper>
                        <p>
                            {content}
                        </p>
                        {image ? <img src={image} alt="artykol" /> : null}
                    </ContentWrapper>
                    <Button isBig>Wiecej</Button>
                </ArticleWrapper>
            ))}

        </Wrapper>

    )
};

export default NewsSection;