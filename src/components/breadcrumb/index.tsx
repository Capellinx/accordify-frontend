import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type BreadcrumbProps = {
  children: ReactNode
  className?: string
}

export function Breadcrumb({ children, className }: BreadcrumbProps) {
  return (
    <nav className={cn("flex flex-col gap-1", className)}>
      {children}
    </nav>
  )
}

type BreadcrumbTitleProps = {
  children: ReactNode
  className?: string
}

Breadcrumb.Title = function BreadcrumbTitle({ children, className }: BreadcrumbTitleProps) {
  return <h1 className={cn("text-2xl font-bold", className)}>{children}</h1>
}

type BreadcrumbListProps = {
  children: ReactNode
  className?: string
}

Breadcrumb.List = function BreadcrumbList({ children, className }: BreadcrumbListProps) {
  return (
    <div className={cn("mt-4 flex items-center gap-4 font-medium", className)}>
      {children}
    </div>
  )
}

type BreadcrumbItemProps = {
  href?: string
  children: ReactNode
  className?: string
}

Breadcrumb.Item = function BreadcrumbItem({ href, children, className }: BreadcrumbItemProps) {
  if (href) {
    return (
      <a href={href} className={cn("hover:underline", className)}>
        {children}
      </a>
    )
  }
  return <span className={cn("text-gray-500", className)}>{children}</span>
}

Breadcrumb.Separator = function BreadcrumbSeparator({ className }: { className?: string }) {
  return (
    <div className={cn("inline-block h-1 w-1 rounded-full bg-gray-500/80", className)}></div>
  )
}
