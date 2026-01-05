import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} passHref legacyBehavior>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {children}
      </NavigationMenuLink>
    </Link>
  );
}

export function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-1">
        
        <NavigationMenuItem>
          <NavLink href="/">Home</NavLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavLink href="/about">About</NavLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavLink href="/skills">Skills</NavLink>
        </NavigationMenuItem>

        {/* Projects dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[520px] p-4">
              <div className="grid gap-3 md:grid-cols-2">
                <ProjectNavCard
                  title="All Case Studies"
                  href="/projects"
                  description="Browse everything (software, design, healthcare)."
                />
                <ProjectNavCard
                  title="Healthcare + Software"
                  href="/projects?tag=Healthcare"
                  description="Apps + tools with healthcare context and impact."
                />
                <ProjectNavCard
                  title="Product + UX Design"
                  href="/projects?tag=Design"
                  description="Design-led work: IA, flows, accessibility, UI polish."
                />
                <ProjectNavCard
                  title="Full-Stack Builds"
                  href="/projects?tag=Full-Stack"
                  description="End-to-end builds: frontend, APIs, data models."
                />
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-black/10 bg-white/60 px-4 py-3">
                <div>
                  <p className="text-sm font-medium">Want the highlights?</p>
                  <p className="text-xs text-muted-foreground">
                    Start with MCAT App + Vets at VT.
                  </p>
                </div>
                <Link
                  href="/projects"
                  className="text-sm font-medium underline underline-offset-4"
                >
                  View Projects →
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>



        <NavigationMenuItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ProjectNavCard({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-black/10 bg-white/70 p-3 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-xs text-muted-foreground">{description}</div>
      <div className="mt-3 text-xs font-medium text-black/70 group-hover:text-black">
        Explore →
      </div>
    </Link>
  );
}
