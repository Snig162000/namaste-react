
// Nested elements

{/* <div id="parent">
    <div id="child">
        <h1>
            Hi I am heading one
        </h1>
        <h2>Hi I am heading two</h2>
    </div>
    <div id="child2">
        <h1>
            Hi I am heading one
        </h1>
        <h2>Hi I am heading two</h2>
    </div>
</div> */}

// TODO: create the above nested component 
const parent = React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {id: "heading"}, "Hi I am heading one"), 
        React.createElement("h2", {id: "heading"}, "Hi I am heading two")]
        ),
        React.createElement("div", {id: "child2"}, 
            [React.createElement("h1", {id: "heading"}, "Hi I am heading one"), 
            React.createElement("h2", {id: "heading"}, "Hi I am heading two")]
            )
    ]);
console.log(parent);

const heading = React.createElement("h1", {id: "heading"}, "Hello world from React");
console.log(heading, "should return an object")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // this will be responsible for putting the object in the h1 tag