export default function ListCatAPI(){
    const listAPI = [
        {"path": "https://api.thecatapi.com/v1/images/{id}", "description":"Search by ID", "example":"https://api.thecatapi.com/v1/images/1f6"},
        {"path": "https://api.thecatapi.com/v1/images/search?page={page}&limit={limit}", "description":"Get list by page and limit", "example":"https://api.thecatapi.com/v1/images/search?page=5&limit=10"},

    ]
    return (
        <div className="flex flex-col">
            <div className="text-bold">List API</div>
            {listAPI.map((item) => (
                <div className="group-row" key={item.path}>
                    <div className="api-description">
                        {item.description}:
                    </div>
                    <div className="api-path">
                        {item.path}
                    </div>
                    <div className="api-example">
                        {item.example}
                    </div>
                </div>
            ))}
        </div>
    )
}