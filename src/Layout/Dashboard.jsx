import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaUtensils, FaBook, FaUsers } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();

    //TODO: Load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center ">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/home'><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservations'><FaUtensils></FaUtensils>Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaBook></FaBook>Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers>All Users</NavLink></li>
                            
                        </> : <>
                            <li>
                                <NavLink to='/'><FaHome></FaHome>Home</NavLink>
                            </li>
                            <li><NavLink to='/menu'>Our Menu</NavLink></li>
                            <li><NavLink to='/order/salad'>Order Food</NavLink></li>
                        </>
                    }





                    <div className="divider"></div>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;