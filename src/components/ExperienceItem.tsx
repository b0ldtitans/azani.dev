interface ExperienceProps {
  jobTitle?: string;
  jobDesc?: string;
  jobDate?: string;
  jobCompany?: string;
  position: "left" | "right";
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  jobTitle,
  jobDesc,
  jobDate,
  jobCompany,
  position,
}) => {
  return (
    <div className="flex justify-between -z-10 h-48">
      {position === "left" && (
        <>
          <div className={`w-1/3`}>
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {jobTitle}
            </div>
            {!jobCompany ? null : (
              <div className="p-1 rounded mt-2 bg-white text-sm font-semibold w-fit">
                {jobCompany}
              </div>
            )}
            <div className="p-3 text-sm italic">{jobDesc}</div>
            <div className="p-3 text-red-400 text-sm font-semibold">
              {jobDate}
            </div>
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
        <div className="flex justify-between h-48">
          <div className="w-1/3 "></div>
          <div className="w-1/6 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          <div className="w-1/3 ">
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {jobTitle}
            </div>
            {!jobCompany ? null : (
              <div className="p-1 rounded bg-white text-sm font-semibold w-fit mt-2">
                {jobCompany}
              </div>
            )}
            <div className="p-3 text-sm italic">{jobDesc}</div>
            <div className="p-3 text-red-400 text-sm font-semibold">
              {jobDate}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;
