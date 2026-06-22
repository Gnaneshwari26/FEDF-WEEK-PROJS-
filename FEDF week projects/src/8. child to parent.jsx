function Child({message}){
    return (
        <div>
            <button onClick={() => message("Hi Parent!")}>Click Me</button>
        </div>
    );
}
function Parent(){
    const message = (msg) => {
        alert("Message from Child: " + msg);
    };

    return (
        <div>
            <Child message={message} />
        </div>
    );
}
export default Parent;