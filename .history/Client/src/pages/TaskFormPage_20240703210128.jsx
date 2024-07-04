import { useForm } from 'react-hook-form'
import { createTask, deleteTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
export function TasksFormPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        const res = await createTask(data);
        navigate("/tasks");
    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="tittle"
                    {...register("tittle", { required: true })}
                />
                {errors.tittle && <span>This field is required</span>}
                <textarea rows="3"
                    placeholder="Description"
                    {...register("description", { required: true })}
                ></textarea>
                {errors.description && <span>Description is required</span>}
                <button>Save</button>
            </form>
            {params.id && (
                <button 
                    onClick={() => {
                        const accepted = window.confirm('are you sure?');
                        if (accepted) {
                            await deleteTask(params.id);
                            navigate("/tasks");
                        }
                    }}
                    >
                        Delete
                    </button>
                )}
        </div>
    );
}