const Navbar = () => {


    return (

        <nav className="navbar">


            <div className="mobile-menu">

                ☰

            </div>



            <div className="logo">

                Dev Stack

            </div>



            <div className="nav-links">


                <a href="#">
                    Home
                </a>


                <a href="#">
                    Technologies
                </a>


                <a href="#">
                    Projects
                </a>


                <a href="#">
                    About
                </a>


                <a href="#">
                    Contact
                </a>


            </div>



            <div className="nav-buttons">


                <button className="signin-btn">

                    Sign In

                </button>


                <button className="signup-btn">

                    Sign Up

                </button>


            </div>



        </nav>

    )

}


export default Navbar;