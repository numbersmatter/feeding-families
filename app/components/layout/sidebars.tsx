// available side bars for user app
// home page
// request food page

import { Form, NavLink } from "@remix-run/react";
import { cn } from "~/lib/utils";

import {
  LockOpen1Icon,
  HomeIcon,
  BackpackIcon,
  CookieIcon,
  ClipboardIcon,
  BarChartIcon,
} from "@radix-ui/react-icons";


export const navigation = [
  {
    id: "home",
    name: "Home",
    to: `/`,
    icon: <HomeIcon className=" h-6 w-6  " aria-hidden="true" />,
    end: true,
  },
  {
    id: "dashboard",
    name: "Dashboard",
    to: `/dashboard`,
    icon: <BarChartIcon className=" h-6 w-6  " aria-hidden="true" />,
    end: true,
  },
  {
    id: "history",
    name: "Request History",
    to: `/food-requests`,
    icon: <BackpackIcon className=" h-6 w-6 " aria-hidden="true" />,
    end: false,
  },
  {
    id: "verify",
    name: "Verification",
    to: `/verify`,
    icon: <ClipboardIcon className=" h-6 w-6  " aria-hidden="true" />,
    end: false,
  },
];

const navIcon2 = {
  home: <HomeIcon className=" h-6 w-6 " aria-hidden="true" />,
  history: <BackpackIcon className=" h-6 w-6  " aria-hidden="true" />,
}


const appName = "Feeding Families"





export function DesktopSideBar(
) {
  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="hidden bg-primary lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 px-6">
          <div className="flex h-16 shrink-0 items-center gap-3 border-b-2">
            <CookieIcon
              className="h-8 w-auto  text-primary-foreground"
            />
            <span className="text-primary-foreground text-2xl font-black">
              {appName}
            </span>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.to}
                        end={item.end}
                        className={({ isActive, }) =>
                          cn(
                            isActive
                              ? "text-secondary-foreground bg-secondary/50 "
                              : "text-primary-foreground bg-primary/80 ",
                            "group flex gap-x-3 rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground leading-6 "
                          )
                        }
                      >
                        {

                          item.icon
                        }
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li className=" mt-auto  pb-3">
                <Form
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-primary-foreground"
                  method="POST"
                  action="/logout"
                >
                  <button
                    className="flex items-center decoration-2 gap-x-1 py-3 px-2 text-lg underline underline-offset-4 font-semibold leading-6 rounded-lg hover:bg-accent hover:text-accent-foreground  "
                    name="_action"
                    value="logout"
                  >
                    <LockOpen1Icon
                      className="flex-shrink-0 h-6 w-6 "
                      aria-hidden="true"
                    />
                    Logout
                  </button>
                </Form>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}



export function MobileSideBar() {
  return (
    <>
      <div className="flex grow flex-col bg-background  gap-y-5 overflow-y-auto px-6 pb-2">
        <div className="flex h-16 shrink-0 items-center">
          <CookieIcon
            className="h-8 w-auto"
          />
          <span className="text-foreground text-2xl font-black">
            {appName}
          </span>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.to}
                      end={item.end}
                      className={({ isActive, }) =>
                        cn(
                          isActive
                            ? "text-primary-foreground bg-primary/80"
                            : "",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 text-accent-foreground hover:bg-secondary/80"
                        )
                      }
                    >
                      {item.icon}
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
