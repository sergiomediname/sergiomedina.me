<template>
    <section class="portfolio">
        <div class="wrapp">
            <PortfolioCard
                v-for="data in projects"
                :key="data.id"
                :data="data"
            />
        </div>
    </section>
</template>

<script setup>
import PortfolioCard from "@/components/Portfolio/PortfolioCard.vue";

const projects = [
    {
        id: "10",
        title: "Carola Monje",
        img: "/images/diseno-web-ecommerce-tienda-online-madrid.jpg",
        slug: "https://yannapa.org/",
    },
    {
        id: "10",
        title: "PATHIO",
        img: "/images/diseno-web-seo-madrid-pathio-restaurante.jpg",
        slug: "https://yannapa.org/",
    },
    {
        id: "10",
        title: "PATHIO",
        img: "/images/diseno-landing-page-madrid-seo-aplicacion.jpg",
        slug: "https://yannapa.org/",
    },
    {
        id: "10",
        title: "Elecnor",
        img: "/images/diseno-landing-page-campana-elecnor-madrid.jpg",
        slug: "https://yannapa.org/",
    },
    {
        id: "11",
        title: "YANNAPA",
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f0443c71874671.5bd3f6fac7ff6.jpg",
        slug: "https://yannapa.org/",
    },
    {
        id: "12",
        title: "House Car Wash",
        img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/6d5a0558847019.Y3JvcCwxNDAzLDEwOTgsMCww.jpg",
        slug: "",
    },
    {
        id: "13",
        title: "iSWAG",
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/d422a070191991.5b9ae530a9aa4.jpg",
        slug: "http://iswagmobile.com/",
    },
];
</script>
