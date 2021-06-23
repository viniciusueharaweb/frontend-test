import React, { useEffect, useState } from "react";
import Carousel, {
    slidesToShowPlugin,
    arrowsPlugin,
    slidesToScrollPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const MyCarousel = ({ articles, photo }) => {
    //aparentemente a library de carrossel está retornando um bug fazendo com que
    //o componente não rerenderize os avatares, então tive que forçar o rerender com esse useeffect
    const [rerender, setRerender] = useState("");
    console.log(rerender);
    useEffect(() => {
        setTimeout(function () {
            setRerender("rerender");
        }, 1500);
    });

    return (
        // carrossel responsivo com custom arrows, mas infelizmente
        // está dando 2 erros no console
        <div className="carousel">
            <Carousel
                breakpoints={{
                    itemWidth: 150,
                    640: {
                        plugins: [
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 1,
                                },
                            },
                            {
                                resolve: arrowsPlugin,
                                options: {
                                    arrowRight: (
                                        <div>
                                            <span class="material-icons right">
                                                &#xf1df;
                                            </span>
                                        </div>
                                    ),
                                    arrowLeft: (
                                        <div>
                                            <span class="material-icons left">
                                                &#xf1e6;
                                            </span>
                                        </div>
                                    ),
                                    arrowLeftDisabled: <></>,
                                    arrowRightDisabled: <></>,
                                    addArrowClickHandler: true,
                                },
                            },
                            {
                                resolve: slidesToScrollPlugin,
                                options: {
                                    numberOfSlides: 1,
                                },
                            },
                        ],
                    },
                    900: {
                        plugins: [
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 2,
                                },
                            },
                            {
                                resolve: arrowsPlugin,
                                options: {
                                    arrowRight: (
                                        <div>
                                            <span class="material-icons right">
                                                &#xf1df;
                                            </span>
                                        </div>
                                    ),
                                    arrowLeft: (
                                        <div>
                                            <span class="material-icons left">
                                                &#xf1e6;
                                            </span>
                                        </div>
                                    ),
                                    arrowLeftDisabled: <></>,
                                    arrowRightDisabled: <></>,
                                    addArrowClickHandler: true,
                                },
                            },
                            {
                                resolve: slidesToScrollPlugin,
                                options: {
                                    numberOfSlides: 1,
                                },
                            },
                        ],
                    },
                    2000: {
                        itemWidth: 365,
                        offset: 25,
                        plugins: [
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 4,
                                },
                            },
                            {
                                resolve: arrowsPlugin,
                                options: {
                                    arrowRight: (
                                        <div>
                                            <span class="material-icons right">
                                                &#xf1df;
                                            </span>
                                        </div>
                                    ),
                                    arrowLeft: (
                                        <div>
                                            <span class="material-icons left">
                                                &#xf1e6;
                                            </span>
                                        </div>
                                    ),
                                    arrowLeftDisabled: <></>,
                                    arrowRightDisabled: <></>,
                                    addArrowClickHandler: true,
                                },
                            },
                            {
                                resolve: slidesToScrollPlugin,
                                options: {
                                    numberOfSlides: 1,
                                },
                            },
                        ],
                    },
                }}
            >
                {articles.map((article) => {
                    return (
                        <article
                            className="article__wrapper"
                            tabIndex="0"
                            key={article.id}
                        >
                            {<img src={article.img} alt="" />}
                            <div className="article__content">
                                <h3>{article.title}</h3>
                                <div className="article__author">
                                    <img src={photo[article.id]} alt="" />
                                    <h4>{article.author}</h4>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default MyCarousel;
