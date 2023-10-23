import { Auge } from "@/lib/utils/fonts";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils/cn";

export default function Footer() {
  return (
    <footer className={"flex justify-center items-center mb-2 flex-col"}>
      <ThemeToggle />
      <h1 className={cn("mr-2", Auge.className)}>VGSEVEN &copy; 2023</h1>
    </footer>
  );
}

export { Footer };
