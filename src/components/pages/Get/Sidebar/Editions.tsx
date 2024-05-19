export function EditionsSidebar() {
  return (
    <div className="flex flex-col gap-3 p-6 bg-gradient-to-br from-pink-600/15 to-red-600/15 rounded-[20px] md:w-[45%]">
      <span className="text-3xl md:text-5xl font-bold">
        <h1>Build your</h1>
        <h1 className="bg-gradient-to-r from-pink-600 to-red-600 w-max bg-clip-text text-transparent">
          Real Eyes
        </h1>
      </span>
      <span>
        <p>We believe in complete personalization,</p>
        <p className="font-semibold italic">so go off.</p>
      </span>
    </div>
  );
}
