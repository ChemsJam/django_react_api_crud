export function TaskCard({ task }) {
    return (
        <div style={{background: "black"}}
        onClick={() => {

        }}
        >
            <h1>{task.tittle}</h1>
            <p>{task.description}</p>
            <hr />
        </div>
    );
}
