import { type NavLinkProps, NavLink as RRNavLink } from "react-router";
import { twMerge } from "tailwind-merge";

type Props = NavLinkProps;

export function NavLink({ className, children, ...props }: Props) {
  return (
    <RRNavLink
      className={
        typeof className === "function"
          ? className
          : ({ isActive }) =>
              twMerge(
                "py-3 px-5 text-gray-200 hover:text-green-100 font-semibold text-sm transition-colors",
                isActive && "text-green-100",
                className,
              )
      }
      {...props}
    >
      {children}
    </RRNavLink>
  );
}
