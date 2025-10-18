
export default function Home({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/** Navigation */}

      {/** Main withg children pages */}
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {children}
      </main>
      {/** Footer */}
      <footer></footer>
    </div>
  );
}
