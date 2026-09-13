const Navbar = () => {


    return(

        <nav className="navbar">


            <div className="logo-area">


                <div className="logo-icon">

                    DS

                </div>


                <h2>

                    <span>
                        Dev
                    </span>


                    <span className="logo-gradient">

                        Stack

                    </span>


                </h2>


            </div>




            <div className="nav-links">


                <a 
                    className="active"
                    href="#"
                >

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