const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

const datedTransaction = (amount) => {
    const date = new Date();
    const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    const transaction = {
        amount: amount,
        month: month,
        day: day,
        year: year,
        hour: hour,
        minutes: minutes,
        seconds: seconds
    }
    return transaction
};

function Card(props){
    function classes() {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card mb-3 ' + bg + txt;
    }
    return (
        <div className={classes()} style={{maxWidth: "18rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id="createStatus">{props.status}</div>)}
            </div>
        </div>
    )
} 