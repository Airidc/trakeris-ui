

export default function Layout({ children }: any) {
    return (
        <div className="sidebar-layout--wrapper">
            <div className="sidebar-layout--sidebar">
                <div className="sidebar--logo">TRKeris logo</div>
                <div className="sidebar--profile-pic-container"></div>
                <h3>Vensku Airis</h3>
                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li>Portoflios</li>
                        <li>Expenses</li>
                        <li>Settings</li>
                    </ul>
                </nav>
            </div>
            <main className="sidebar-layout--page-container">{children}</main>
        </div>
    )
}