import {memo} from "react";
function C3(ozellikler) {

    console.log("c3 calisti");
    return (
        <>
            <p>Ben C3</p>
            {ozellikler.children}
        </>
    );
}

export default memo(C3);