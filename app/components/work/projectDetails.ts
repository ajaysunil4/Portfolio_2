import {
    SiBootstrap,
    SiCplusplus,
    SiCss3,
    SiFramer,
    SiGithub, SiHtml5, SiJavascript, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Portfolio 2021",
        description:
            "Portfolio.",
        technologies: [SiHtml5, SiCss3, SiJavascript, SiBootstrap],
        techNames: ["HTML5", "Css3", "JavaScript", "Bootstrap"],
        techLinks: ["https://html5up.net/", "https://css3.com/", "https://www.javascript.com/", "https://getbootstrap.com/"],
        github: "https://github.com/ajaysunil4/portfolio",
        demo: "https://ajaysunil4.github.io/portfolio/",
        image: "/projects/site2.png",
        available: true,
    },
    {
        id: 1,
        name: "Tri-angle3",
        description:
            "Product display website",
        technologies: [SiHtml5, SiCss3, SiJavascript, SiBootstrap],
        techNames: ["HTML5", "Css3", "JavaScript", "Bootstrap"],
        techLinks: ["https://html5up.net/", "https://css3.com/", "https://www.javascript.com/", "https://getbootstrap.com/"],
        github: "https://github.com/nuIIpointerexception/codewars",
        demo: "https://ajaysunil4.github.io/tri-angle3/",
        image: "/projects/tri3.png",
        available: true,
    },
    {
        id: 2,
        name: "Coming Soon",
        description:
            "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        technologies: [],
        techNames: [""],
        techLinks: [""],
        github: "https://github.com/nuIIpointerexception/",
        demo: "https://github.com/nuIIpointerexception/",
        image: "/projects/construction.webp",
        available: false,
    },
];
