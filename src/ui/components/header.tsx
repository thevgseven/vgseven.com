import { cn } from "@/lib/utils/cn";
import { Auge } from "@/lib/utils/fonts";
import Link from "next/link";

export default function Header() {
  return (
    <header className={"flex justify-center items-center my-12 relative"}>
      <div
        className={
          "fixed bg-zinc-200 dark:bg-zinc-800 flex px-6 py-2 rounded-lg w-80"
        }
      >
        <Link href={"/"}>
          <h1 className={"text-xl tracking-tighter relative z-10"}>VGSEVEN</h1>
        </Link>
        <div className={"overflow-hidden ml-4"}>
          <div className={"animate-text-train"}>
            <h1 className={cn("w-80 tracking-wide", Auge.className)}>
              Einfi is on the way...
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };
