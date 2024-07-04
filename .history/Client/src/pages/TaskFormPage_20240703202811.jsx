import {useForm} from 'react-hook-form'

export function TasksFormPage() {

    const {register, handleSubmit, formState:{
        errors
    }} = useForm()

    const onSubmit = handleSubmit(data => {
        console.log(data)
    })

    return (
        <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="tittle"
            {...register("tittle", {required: true})} 
            />
            {errors.tittlekl}
            <textarea rows="3"
            placeholder="Description"
            {...register("description", {required: true})}
            ></textarea>
            <button>Save</button>
        </form>
        </div>
    );
}