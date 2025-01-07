export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="forn-work-sans">
            {children}
        </main>
    )
}