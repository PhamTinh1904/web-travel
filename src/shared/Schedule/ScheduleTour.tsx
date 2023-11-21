import React from "react";

const schedules = [
  {
    day: 1,
    places: "Tp. HCM - NARIA(Nghĩ đêm trên máy bay)",
    detail:
      "21h00: Quý khách vui lòng tập trung tại Tân Sơn Nhất làm thủ tục đáp chuyến bay VN300 (00h10 – 07h45) đi Nhật Bản. Quý khách nghỉ đêm trên máy bay.",
  },
  {
    day: 2,
    places: "Tp. HCM - NARIA(Nghĩ đêm trên máy bay)",
    detail:
      "21h00: Quý khách vui lòng tập trung tại Tân Sơn Nhất làm thủ tục đáp chuyến bay VN300 (00h10 – 07h45) đi Nhật Bản. Quý khách nghỉ đêm trên máy bay.",
  },
  {
    day: 3,
    places: "Tp. HCM - NARIA(Nghĩ đêm trên máy bay)",
    detail:
      "21h00: Quý khách vui lòng tập trung tại Tân Sơn Nhất làm thủ tục đáp chuyến bay VN300 (00h10 – 07h45) đi Nhật Bản. Quý khách nghỉ đêm trên máy bay.",
  },
];

const ScheduleTour = ({ tour }) => {
  return (
    <div className="relative before:absolute border-[1px] rounded-lg flex flex-col gap-4 p-8 mt-6 before:content[''] before:left-[-12px] before:border-l-[3px] before:border-dotted before:border-yellow-500">
      <h2 className="pb-4 border-b-[2px] ">Lịch trình {tour.title}</h2>
      {schedules.map((schedule, index) => (
        <div key={index} className="relative flex flex-col ">
          <div className="flex items-center gap-4 bg-yellow-500 rounded-lg p-2 
          relative before:absolute before:left-[-26px] before:rounded-full before:border-[1px] before:border-yellow-500 before:border-solid before:content[''] before:w-[23px] before:h-[23px] after:absolute after:left-[-20px] after:rounded-full after:content[''] after:w-[11px] after:h-[11px] after:bg-yellow-400">
            <h4 className="">Ngày {schedule.day}:</h4>
            <h4>{schedule.places}</h4>
          </div>
          <div className=" bg-gray-200 rounded-lg p-2 mt-3">Lịch trình chi tiết: {schedule.detail}</div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleTour;
