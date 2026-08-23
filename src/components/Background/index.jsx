function Background( {children} ) {
    return(
        <>
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