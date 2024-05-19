import { EyePreview } from "./EyePreview";

export function CheckoutSidebar() {
  return (
    <div className="hidden md:flex flex-col gap-3 p-6 bg-gradient-to-br from-pink-600/15 to-red-600/15 rounded-[20px] md:w-[45%]">
      <span className="text-3xl md:text-5xl font-bold">
        <h1>Order</h1>
        <h1 className="bg-gradient-to-r from-pink-600 to-red-600 w-max bg-clip-text text-transparent">
          Recieved
        </h1>
      </span>
      <span>
        <p>But not really.</p>
      </span>
      <EyePreview color drag />
    </div>
  );
}
