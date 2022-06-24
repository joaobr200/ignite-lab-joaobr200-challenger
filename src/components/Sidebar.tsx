import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import Lesson from "./Lesson";
import LessonSkeleton from "./Shimmer/LessonSkeleton";

interface QueryLessonsResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: Date;
    lessonType: "live" | "class";
  }[];
}

const QUERY_LESSOS = gql`
  query {
    lessons(orderBy: availableAt_ASC) {
      id
      lessonType
      slug
      title
      availableAt
    }
  }
`;

const Sidebar = () => {
  const { isOpen } = useContext(MenuContext);
  const { data, loading } = useQuery<QueryLessonsResponse>(QUERY_LESSOS);

  return (
    <aside
      className={`w-[21.75rem] bg-gray-700 p-6 border-l border-gray-600 lg:absolute lg:right-0 lg:h-screen lg:pb-[100px] lg:overflow-auto lg:z-50   ${
        isOpen ? "lg:animate-fadeIn" : "lg:animate-fadeOut"
      }`}
    >
      <span className="text-2xl font-bold text-start border-b border-gray-500 py-6 mb-6 block">
        Cronograma de aulas
      </span>
      {loading ? (
        <LessonSkeleton />
      ) : (
        <>
          {data?.lessons.map((lesson) => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                type={lesson.lessonType}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
              />
            );
          })}
        </>
      )}
    </aside>
  );
};

export default Sidebar;
