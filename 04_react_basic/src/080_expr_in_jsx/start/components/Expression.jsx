import "../Expression.css";

const Expression = () => {
    const title = "Expression";
    const arry = ["item1", "item2", "item3"]
    const jsx = <h3>hello Jsx</h3>
    return (
        <div className={title.toLowerCase()}>   
            <h3>hello Expression {title}</h3>
            <h3>{arry}</h3>
            {jsx}
        </div>
    )
}

export default Expression;
