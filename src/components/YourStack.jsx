const YourStack = ({ stack, removeFromStack, removeAll }) => {


    return (

        <div>

            <h2>
                Your Stack
            </h2>


            <h3>
                {stack.length} Technology Selected
            </h3>


            {
                stack.length === 0 ? <p>No technology selected yet.</p> :

                <div>

                    {
                        stack.map((technology)=>(

                            <div key={technology.id}>

                                <img src={technology.icon} alt={technology.name} width="40" />


                                <h4>
                                    {technology.name}
                                </h4>


                                <p>
                                    {technology.category}
                                </p>


                                <button onClick={() => removeFromStack(technology.id)}>
                                    ✕
                                </button>


                            </div>

                        ))
                    }


                    <button onClick={removeAll}>
                        Remove All
                    </button>


                </div>

            }


        </div>

    )

}


export default YourStack;