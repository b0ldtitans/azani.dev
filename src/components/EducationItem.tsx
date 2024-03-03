interface EducationItemProps {
  school?: string;
  degree?: string;
  date?: string;
  position: "left" | "right";
}

const EducationItem: React.FC<EducationItemProps> = ({
  school,
  degree,
  date,
  position,
}) => {
  return (
    <div className="flex justify-between h-48">
      {position === "left" && (
        <>
          <div className={`w-1/3`}>
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {school}
            </div>
            <div className="p-3 text-sm italic">{degree}</div>
            <div className="p-3 text-red-400 text-sm font-semibold">{date}</div>
          </div>
          <div className="w-1/6 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          <div className="w-1/3 "></div>
        </>
      )}
      {position === "right" && (
        <>
          <div className="flex justify-between h-48">
            <div className="w-1/3 "></div>
            <div className="w-1/6 flex justify-center">
              <div className="w-1 h-full bg-gray-600 rounded relative">
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
              </div>
            </div>
            <div className="w-1/3 ">
              <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                {school}
              </div>
              <div className="p-3 text-sm italic">{degree}</div>
              <div className="p-3 text-red-400 text-sm font-semibold">
                {date}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EducationItem;
