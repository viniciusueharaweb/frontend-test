import React, { useEffect, useState } from "react";
import MyCarousel from "../components/Carousel";
import article1Img from "../assets/blog_image_1.svg";
import article2Img from "../assets/blog_image_2.svg";
import article3Img from "../assets/blog_image_3.svg";
import article4Img from "../assets/blog_image_4.svg";

export default function Blog() {
    // estado photo guarda (em uma array) as fotos aleatorias geradas pela randomuser API
    const [photo, setPhoto] = useState([]);

    // const articles usada para imitar uma funcionalidade dinâmica que normalmente
    // viria de uma API (provavelmente um headless CMS)
    const articles = [
        {
            id: 0,
            img: article1Img,
            title: "Quick-start guide to nuts and seeds",
            author: "Kevin Ibrahim",
        },
        {
            id: 1,
            img: article2Img,
            title: "Nutrition: Tips for Improving Your Health",
            author: "Mike Jackson",
        },
        {
            id: 2,
            img: article3Img,
            title: "The top 10 benefits of eating healthy",
            author: "Bryan McGregor",
        },
        {
            id: 3,
            img: article4Img,
            title: "What Neil says about a Healthy life",
            author: "Neil Armstrong",
        },
    ];

    useEffect(() => {
        // usado para gerar fotos aleatoriamente para os artigos da seção de blog
        let generatedPhotos = [];
        for (let i = 0; i < articles.length; i++) {
            fetch("https://randomuser.me/api/")
                .then((res) => res.json())
                .then((data) => {
                    generatedPhotos.push(data.results[0].picture.medium);
                    setPhoto(generatedPhotos);
                });
        }
    }, [articles.length]);

    return (
        <section className="blog__section">
            <h2>Read Our Blog</h2>
            <p>
                Far far away, behind the word mountains, far from the countries
                <br />
                Vokalia and Consonantia, there live the blind texts.
            </p>
            <MyCarousel articles={articles} photo={photo} />
        </section>
    );
}
