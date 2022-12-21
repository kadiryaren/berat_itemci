import { Navbar } from 'flowbite-react/lib/cjs/components/Navbar'
import { Sidebar } from 'flowbite-react/lib/cjs/components/Sidebar'
import { HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable } from 'react-icons/hi'
export default function Header() {
    return (

        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="#">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>

                <Navbar.Link href="/about">
                    About Us
                </Navbar.Link>
                <Navbar.Link href="/contact">
                    Contact Us
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}