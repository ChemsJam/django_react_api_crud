export function TaskCard({ task }) {
    return (
        <div>
            <h1>{task.tittle}</h1>
            <p>{task.description}</p>
            <hr />
        </div>
    );
}
