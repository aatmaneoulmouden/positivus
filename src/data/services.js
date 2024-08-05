import { advertising, analyticsTracking, contentCreation, emailMarketing, seo, socialMediaMarketing } from "../assets"

const services = [
    {
        title: {
            full: "Search Engine Optimization",
            firstPart: "Search Engine",
            secondPart: "Optimization",
        },
        image: seo,
        link: "/",
        bgColor: "bg-gray",
        highlightColor: "bg-green",
    },
    {
        title: {
            full: "Pay-per-click Advertising",
            firstPart: "Pay-per-click",
            secondPart: "Advertising",
        },
        image: advertising,
        link: "/",
        bgColor: "bg-green",
        highlightColor: "bg-gray",
    },
    {
        title: {
            full: "Social Media Marketing",
            firstPart: "Social Media",
            secondPart: "Marketing",
        },
        image: socialMediaMarketing,
        link: "/",
        bgColor: "bg-dark",
        highlightColor: "bg-gray",
    },
    {
        title: {
            full: "Email Marketing",
            firstPart: "Email",
            secondPart: "Marketing",
        },
        image: emailMarketing,
        link: "/",
        bgColor: "bg-gray",
        highlightColor: "bg-green",
    },
    {
        title: {
            full: "Content Creation",
            firstPart: "Content",
            secondPart: "Creation",
        },
        image: contentCreation,
        link: "/",
        bgColor: "bg-green",
        highlightColor: "bg-gray",
    },
    {
        title: {
            full: "Analytics and Tracking",
            firstPart: "Analytics and",
            secondPart: "Tracking",
        },
        image: analyticsTracking,
        link: "/",
        bgColor: "bg-dark",
        highlightColor: "bg-green",
    },
];

export default services;