import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask} from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function TasksFormPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if(params.id){
            await updateTask(params.id, data)
            toast.success('¡La tarea se actualizo exitosamente!', {
                position: "bottom-center",
                style: {
                    background: "#ffffff",
                    color: "#000000",
                    border: "3px solid rgb(141,182,0)"
                }
            })
        }else{
            await createTask(data);
            toast.success('¡Tarea creada exitosamente!', {
                position: "bottom-center",
                style: {
                    background: "#ffffff",
                    color: "#000000",
                    border: "3px solid rgb(141,182,0)"
                }
            })

        }
        navigate("/tasks");
    })

    useEffect(() => {
        async function loadTask() {
            if(params.id){
                const {data: {tittle, description}} = await getTask(params.id);
                setValue('tittle', tittle)
                setValue('description', description)
            }
        }
        loadTask();
    }, []);


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
                    onClick={ async () => {
                        const accepted = window.confirm('are you sure?');
                        if (accepted) {
                            await deleteTask(params.id);
                            toast.apply('¡La tarea fue eliminada exitosamente!', {
                                position: "bottom-center",
                                style: {
                                    background: "#ffffff",
                                    color: "#000000",
                                    border: "3px solid rgb(255,127,127)"
                                }
                            })
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