// This document controls what is routed when About is selected from the router

function About() {
    const ctx = React.useContext(UserContext)
    return (
        <div>
            <h3>About Component</h3>
            <p>Here's some info!!!! {JSON.stringify(ctx)}</p>
        </div>
    );
}