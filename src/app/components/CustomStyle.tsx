import React from "react";
import { PortableTextComponents } from "@portabletext/react";
import { Children } from "react";

export const components:PortableTextComponents={
    block:{
        h2:({children}:any)=><h2 className="text-gray-700 my-4 font-[700] text-[2rem]">{children}</h2>,
        h3:({children}:any)=><h3 className="text-[1.4rem] text-gray-700 my-2 font-[700]">{children}</h3>,
        
        h4:({children}:any)=><h4 className="text-[1.1rem] text-gray-700 my-2 font-[700]">{children}</h4>,
normal:({children})=><p className="text-[1.1rem] text-gray-700 leading-8 ">{children}</p>

    
    },
    

}