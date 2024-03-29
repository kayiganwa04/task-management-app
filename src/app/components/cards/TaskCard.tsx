"use client";

export default function TaskCard({
  key,
  id,
  title,
  description,
  status
}: {
  key: number,
  id: string,
  title: string,
  description: string,
  status: string
}) {
  return (
    <div key={key} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
      <div className="flex w-full justify-between">
        <div className="w-[45%] justify-start items-start">
          <span className="mb-2 text-lg font-bold tracking-tight flex text-start">{title}</span>
        </div>
        <div className="w-[45%] h-6 justify-end flex">
          {status === "toDo" && <span className="text-xs flex justify-center items-center text-bold font-bold px-4 bg-blue rounded-lg">To do</span>}
          {status === "onProgress" && <span className="text-xs flex justify-center items-center text-bold font-bold px-4 bg-yellow rounded-lg">On progress</span>}
          {status === "completed" && <span className="text-xs flex justify-center items-center text-bold font-bold px-4 bg-green rounded-lg">Completed</span>}
        </div>
      </div>
      <div className="flex justify-start text-start">
        <p className="font-normal">{description}</p>
      </div>
    </div>
  );
};

