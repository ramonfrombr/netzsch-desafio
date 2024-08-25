import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const tasks = await db.task.findMany({
      orderBy: {
        dueDate: "desc",
      },
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.log("[TASKS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
