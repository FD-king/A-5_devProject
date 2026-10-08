import type { Itechnology } from "../typesFolder/techCardType";

const TechCard = ({ techData }: { techData: Itechnology }) => {
  return (
    <div className="container mx-auto w-full max-w-95 rounded-[22px] border border-slate-200 bg-white p-7.5 shadow-sm">
      <div className="flex items-start justify-between">
        <img
          className="h-12 w-12 object-contain"
          src={techData.icon}
          alt={techData.name}
        />

        {techData.badge && (
          <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-500">
            {techData.badge}
          </span>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-[28px] font-bold text-slate-900">
          {techData.name}
        </h2>

        <p className="mt-3 text-[17px] leading-[1.6] text-slate-500">
          {techData.description}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-8 border-t border-slate-100 pt-3">
        <span className="rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-600">
          {techData.category}
        </span>

        <span className="whitespace-nowrap text-base text-slate-500">
          {techData.level}
        </span>

        <span className="flex items-center gap-1.5 text-base font-medium text-slate-700">
          <span className="text-lg text-amber-400">★</span>
          {techData.rating}
        </span>
      </div>

      <button className="mt-6 w-full rounded-[10px] bg-slate-950 px-4 py-3 text-base font-medium text-white transition hover:bg-slate-800">
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;
