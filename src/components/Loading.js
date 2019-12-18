import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";

const Loading = () => {
    const { promiseInProgress } = usePromiseTracker();
    return(
        promiseInProgress && 
        <div className="loader">
            <img className="loader__image" src="/loader.gif" />
        </div>
    )
}
export default Loading;


