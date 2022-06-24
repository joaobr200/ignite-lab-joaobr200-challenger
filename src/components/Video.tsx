import { Player, Youtube, DefaultUi } from "@vime/react";

import {
  DiscordLogo,
  Lightning,
  FileArrowDown,
  CaretRight,
  Image,
} from "phosphor-react";
import { gql, useQuery } from "@apollo/client";
import Footer from "./Footer";
import VideoSkeleton from "./Shimmer/VideoSkeleton";

const QUERY_LESSONS_BY_SLUG = gql`
  query LessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      id
      title
      videoId
      description
      teacher {
        avatarURL
        bio
        name
      }
    }
  }
`;

interface QueryLessonsBySlugResponse {
  lesson: {
    id: string;
    title: string;
    videoId: string;
    description: string;
    teacher: {
      avatarURL: string;
      bio: string;
      name: string;
    };
  };
}

interface VideoProps {
  lessonSlug: string;
}

const Video = ({ lessonSlug }: VideoProps) => {
  const { data, loading } = useQuery<QueryLessonsBySlugResponse>(
    QUERY_LESSONS_BY_SLUG,
    {
      variables: {
        slug: lessonSlug,
      },
    }
  );

  if (loading) {
    return <VideoSkeleton />;
  }

  if (!data || !data.lesson) {
    return (
      <div>
        <h1>Lessos nao encontrada</h1>
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
          <div className="flex flex-col gap-4 md:items-center md:justify-center md:w-full">
            <a
              href=""
              className="flex items-center justify-center gap-3 text-sm
             text-gray-100 font-bold bg-green-500 py-4 px-6 rounded w-60 uppercase transition-colors hover:bg-green-700
              md:w-full
             "
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a
              href=""
              className="flex items-center justify-center gap-3 text-sm text-blue-500 font-bold border border-blue-500 bg-transparent py-4 px-6 rounded w-60 uppercase transition-colors hover:bg-blue-500 hover:text-gray-900 md:w-full"
            >
              <Lightning size={24} />
              ACESSE O DESAFIO
            </a>
          </div>
        </div>

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
