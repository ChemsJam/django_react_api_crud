export function TaskCard({ task }) {
    return (
        <div key={task.id}>
            <h1>{task.tittle}</h1>
            <p>{task.description}</p>
        </div>
    )
}
