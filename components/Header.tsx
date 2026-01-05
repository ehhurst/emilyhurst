import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DesktopNav } from "@/components/nav/DesktopNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="font-semibold tracking-tight">
          Emily Hurst
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <DesktopNav />
          <Separator orientation="vertical" className="h-6" />
          <Button asChild variant="secondary" className="rounded-full">
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </Button>
          {/* <UserMenu /> */}
        </div>

        {/* Mobile (temporary) */}
        <div className="flex items-center gap-2 md:hidden">
          <Button asChild size="sm" variant="secondary" className="rounded-full">
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </Button>
          {/* <UserMenu />
          MobileMenu will go here */}
        </div>
      </div>
    </header>
  );
}
