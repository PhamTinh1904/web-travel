import React from "react";



const ScheduleTour = ({ schedules }) => {
  return (
    <div className="relative before:absolute border-y-[1px] flex flex-col gap-4 p-8 mt-6 before:content[''] before:left-[-12px] before:border-l-[3px] before:border-dotted before:border-Primary">
      <h2 className="pb-4 border-b-[2px] ">Lịch trình chi tiết</h2>
      {schedules.map((schedule, index) => (
        <div key={index} className="relative flex flex-col ">
          <div className="flex p-4 items-center gap-[12px] lg:gap-4 bg-[#f3f3f3] rounded-lg
          relative before:absolute before:left-[-26px] before:rounded-full before:border-[1px] before:border-Primary before:border-solid before:content[''] before:w-[23px] before:h-[23px] after:absolute after:left-[-20px] after:rounded-full after:content[''] after:w-[11px] after:h-[11px] after:bg-Primary">
            <h6 className="lg:text-2xl">Ngày {schedule.day}:</h6>
            <h6 className="lg:text-2xl text-Primary">{schedule.place}</h6>
          </div>
          <div className="lg:text-[18px] p-2 mt-3">Lịch trình chi tiết: {schedule.detail}</div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleTour;
