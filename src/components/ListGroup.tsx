function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Boston',
        'Tokyo',
        'Berlin'
    ];

    let selectedIndex = 0;
        
    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item, index) => (<li className={selectedIndex === index ? 'list-group-item active':'list-group-item'} key={item} onClick={() => { selectedIndex = index; }}>{item}</li>))}
            </ul>
        </>
    );
}

export default ListGroup