import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const project = [
  {
    title: "Color Palette Generator",
    description:
      "Developed a user-friendly color palette generator that can generate thousands of color palettes.",
    tech: [
      "Tailwind CSS",
      "JavaScript",
      "ReactJs",
      "Framer motion",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
    ],
    github: "https://github.com/Anky9972/colorpalette",
    live: "https://colorpalettegenerate.vercel.app/",
    img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1718995276/palette1_hz7iht.png",
  },
  {
    title: "Smart Farming",
    description:
      "Our smart farming project, built on Flask and trained with Random Forest Classifier achieving 99% accuracy, revolutionizes agriculture. Predicting crop health, pest detection, and yield estimation, it optimizes farming practices.",
    tech: ["HTML", "CSS", "Javascript", "Flask", "Jinja2", "Scikit-Learn"],
    github: "https://github.com/Anky9972/AI-ENABLED_AGRICULTURE",
    live: "",
    img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1718995357/Screenshot_2024-05-20_160151_y5gqh8.png",
  },
  {
    title: "Epic Reads",
    description:
      "It's an internship assignment to showcase skills for frontend developer. My task was to use an api to fetch all books data and show in form of cards.",
    tech: ["HTML", "CSS", "Javascript", "Tailwind CSS", "ReactJs","Framer motion"],
    github: "https://github.com/Anky9972/bookstore",
    live: "https://bookstore-rho-three.vercel.app/",
    img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1719497859/bookstore_wiiyns.png",
  },
  {
    title: "Clever Books",
    description:
      "It's an internship assignment to showcase skills for frontend.",
    tech: ["HTML", "CSS", "Javascript", "Tailwind CSS", "ReactJs","Framer motion"],
    github: "https://github.com/Anky9972/cleverbooks",
    live: "https://cleverbooks-seven.vercel.app/",
    img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1719498555/Screenshot_2024-06-27_195849_qly5rh.png",
  },
  {
    title: "Pixl Paradise",
    description:
      "It's an internship assignment to showcase skills for frontend.",
    tech: ["HTML", "CSS", "Javascript", "Tailwind CSS", "ReactJs", "NodeJs", "ExpressJs", "MongoDB"],
    github: "https://github.com/Anky9972/pixlparadise",
    live: "https://pixlparadise.vercel.app/",
    img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1720521974/Screenshot_2024-07-09_161533_kwi9gc.png",
  },
  {
    title: "TrimLink",
    description:
      "Our smart farming project, built on Flask and trained with Random Forest Classifier achieving 99% accuracy, revolutionizes agriculture. Predicting crop health, pest detection, and yield estimation, it optimizes farming practices. Integrating Gemini API for chatbot assistance and Google Translator for multilingual support enhances accessibility.",
    tech: ["HTML", "CSS", "Javascript", "Tailwind CSS", "ReactJs", "Shadcn UI", "Supabase"],
    github: "https://github.com/Anky9972/urlshortner",
    live: "https://trimlink.netlify.app/",
    img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1720522301/Screenshot_2024-07-09_162126_lpekqi.png",
  },
];

const Project = () => {
  const [readmore, setReadmore] = useState(Array(project.length).fill(false));

  const toggleReadmore = (index) => {
    setReadmore((prev) => {
      const newReadmore = [...prev];
      newReadmore[index] = !newReadmore[index];
      return newReadmore;
    });
  };

  return (
    <div className="w-full flex flex-col justify-center h-screen items-center gap-10 p-5 md:p-10 lg:p-20">
      <div className="w-full flex justify-start items-center">
        <h1 className="text-6xl font-bold">Projects</h1>
      </div>
      <Carousel className="relative w-full">
        <CarouselContent className="flex">
          {project.map((proj, index) => (
            <CarouselItem
              key={index}
              className="lg:pl-1 md:basis-3/5 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <a href={proj.live} target="_blank">
                      <img
                        src={proj.img}
                        alt={proj.title}
                        className="w-full h-48 object-cover mb-4 rounded-3xl"
                      />
                    </a>
                    <h2 className="text-xl font-semibold">{proj.title}</h2>
                    <p className="mt-2">
                      {readmore[index] ? (
                        <>{proj.description}</>
                      ) : (
                        <>{proj.description.substring(0, 90)}.....</>
                      )}
                      <span
                        className="text-sm text-blue-700 font-bold hover:cursor-pointer"
                        onClick={() => toggleReadmore(index)}
                      >
                        {!readmore[index] ? "read more" : "read less"}
                      </span>
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {proj.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-200 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-10">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline flex justify-center items-center gap-2 px-4 py-2"
                      >
                        <FaGithub className="text-2xl" />
                        GitHub
                      </a>
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:underline flex justify-center items-center gap-2 px-4 py-2 border-2 rounded-full bg-black"
                        >
                          Live
                          <FaArrowUpRightFromSquare />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute top-1/2 -right-4 md:-right-3 transform -translate-y-1/2 z-10 carousel-btn next-btn" />
        <CarouselPrevious className="absolute top-1/2 -left-4 md:-left-3 transform -translate-y-1/2 z-10 carousel-btn prev-btn" />
      </Carousel>
    </div>
  );
};

export default Project;
