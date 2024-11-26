import { LucideIcon } from "lucide-react";
import React from "react";

type StatDetail = {
  title: string;
  amount: string;
  changePercentage: number;
  IconComponent: LucideIcon;
};

type StatCardProps = {
  title: string;
  primaryIcon: JSX.Element;
  details: StatDetail[];
  dateRange: string;
};

const StatCard = ({
  title,
  primaryIcon,
  details,
  dateRange
}: StatCardProps) => {
  const formatPercentage = (value: number) => {
    const signal = value >= 0 ? "+" : "";
    return `${signal}${value.toFixed()}%`;
  };

  const getChangeColour = (value: number) =>
    value >= 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="col-span-1 row-span-2 flex flex-col justify-between rounded-2xl bg-white shadow-md md:row-span-1 xl:row-span-2">
      {/* HEADER */}
      <div>
        <div className="mb-4 flex items-center justify-between px-5 pt-4">
          <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
          <span className="text-s text-gray-400">{dateRange}</span>
        </div>
        <hr />
      </div>

      {/* BODY */}
      <div className="flex h-full items-center justify-around gap-4 px-4">
        <div className="rounded-full border-[2px] border-sky-300 bg-blue-50 p-5">
          {primaryIcon}
        </div>
        <div className="flex-1">
          {details.map((detail, index) => (
            <React.Fragment key={index}>
              <div className="grid h-9 grid-cols-[45%_30%_10%_15%] items-center justify-between">
                <span className="text-gray-500">{detail.title}</span>
                <span className="flex justify-end pr-2 font-bold text-gray-800">
                  {detail.amount}
                </span>
                <div className="flex items-center justify-self-end">
                  <detail.IconComponent
                    className={`h-6 w-5 ${getChangeColour(
                      detail.changePercentage
                    )}`}
                  />
                </div>

                <span
                  className={`flex items-center justify-between pl-2 font-medium ${getChangeColour(
                    detail.changePercentage
                  )}`}
                >
                  {formatPercentage(detail.changePercentage)}
                </span>
              </div>
              {index < details.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
