import React from "react";
import { submitTask, getTasks, deleteHandler } from "../../../utils/actions";
import Link from "next/link";
export const dynamic = "force-dynamic";

const page = async () => {
  const tasks = await getTasks();

  return (
    <div>
      <h1 className="text-5xl  m-4">Tasks</h1>
      <form action={submitTask}>
        <input
          type="text"
          className="bg-slate-100 px-4 py-0.5  ml-5 "
          name="content"
          required
          placeholder="type here..."
        />
        <button
          className="p-1 px-2 capitalize bg-red-950 text-purple-50 text-sm"
          type="submit"
        >
          create
        </button>
      </form>

      {tasks.length === 0 ? (
        <h2 className="m-5">No task to show...</h2>
      ) : (
        <div>
          {tasks?.map((item) => {
            return (
              <main
                key={item.id}
                className="max-w-lg flex justify-between items-center"
              >
                <div className="btn m-4">{item.content}</div>

                <div className="flex gap-3 ite">
                  <Link href={`/tasks/${item.id}`} className="mx-2 capitalize">
                    edit
                  </Link>

                  <form action={deleteHandler} className="bg-slate-200 ">
                    <input type="hidden" value={item.id} name="id" />
                    <button className="mx-2 capitalize">delete</button>
                  </form>
                </div>
              </main>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default page;
