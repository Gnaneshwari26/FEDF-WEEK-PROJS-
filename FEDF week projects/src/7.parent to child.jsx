function Child({key1,key2}) {
    return (
        <div>
            <h2>{key1}</h2>
            <h2>{key2}</h2>
        </div>
    );
}
function Parent(){
    return (
        <div>
            <Child key1 = "hello"
              key2 = {500}/>
              </div>
    );
}
export default Parent;