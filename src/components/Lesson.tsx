import React from "react";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

const Lesson = ({ title, slug, availableAt, type }: LessonProps) => {
  const lessonIsAvaliable = isPast(availableAt);
  const availableAtFormated = format(
    availableAt,
    "EEEE' • 'd' de ' MMMM' • 'kk'h'MM",
    {
      locale: ptBR,
    }
  );
  console.log(availableAtFormated);

  return (
    <a href="#" className="mb-8 p-4">
      <span className="text-gray-300 text-xs block mb-2">
        {availableAtFormated}
      </span>
      <div className="flex flex-col gap-4 rounded border border-gray-500 p-4">
        <header className="flex items-center justify-between">
          {lessonIsAvaliable ? (
            <span className="text-blue-500 text-xs font-medium flex items-center gap-2">
              <CheckCircle size={20} /> Contéudo Liberado
            </span>
          ) : (
            <span className="text-yellow-400 text-xs font-medium flex items-center gap-2">
              <Lock size={20} /> Em breve
            </span>
          )}
          <span className="py-[2px] px-2 text-xs text-white border border-green-400 rounded">
            {type === "class" ? "AULA PRÁTICA" : "LIVE"}
          </span>
        </header>
        <strong className="text-xs font-bold text-gray-200">{title}</strong>
      </div>
    </a>
  );
};

export default Lesson;
