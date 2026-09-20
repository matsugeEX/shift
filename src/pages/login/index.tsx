import { useEffect, useState } from "react";
import Day from "../../Components/Weekday";
import ShiftRows from "@/Components/ShiftRows";
import axios_instance from "@/../plugins/axios";

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

type AllocationResponse = {
  status: "OPTIMAL" | "NO_SOLUTION";
  result?: ShiftResult[];
};

const INITIAL_WORKER: Worker = {
  name: "",
  start: "10:00",
  end: "21:00",
  leader: false,
};

function ShiftTable() {
  const [shiftResult, setShiftResult] = useState<
    ShiftResult[]
  >([]);

  const [workers, setWorkers] = useState<Worker[]>([
    INITIAL_WORKER,
  ]);

  const [isCreating, setIsCreating] =
    useState(false);

  const [allocationError, setAllocationError] =
    useState("");

  const addWorker = () => {
    setWorkers((currentWorkers) => [
      ...currentWorkers,
      { ...INITIAL_WORKER },
    ]);
  };

  const deleteWorker = () => {
    setWorkers((currentWorkers) =>
      currentWorkers.length > 1
        ? currentWorkers.slice(0, -1)
        : currentWorkers
    );
  };

  useEffect(() => {
    axios_instance
      .get("/api/people/person/")
      .catch(() => {
        // 認証エラーはAxiosインターセプター側で処理する
      });
  }, []);

  const createShift = async () => {
    setIsCreating(true);
    setAllocationError("");

    try {
      const response =
        await axios_instance.post<AllocationResponse>(
          "/api/people/allocation/",
          { workers }
        );

      if (
        response.data.status === "NO_SOLUTION" ||
        !response.data.result
      ) {
        setShiftResult([]);
        setAllocationError(
          "入力された条件ではシフトを作成できませんでした。勤務時間やリーダー人数を確認してください。"
        );
        return;
      }

      setShiftResult(response.data.result);
    } catch {
      setAllocationError(
        "シフト作成中にエラーが発生しました。"
      );
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <main className="min-h-screen bg-white p-4 text-black">
      <div className="mb-4">
        <Day />

        <h1 className="mt-2 text-3xl font-bold">
          シフト表
        </h1>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={addWorker}
          className="bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
        >
          人数を追加
        </button>

        <button
          type="button"
          onClick={deleteWorker}
          disabled={workers.length <= 1}
          className="bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          人数を削除
        </button>

        <button
          type="button"
          onClick={createShift}
          disabled={isCreating}
          className="bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {isCreating
            ? "作成中..."
            : "シフト作成"}
        </button>
      </div>

      <div className="mb-3 flex flex-wrap gap-4 text-sm">
        <span className="flex items-center gap-1">
          <span className="h-4 w-4 bg-pink-400" />
          リーダー
        </span>

        <span className="flex items-center gap-1">
          <span className="h-4 w-4 bg-gray-400" />
          レジ
        </span>

        <span className="flex items-center gap-1">
          <span className="h-4 w-4 bg-green-400" />
          休憩
        </span>

        <span className="flex items-center gap-1">
          <span className="h-4 w-4 bg-blue-400" />
          その他
        </span>

        <span className="flex items-center gap-1">
          <span className="h-4 w-4 bg-gray-200" />
          勤務時間外
        </span>
      </div>

      {allocationError && (
        <p
          role="alert"
          className="mb-3 rounded border border-red-300 bg-red-50 px-3 py-2 text-red-700"
        >
          {allocationError}
        </p>
      )}

      <div className="overflow-x-auto">
        <table className="border-collapse table-fixed">
          <tbody>
            <ShiftRows
              workers={workers}
              setWorkers={setWorkers}
              shiftResult={shiftResult}
            />
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default ShiftTable;