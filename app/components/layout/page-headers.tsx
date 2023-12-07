


export function TitleHeader({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode
}) {

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex  flex-col items-center justify-between space-y-2 md:flex-row">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <div className="flex items-center space-x-2">
          {/* <CalendarDateRangePicker /> */}
        </div>
      </div>
      {children}
    </div>
  )
}