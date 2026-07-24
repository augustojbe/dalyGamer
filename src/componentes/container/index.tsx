import { ReactNode } from "react";

export function Container({children}: {children: ReactNode}){
    return(
        <div className="max-w-screen-x1 mx-auto px-3">
            {children}
         </div>
    )
}