import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Cross2Icon as XMarkIcon,
  HamburgerMenuIcon as Bars3Icon,
  LockOpen1Icon,
} from "@radix-ui/react-icons";
import { Form, Link, } from "@remix-run/react";
import { FamilyDesktop, FamilyDesktopVerified, FamilyMobile, FamilyMobileVerified, StaffDesktop, StaffMobile } from "~/components/layout/sidebars";
import { Button } from "../ui/button";

const appName = "Feeding Families"

export function AppShell({
  children,
  desktopSidebar,
  mobileSidebar,
}: {
  children: React.ReactNode;
  desktopSidebar: React.ReactNode;
  mobileSidebar: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div id="AppShell" className=" h-full w-full">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                {mobileSidebar}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {desktopSidebar}
      <div className="h-full flex flex-col lg:pl-64">
        <div className="sticky top-0 z-40 flex items-center gap-x-6  px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5  lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 ">
            {appName}
          </div>
          <Form
            className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-foreground"
            method="POST"
            action="/logout"
          >
            <Button variant={"outline"} className="flex items-center decoration-2 gap-x-1 py-3 text-lg underline underline-offset-4 font-semibold leading-6 ">
              <LockOpen1Icon
                className="flex-shrink-0 h-6 w-6 "
                aria-hidden="true"
              />
              signout
            </Button>
          </Form>
        </div>
        <div className="flex-1 flex flex-row overflow-hidden " >
          {children}
        </div>
        <div className="h-12 border-t-4 border-muted-foreground bg-muted"></div>
      </div>
    </div>
  )
}

export function StaffShell({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <AppShell
      desktopSidebar={<StaffDesktop />}
      mobileSidebar={<StaffMobile />}
    >
      {children}
    </AppShell>
  )
}

export function FamilyShellVerfied({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <AppShell
      desktopSidebar={<FamilyDesktopVerified />}
      mobileSidebar={<FamilyMobileVerified />}
    >
      {children}
    </AppShell>
  )
}
export function FamilyShell({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <AppShell
      desktopSidebar={<FamilyDesktop />}
      mobileSidebar={<FamilyMobile />}
    >
      {children}
    </AppShell>
  )
}