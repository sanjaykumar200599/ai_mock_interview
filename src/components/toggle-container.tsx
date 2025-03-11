import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useAuth } from "@clerk/clerk-react";

import { cn } from "@/lib/utils";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationRoutes } from "./navigation-routes";

export const ToggleContainer = () => {
  const { userId } = useAuth();

  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <nav className="gap-6 flex flex-col items-start">
          <NavigationRoutes isMobile/>
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
               
              >
                Take an Interview
              </NavLink>
            )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};