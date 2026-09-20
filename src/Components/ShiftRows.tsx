type Worker = {
  name: string;
  start: string;
  end: string;
  leader: boolean;
};

type ScheduleSlot = {
  time: string;
  task: "leader" | "register" | "break" | "other";
};

type ShiftResult = {
  name: string;
  schedule: ScheduleSlot[];
};

type Props = {
  workers: Worker[];
  setWorkers: React.Dispatch<
    React.SetStateAction<Worker[]>
  >;
  shiftResult: ShiftResult[];
};

const TIME_HEADERS = Array.from(
  { length: 11 },
  (_, index) => `${10 + index}:00`
);

const TASK_COLORS: Record<
  ScheduleSlot["task"],
  string
> = {
  leader: "#f472b6",
  register: "#9ca3af",
  break: "#4ade80",
  other: "#60a5fa",
};

const TASK_LABELS: Record<
  ScheduleSlot["task"],
  string
> = {
  leader: "リーダー",
  register: "レジ",
  break: "休憩",
  other: "その他",
};

const ShiftRows = ({
  workers,
  setWorkers,
  shiftResult = [],
}: Props) => {
  const updateWorker = (
    index: number,
    key: keyof Worker,
    value: string | boolean
  ) => {
    const newWorkers = [...workers];

    newWorkers[index] = {
      ...newWorkers[index],
      [key]: value,
    };

    setWorkers(newWorkers);
  };

  return (
    <>
      <tr className="bg-gray-100 text-black">
        <th className="border px-2 py-2 text-center">
          名前
        </th>

        <th className="border px-2 py-2 text-center">
          開始
        </th>

        <th className="border px-2 py-2 text-center">
          終了
        </th>

        <th className="border px-2 py-2 text-center">
          リーダー
        </th>

        {TIME_HEADERS.map((time) => (
          <th
            key={time}
            colSpan={4}
            className="border px-1 py-2 text-center text-xs font-medium"
          >
            {time}
          </th>
        ))}
      </tr>

      {workers.map((worker, index) => {
        const workerSchedule = shiftResult.find(
          (result) => result.name === worker.name
        )?.schedule;

        return (
          <tr key={index}>
            <td className="h-16 w-32 border bg-gray-200 px-2">
              <input
                type="text"
                value={worker.name}
                onChange={(e) =>
                  updateWorker(
                    index,
                    "name",
                    e.target.value
                  )
                }
                placeholder="名前"
                aria-label={`${index + 1}人目の名前`}
                className="w-full bg-white px-2 py-1 text-black placeholder:text-gray-500 focus:outline-none"
              />
            </td>

            <td className="border bg-gray-100 px-2">
              <input
                type="time"
                value={worker.start}
                onChange={(e) =>
                  updateWorker(
                    index,
                    "start",
                    e.target.value
                  )
                }
                aria-label={`${
                  worker.name || `${index + 1}人目`
                }の勤務開始時刻`}
                className="bg-white px-2 py-1 text-black"
              />
            </td>

            <td className="border bg-gray-100 px-2">
              <input
                type="time"
                value={worker.end}
                onChange={(e) =>
                  updateWorker(
                    index,
                    "end",
                    e.target.value
                  )
                }
                aria-label={`${
                  worker.name || `${index + 1}人目`
                }の勤務終了時刻`}
                className="bg-white px-2 py-1 text-black"
              />
            </td>

            <td className="whitespace-nowrap border bg-gray-100 px-2 text-black">
              <label className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={worker.leader}
                  onChange={(e) =>
                    updateWorker(
                      index,
                      "leader",
                      e.target.checked
                    )
                  }
                />
                リーダー可
              </label>
            </td>

            {workerSchedule?.map((slot) => {
              const isWorkingTime =
                worker.start <= slot.time &&
                slot.time < worker.end;

              const label = isWorkingTime
                ? TASK_LABELS[slot.task]
                : "勤務時間外";

              return (
                <td
                  key={slot.time}
                  title={`${slot.time} ${label}`}
                  aria-label={`${slot.time} ${label}`}
                  className="h-16 min-w-4 border border-white"
                  style={{
                    backgroundColor: isWorkingTime
                      ? TASK_COLORS[slot.task]
                      : "#e5e7eb",
                  }}
                />
              );
            })}
          </tr>
        );
      })}
    </>
  );
};

export default ShiftRows;