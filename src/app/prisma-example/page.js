import React from "react";
import prisma from "../../../utils/db";

const createPrisma = async () => {
  return await prisma.task.findMany();
};

export const dynamic = "force-dynamic";

const prismaexample = async () => {
  const task = await createPrisma();

  return (
    <div>
      <h1 className="capitalize text-xl">prisma example</h1>
      <div>
        {task.map((item) => {
          return (
            <h3 key={item.id} className="p-3">
              {item.content}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default prismaexample;
