import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
  title: string;
  author: string;
  note: string;
}

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) =>
    console.log(data);
  console.log(watch('title'));
  console.log(watch('author'));

  return (
    <div className="App">
      <h1 className="text-amber-800 text-xl font-bold">Bookstore</h1>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-x-2">
          <label htmlFor="title">Title</label>
          <input
            placeholder="Book title"
            defaultValue="title"
            {...register('title', { required: true })}
          />
          {errors.title && <span>This field is required</span>}
        </div>
        <div className="flex flex-row gap-x-2">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            placeholder="Author"
            {...register('author', { required: true })}
          />
          {errors.author && <span>This field is required</span>}
        </div>

        <div className="flex flex-row gap-x-2">
          <label htmlFor="note">Note</label>
          <textarea
            cols={30}
            rows={10}
            placeholder="Leave notes"
            {...register('note', { maxLength: 200 })}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
