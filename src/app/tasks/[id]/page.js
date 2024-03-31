import React from "react";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { editHandler, getSingleTask } from "../../../../utils/actions";

const singletask = async ({ params }) => {
  const task = await getSingleTask(params.id);
  return (
    <div>
      <Link href="/tasks" className="btn m-5 text-secondary">
        back to tasks
      </Link>

      <h1 className="text-5xl capitalize m-3">{task.content}</h1>
      <form action={editHandler}>
        <input required type="hidden" name="id" value={task.id} />
        <input
          className="bg-slate-100 px-4 py-0.5  ml-5 "
          required
          type="text"
          name="content"
          defaultValue={task.content}
        />
        <button
          className="p-1 px-2 capitalize bg-red-950 text-purple-50 text-sm"
          type="submit"
        >
          update
        </button>
      </form>
    </div>
  );
};

export default singletask;
