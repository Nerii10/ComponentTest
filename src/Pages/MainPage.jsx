import AnimatedCounting from "../Components/AnimatedCounting"

export default function MainPage(){

    const MyExperience = [{
        Name: "Unreal Engine",
        Type: "Years",
        Time: 5,
        Speed: 200,
    },
    {
        Name: "Blender",
        Type: "Hours",
        Time: 700,
        Speed: 5,
    },
    {
        Name: "Unity",
        Type: "Months",
        Time: 3,
        Speed: 250,
    },
    {
        Name: "Web Development",
        Type: "Years",
        Time: 0,
        Speed: 200,
    },
    {
        Name: "Video Editor",
        Type: "Years",
        Time: 0,
        Speed: 200,
    },
    {
        Name: "Graphic/Logo Designer",
        Type: "Years",
        Time: 0,
        Speed: 200,
    },



    ]

    return(
        <>
            <h1>Main</h1>   
                <div>
                    {MyExperience.map((entry,index)=>{
                        return(
                            <>
                                <div style={{display:'flex',flexDirection:"row", alignItems:"center", gap:"5px"}}>
                                    <h2 style={{width:"fit-content", margin:0}}>{entry.Name}</h2>

                                    <p style={{width:"fit-content", margin:0}}>{entry.Time != 0 ?
                                        <>
                                        -
                                        <AnimatedCounting Number={entry.Time} Speed={entry.Speed}></AnimatedCounting> + {entry.Type}
                                        </>
                                        :""}
                                    </p>
                                </div>
                            </>
                        )
                    })}
                </div>
          
        </>
    )
}