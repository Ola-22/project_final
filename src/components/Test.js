type FormData = {
  name: string;
};
export default function Test() {
  const { register, handleSubmit } = useForm<FormData>();

  const submitForm = (data: FormData) => {
    console.log("Submission", data);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <input
            ref={register({
              required: true,
              minLength: 2
            })}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
        </div>
      </form>
    </div>
  );
}