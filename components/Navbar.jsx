import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <nav className="py-5">
                <h1 className="text-3xl font-bold">NavBar</h1>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}