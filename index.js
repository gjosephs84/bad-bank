/*  The purpose of this file is to handle the routing for our single page
application (SPA). The following component is the parent for the whole
application.
*/

function Spa() {
    const Route = ReactRouterDOM.Route;
    const Link = ReactRouterDOM.Link;
    const HashRouter = ReactRouterDOM.HashRouter;

    return (
        // Returning the router defined above
        <HashRouter>
            <div>
                <h1>Routing - Hello World</h1>
                {/* 
                
                Create the links 
                
                */}
                <Link to="/">Home</Link> --
                <Link to="/about/">About</Link> --
                <Link to="/products/">Products</Link> --
                <hr/>
                {/* 
                
                Tell the links what to load? Read up more on this. 
                
                */}
                <Route path="/" exact component={Home}/>
                <Route path="/about/" component={About}/>
                <Route path="/products/" component={Products}/>
            </div>
        </HashRouter>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
);