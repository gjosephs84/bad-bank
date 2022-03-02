
// This document controls what is routed when Home is selected from the router
function Home() {
    // Here UserContext is being pulled into a local variable
    const ctx = React.useContext(UserContext); 
    return (
        <div>
            <h3>Home Component</h3>
            <p>Here we go {ctx.users}!!!!!</p>
            
        </div>
    );
}