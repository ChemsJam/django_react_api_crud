import {useForm} from 'react-hook-form'

export function TasksFormPage() {

    const {register} = useForm()

    return (
        <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="title"
            {...register("tittle", {required: true})} 
            />
            <textarea rows="3"
            placeholder="Description"
            {...register("description", {required: true})}
            ></textarea>
            <button>Save</button>
        </form>
        </div>
    );
}