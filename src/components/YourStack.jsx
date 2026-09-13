import StackCard from "./StackCard";


const YourStack = ({ stack, removeFromStack, removeAll }) => {


    return (

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


                    <p>
                        No technology selected yet.
                    </p>


                </div>


                :


                <div>


                    {

                        stack.map((technology)=>(

                            <StackCard

                                key={technology.id}

                                technology={technology}

                                removeFromStack={removeFromStack}

                            />

                        ))

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