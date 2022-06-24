import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

const Lesson = ({ title, slug, availableAt, type }: LessonProps) => {
  const param = useParams<{ slug: string }>();
  const lessonIsAvailable = isPast(availableAt);
  const availableAtFormated = format(
    availableAt,
    "EEEE' • 'd' de ' MMMM' • 'kk'h'MM",
    {
      locale: ptBR,
    }
  );
  const lessonSelected = param.slug === slug;

  return (
    <a
      href={lessonIsAvailable ? `/ignite/lesson/${slug}` : "#"}
      className={`mb-8 p-4 group relative ${
        !lessonIsAvailable && "cursor-not-allowed pointer-events-none"
      }`}
    >
      <span className="text-gray-300 text-xs block mb-2">
        {availableAtFormated}
      </span>
      <div
        className={`flex flex-col gap-4 rounded border  border-gray-500 p-4 transition-colors group-hover:border group-hover:border-green-300 ${
          lessonSelected && "bg-green-500"
        }`}
      >
        <header className="flex items-center justify-between">
          {lessonIsAvailable ? (
            <span
              className={`text-blue-500 text-xs font-medium flex items-center gap-2 ${
                lessonSelected && "text-white"
              }`}
            >
              <CheckCircle size={20} /> Contéudo Liberado
            </span>
          ) : (
            <span className="text-yellow-400 text-xs font-medium flex items-center gap-2">
              <Lock size={20} /> Em breve
            </span>
          )}
          <span
            className={`py-[2px] px-2 text-xs text-white border border-green-400 rounded ${
              lessonSelected && "border-white"
            }`}
          >
            {type === "class" ? "AULA PRÁTICA" : "LIVE"}
          </span>
        </header>
        <strong
          className={`text-xs font-bold ${
            lessonSelected ? "text-white" : "text-gray-200"
          } `}
        >
          {title}
        </strong>
      </div>
      {lessonSelected && (
        <div className="absolute top-[6.4rem] right-2 rotate-45 w-3 h-3 z-50 bg-green-500"></div>
      )}
    </a>
  );
};

export default Lesson;
