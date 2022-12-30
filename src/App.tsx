import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
  title: string;
  authorName: string;
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
  console.log(watch('authorName'));

  return (
    <div className="App">
      <h1 className="text-amber-800 text-xl font-bold">Bookstore</h1>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-x-2">
          <label>Title</label>
          <input
            placeholder="Book title"
            defaultValue="title"
            {...register('title', { required: true })}
          />
          {errors.title && <span>This field is required</span>}
        </div>
        <div className="flex flex-row gap-x-2">
          <label htmlFor="">Author</label>
          <input
            type="text"
            placeholder="Author name"
            defaultValue="author-name"
            {...register('authorName', { required: true })}
          />
          {errors.authorName && <span>This field is required</span>}
        </div>

        <div className="flex flex-row gap-x-2">
          <label htmlFor="">Note</label>
          <textarea
            id=""
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
