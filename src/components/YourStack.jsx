import StackCard from "./StackCard";


const YourStack = ({ stack, removeFromStack, removeAll }) => {


    return (

        <section className="your-stack">


            <h2>
                Your Stack
            </h2>


            <h3>
                {stack.length} Technology Selected
            </h3>



            {

                stack.length === 0

                ?

                <p>
                    No technology selected yet.
                </p>


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