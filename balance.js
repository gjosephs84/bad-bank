function Balance() {
    const ctx = React.useContext(UserContext);
    const [status, setStatus]     = React.useState('');
    const [show, setShow]         = React.useState(() => {
        if (ctx.currentUser) {
            return true;
        } else {
            return false;
        }
    });

    function Transaction({t}) {
        return (
            <div className="transaction">{t.amount} - {t.month}/{t.day}/{t.year} - {t.hour}:{t.minutes}:{t.seconds}</div>
        )
    }
    
    
    return (
        <Card
            bgcolor="primary"
            header="Balance and History"
            status={status}
            body={show ? (
                <>
                    <h5>Welcome {ctx.currentUser.name}</h5>
                    <h6>Your current balance is:</h6>
                    <h6>${ctx.currentUser.balance}</h6>
                    Transaction History<br/>
                    {ctx.currentUser.history.map((transaction, i) => 
                        <Transaction key={i} t={transaction}/>
                    )}

                
                
                </>
            ):(
                <>
                    <h5>You must log in to proceed</h5>
                
                
                
                
                
                </>
            )}









/>
);
}