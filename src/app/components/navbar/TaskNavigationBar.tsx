import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function TaskNavigationBar() {
  const searchParams = useSearchParams();
  const tasksFilter = searchParams.get("tasks");

  return (
    <div className="mb-4">
      <ul className="flex flex-wrap gap-2 sm:gap-6 justify-center text-sm sm:text-base font-medium text-center ">
        <Link
          href="/"
          className={`${tasksFilter === null && "bg-blue"
            } inline-block px-4 sm:px-14 py-2 rounded focus:outline-none border-b hover:bg-blue border-slate-200 `}
        >
          To do
        </Link>

        <Link
          href="/?tasks=in_progress"
          className={`${tasksFilter === "in_progress" && "bg-yellow"
            } inline-block px-4 sm:px-14 py-2 rounded focus:outline-none hover:bg-yellow border-b border-slate-200 `}
        >
          In Progress
        </Link>

        <Link
          href="/?tasks=completed"
          className={`${tasksFilter === "completed" && "bg-green  "
            } inline-block px-4 sm:px-14 py-2 rounded focus:outline-none hover:bg-green border-b border-slate-200 `}
        >
          Completed
        </Link>
      </ul>
    </div>
  )
}