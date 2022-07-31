import { useEffect } from "react";

function C1() {

    useEffect(() => { 
        console.log("C1 useEffekt calisti...");

        return () => {
            console.log("C1 tarayicidan kaldirildi.");
            document.body.style.background = "white";
        }
    });
    return (
        <p>
            Ben C1!
        </p>
    );
}

export default C1;