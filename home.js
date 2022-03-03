
// This document controls what is routed when Home is selected from the router
function Home() {
    const ctx = React.useContext(UserContext)
    return (
        <h1>Home<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}