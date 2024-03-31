"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";

export const submitTask = async (formData) => {
  const content = formData.get("content");
  await prisma.task.create({
    data: {
      content: content,
    },
  });
  revalidatePath("/tasks");
};

export const deleteHandler = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/tasks");
};

export const editHandler = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");

  await prisma.task.upsert({
    where: {
      id: id,
    },
    update: {
      content: content,
    },
    create: {
      content: content,
    },
  });
  revalidatePath(`/task/${id}`);
};

export const getTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getSingleTask = async (params) => {
  return await prisma.task.findUnique({
    where: {
      id: params,
    },
  });
};
