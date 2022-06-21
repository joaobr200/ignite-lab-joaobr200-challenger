import { gql, useQuery } from "@apollo/client";
import { lexicographicSortSchema } from "graphql";
import { useState } from "react";

const App = () => {
  const QUERY_TEACHER = gql`
    query {
      teacher(where: { id: "cl4oir91g40080blybbrfdmfn" }) {
        name
        avatarURL
        bio
      }
    }
  `;

  const { data } = useQuery(QUERY_TEACHER);
  console.log(data);

  return (
    <div className="w-screen h-screen bg-slate-900 flex items-center justify-center flex-col">
      <img
        src={data.teacher.avatarURL}
        alt="Teacher image"
        className="rounded-full w-1/12"
      />
      <h1 className="text-2xl text-bold text-white">{data.teacher.name}</h1>
      <p className="text-md text-white">{data.teacher.bio}</p>
    </div>
  );
};

export default App;
