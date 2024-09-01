// ReactDOM.render(<h1>Hello!</h1>, document.getElementById("root"));

//ReactDOM.render(<ul><li>first item</li><li>second item</li></ul>, document.getElementById("root"))


// function MakeComponent(){
//     return (
//         <div>
//             <h1>My first component</h1>
//             <p>
//                 welcome to the first component
//             </p>
//         </div>
//     );
// }

// ReactDOM.render( <div><MakeComponent /></div> , document.getElementById("root"));


const nav=(<nav>
    <h1>Title</h1>
    <ul>
        <li>About</li>
        <li>pages</li>
        <li>Contact</li>
    </ul>
</nav>)

ReactDOM.render(nav, document.getElementById("root"))