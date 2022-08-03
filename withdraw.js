function Withdraw(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState(''); 
    const [withdraw, setWithdraw]       = React.useState('');
    const [success,setSuccess] = React.useState();
    const [balance,setBalance] = React.useState();
    const ctx = React.useContext(UserContext);  
  
    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setStatus('deposit: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }
  
    function handleCreate(){
      console.log(withdraw);
      if (!validate(withdraw,    'withdraw'))    return;
      if (!checkNumber(withdraw,    'withdraw'))    return;
      setSuccess(`success! you have withdraw $ ${withdraw}`);
      setWithdraw(Number(withdraw) + Number(balance));
      setBalance(balance);
      
      ctx.users.push({withdraw,balance:100});
      setShow(false);
    }
  
    function clearForm(){
      
      setWithdraw('');
      
      setShow(true);
    }
  
    function checkNumber(field, label) {
      if (isNaN(field)) {
        setStatus('Alert: not a number : ' + label + 'failed, Withdraw again');
      if (field < 0) 
          setStatus('Alert: negative number: ' + label + 'failed, Withdraw again');
        return false;
      }
      return true;
    }
  
    
  
    
  
    
    return (
      <Card
        bgcolor="danger"
        header="Withdraw"
        status={status}
        body={show ? (  
                <>
                <br/>
                Balance         $100      <br/>
                Withdraw Amount<br/>
                <input type="input" className="form-control" id="withdraw" placeholder="Enter withdraw" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Withdraw</button>
                </>
              ):(
                <>
                <h5>success = {success}</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw Received</button>
                </>
              )}
      />
    );   
  }