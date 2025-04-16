import React, { useEffect, useState } from 'react';

function CurrentAvailable({ schedule }) {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    const now = new Date();
    const currentDay = now.toLocaleString("en-US", { weekday: "long" });
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();

    const isAvailable = schedule.some(slot => {
      if (slot.day !== currentDay) return false;

      const [startHour, startMin] = slot.startTime.split(":").map(Number);
      const [endHour, endMin] = slot.endTime.split(":").map(Number);

      const currentTotalMinutes = currentHour * 60 + currentMinutes;
      const startTotalMinutes = startHour * 60 + startMin;
      const endTotalMinutes = endHour * 60 + endMin;

      return currentTotalMinutes >= startTotalMinutes && currentTotalMinutes <= endTotalMinutes;
    });

    setAvailable(isAvailable);
  }, [schedule]);

  return (
    <div style={{ padding: "10px", color: available ? "green" : "red" }}>
      {available ? "Doctor is available now" : " Doctor is not available"}
    </div>
  );
}

export default CurrentAvailable;
