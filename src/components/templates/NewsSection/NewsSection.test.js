import React from "react";
import{screen} from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import NewsSection from "./NewsSection";
import {RenderWithThemeProviders} from "helpesr/renderWithThemeProvider";


const mock=new MockAdapter(axios);
const query =`{
                          allArticles {
                            id
                            title
                            category
                            content
                            image {
                            url  
                            }
                          }
                        }`;

mock.onPost('https://graphql.datocms.com/', {query}).reply(500);

describe('NewsSection', () => {
    afterEach(() => {
        mock.reset();
    });

    it('Wyswietla blad kiedy artekuly sie nie wczytaly', async ()=>{
        RenderWithThemeProviders(<NewsSection />);
        await screen.findByText(/Nie/)
    });

    it('Wyswietla artekuly', async ()=>{
        mock.onPost('https://graphql.datocms.com/', {query}).reply(200,{
            data:{
                allArticles:[
                    {
                        id: 1,
                        title: 'Test',
                        category: 'Test',
                        content: 'Test'
                    }
                ]
            }

            });
        RenderWithThemeProviders(<NewsSection />);
        await screen.findAllByText(/Test/)
    });
})