const YourStack = ({
    stack,
    removeStack,
    removeAll
}) => {


    return(


        <section className="your-stack">


            <div className="stack-title">


                <h2>

                    Your Stack

                </h2>


                <p>

                    {stack.length} Technology Selected

                </p>


            </div>




            {

                stack.length === 0

                ?

                <div className="empty-stack">


                    <h3>

                        No technology selected yet.

                    </h3>


                    <p>

                        Add technologies from above to build your stack.

                    </p>


                </div>


                :


                <div>


                    {

                        stack.map(

                            item => (


                                <div

                                    className="stack-card"

                                    key={item.id}

                                >


                                    <img

                                        src={item.image}

                                        alt={item.name}

                                    />



                                    <h3>

                                        {item.name}

                                    </h3>



                                    <button

                                        onClick={() => removeStack(item.id)}

                                    >

                                        Remove

                                    </button>


                                </div>


                            )

                        )

                    }



                    <button

                        className="remove-all-btn"

                        onClick={removeAll}

                    >

                        Remove All

                    </button>


                </div>


            }



        </section>


    )


}


export default YourStack;