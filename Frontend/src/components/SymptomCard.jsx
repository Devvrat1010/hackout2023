import { PiHeartbeatLight } from "react-icons/pi";
import { useState } from "react";

export default function SymptomCard() {
  const [heartbeat, setHeartbeat] = useState(Math.floor(Math.random() * 70));
  setInterval(() => {
    setHeartbeat(Math.floor(Math.random() * 100));
  }, 6000);
  return (
    <div className="bg-blue-900 w-1/4 rounded-xl p-3">
      <PiHeartbeatLight className="text-9xl text-white" size={60} />
      <h1 className="text-white text-xl">Heartbeat</h1>
      <h1 className="text-white font-bold text-3xl">{heartbeat}</h1>
    </div>
  );
}
