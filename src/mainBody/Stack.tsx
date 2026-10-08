const Stack = () => {
  return (
    <div className="w-94 h-56.25 rounded-[22px] border border-[#edf1f5] bg-white p-7 shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
      <h2 className="text-[22px] font-bold leading-6.5 text-[#111827]">
        Your Stack
      </h2>

      <p className="mt-1 text-[17px] font-normal leading-6 text-[#94a3b8]">
        No technologies selected yet.
      </p>

      <div className="mt-4.75 flex h-22.5 w-full items-center justify-center rounded-2xl border border-dashed border-[#d9e2ee]">
        <p className="text-[16px] font-normal text-[#94a3b8]">
          Your stack is empty.
        </p>
      </div>
    </div>
  );
};

export default Stack;
