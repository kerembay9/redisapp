export default function CarForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());

        console.log(JSON.stringify(formData));

        const res = await fetch('/api/create', {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type' : 'application/json',
            },
            method: 'POST',
        });

        const result = await res.json();
        console.log(result);
    }

    const handleAdd = async (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());

        const data = {}
        data.key = Object.keys(formData)[0];
        data.value = Object.values(formData)[0];
        console.log(JSON.stringify(data))
        const res = await fetch(`/api/add/${formData.id}`, {
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json',
            },
            method: 'POST',
        });

        const result = await res.json();
        console.log(result);
    }

    return (
        <div className="flex flex-row">
    <div style={{padding:'10px'}}>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center align-center border-4 border-black">
        <label htmlFor="make" >
          Make
        </label>
        <input name="make" type="text"  />
        <label htmlFor="model" className="w-16">
          Model
        </label>
        <input name="model" type="text"  />
        <label htmlFor="image" >
          Image
        </label>
        <input name="image" type="text"  />
        <label htmlFor="description" >
          Description
        </label>
        <textarea name="description" type="text"  />
        <button className="btn btn-primary" type="submit">
          Create Car
        </button>
      </form>
  </div>

  <div style={{padding:'10px'}}>
      <form onSubmit={handleAdd} className="flex flex-col justify-center align-center  border-4 border-black">
        <label htmlFor="description" >
          Description
        </label>
        <input name="description" type="text"  />
        <label htmlFor="id" >
          Id
        </label>
        <input name="id" type="text"  />
        <button className="btn btn-primary" type="submit">
          Add and Update Car
        </button>
      </form>
  </div>
</div>

    )
}