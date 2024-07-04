import {useForm} from 'react-hook-form'

export function TasksFormPage() {
    return (
        <div>
        <form action="">
            <input type="text" placeholder="title" />
            <textarea rows="3" placeholder="Description"></textarea>
            <button>Save</button>
        </form>
        </div>
    );
}