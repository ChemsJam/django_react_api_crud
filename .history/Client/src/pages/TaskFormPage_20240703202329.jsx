import {useForm} from 'react-hook-form'

export function TasksFormPage() {

    const {register} = useForm()

    return (
        <div>
        <form action="">
            <input type="text" placeholder="title"
            {...register("title", ( required: true ))} 
            />
            <textarea rows="3" placeholder="Description"></textarea>
            <button>Save</button>
        </form>
        </div>
    );
}