const sparks = [
    { left: "4%", size: 3, duration: "7s", delay: "0s" },
    { left: "12%", size: 2, duration: "9s", delay: "1.5s" },
    { left: "21%", size: 4, duration: "6s", delay: "3s" },
    { left: "30%", size: 2, duration: "8s", delay: "0.5s" },
    { left: "38%", size: 3, duration: "10s", delay: "4s" },
    { left: "47%", size: 2, duration: "7s", delay: "2s" },
    { left: "55%", size: 3, duration: "9s", delay: "5s" },
    { left: "63%", size: 4, duration: "6s", delay: "1s" },
    { left: "71%", size: 2, duration: "8s", delay: "3.5s" },
    { left: "79%", size: 3, duration: "10s", delay: "0s" },
    { left: "87%", size: 2, duration: "7s", delay: "2.5s" },
    { left: "94%", size: 3, duration: "9s", delay: "4.5s" },
];

function Background( {children} ) {
    return(
        <>
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {sparks.map((spark, index) => (
                    <span
                        key={index}
                        className="absolute top-[-5%] rounded-full bg-(--button) shadow-[0_0_6px_2px_var(--button)] animate-spark-fall"
                        style={{
                            left: spark.left,
                            width: `${spark.size}px`,
                            height: `${spark.size}px`,
                            animationDuration: spark.duration,
                            animationDelay: spark.delay,
                        }}
                    />
                ))}
            </div>

            <div className="absolute
                            top-[-286px] left-[282px] 
                            w-[400px] h-[400px]
                            rounded-full bg-[#7B7B7F]/90 
                            blur-[120px] 
                            animate-float-light"
            />

            <div className="absolute 
                            bottom-0 top-[446px] left-[1253px] 
                            w-[451px] h-[451px]
                            rounded-full bg-[#8CC5CF]/100 
                            blur-[130px] animate-float-light" 
            />
            
            <div className="absolute 
                            bottom-0 top-[1104px] left-[-87px] 
                            w-[451px] h-[451px]
                            rounded-full bg-[#7B7B7F]/100
                            blur-[130px] animate-float-light 
                            [animation-duration:18s]" 
            />
            <div className="absolute 
                            bottom-0 top-[1867px] left-[1260px] 
                            w-[451px] h-[451px]
                            rounded-full bg-[#2F1A41]/100
                            blur-[130px] animate-float-light 
                            [animation-duration:18s]" 
            />
            <div className="absolute 
                            bottom-0 top-[1928px] left-[-406px] 
                            w-[451px] h-[451px]
                            rounded-full bg-[#A07EB9]/100
                            blur-[130px] animate-float-light 
                            [animation-duration:18s]" 
            />
            {children}
        </>
    )
}

export default Background;