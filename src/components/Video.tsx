import { Player, Youtube, DefaultUi } from "@vime/react";

import {
  DiscordLogo,
  Lightning,
  FileArrowDown,
  CaretRight,
  Image,
} from "phosphor-react";
import Footer from "./Footer";
import VideoSkeleton from "./Shimmer/VideoSkeleton";
import ButtonOutline from "./ButtonOutline";
import Button from "./Button";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string;
}

const Video = ({ lessonSlug }: VideoProps) => {
  const { data, loading } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
  });

  if (loading) {
    return <VideoSkeleton />;
  }

  if (!data || !data.lesson) {
    return (
      <div>
        <h1>Lesson nao encontrada</h1>
      </div>
    );
  }

  return (
    <section className="relative">
      <div className="bg-black">
        <div className="w-full h-full max-w-[1100px] max-h-[60vh] aspect-video m-auto">
          <Player>
            <Youtube videoId={data?.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="  w-full max-w-[1100px] p-8">
        <div className="flex items-start m-auto mt-8 gap-16 sm:flex-col">
          <div className="flex flex-col gap-4 flex-wrap  w-full max-w-[731px]">
            <h1 className="text-gray-100 text-2xl font-bold lg:text-xl md:text-lg">
              {data?.lesson.title}
            </h1>
            <p className="text-gray-200 text-base">
              {data?.lesson.description}
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-center md:justify-center">
            <Button css="w-[270px] md:w-full">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </Button>
            <ButtonOutline css="w-[270px] md:w-full">
              {" "}
              <Lightning size={24} />
              ACESSE O DESAFIO
            </ButtonOutline>
          </div>
        </div>

        {data.lesson.teacher && (
          <div className="mt-11 flex items-center gap-4">
            <img
              src={data?.lesson.teacher.avatarURL}
              alt="Teacher"
              className="rounded-full w-16 border-2 border-blue-500"
            />
            <div className="flex flex-col ">
              <h1 className="text-gray-200 font-bold text-2xl lg:text-xl md:text-lg">
                {data?.lesson.teacher.name}
              </h1>
              <p className="text-gray-300 text-sm md:text-xs">
                {data?.lesson.teacher.bio}
              </p>
            </div>
          </div>
        )}

        <div className="mt-20 grid grid-cols-2 gap-4 items-center justify-center m-auto md:grid-cols-1">
          <a
            href="#"
            className="flex items-center bg-gray-700 w-full max-w-[500px] h-[134px] gap-4  rounded transition-colors hover:bg-gray-600"
          >
            <div className="flex items-center justify-center bg-green-500 w-20 h-full p-2">
              <FileArrowDown size={40} />
            </div>
            <div className="flex flex-col gap-4  md:gap-1 ">
              <h1 className="text-gray-100 text-2xl font-bold lg:text-xl md:text-lg">
                Material complementar
              </h1>
              <p className="text-gray-200 text-sm leading-tight md:text-xs">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="flex items-center justify-center text-blue-500">
              <CaretRight size={34} />
            </div>
          </a>

          <a
            href="#"
            className="flex items-center bg-gray-700 w-full max-w-[500px] h-[134px] rounded transition-colors hover:bg-gray-600"
          >
            <div className="flex items-center justify-center bg-green-500 w-20 h-full p-2">
              <Image size={40} />
            </div>
            <div className="flex flex-col gap-4 ml-4 md:gap-1">
              <h1 className="text-gray-100 text-2xl font-bold lg:text-xl md:text-lg">
                Wallpapers exclusivos
              </h1>
              <p className="text-gray-200 text-sm md:text-xs">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina.
              </p>
            </div>
            <div className="flex items-center justify-center text-blue-500">
              <CaretRight size={34} />
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Video;
