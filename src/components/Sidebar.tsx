import { gql, useQuery } from "@apollo/client";
import React from "react";
import Lesson from "./Lesson";

interface QueryLessonsResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: Date;
    lessonType: "live" | "class";
  }[];
}

const Sidebar = () => {
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

  const { data } = useQuery<QueryLessonsResponse>(QUERY_LESSOS);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="text-2xl font-bold text-start border-b border-gray-500 p-6 mb-6 block">
        Cronograma de aulas
      </span>
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
    </aside>
  );
};

export default Sidebar;
