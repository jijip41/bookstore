import React from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {};

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FormValues) => console.log(data);
  console.log(watch('title'));
  console.log(watch('author-name'));

  return (
    <div className="App">
      <h1 className="text-amber-800 text-xl font-bold">Bookstore</h1>
      <form
        action="submit"
        className="flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row gap-x-2">
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Book title"
            defaultValue="title"
            {...register('title')}
          />
        </div>
        <div className="flex flex-row gap-x-2">
          <label htmlFor="">Author</label>
          <input
            type="text"
            placeholder="Author name"
            defaultValue="author-name"
            {...register('author-name')}
          />
        </div>
        <div className="flex flex-row gap-x-2">
          <label htmlFor="">Note</label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Leave notes"
          />
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
