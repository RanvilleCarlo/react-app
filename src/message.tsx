function Message(){
    const name = 'ranville';
    if (name)
        return <h1>hello {name}</h1>;
    return  <h1>hello world</h1>;
}
export default Message;