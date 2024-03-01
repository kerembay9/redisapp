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
        console.log('calling add')
        const data = {
            key: 'offer',
            value : { 
                'some': 'crazy',
                'fricken' : 'offer'
                    },
            id:'f0649f58-ab11-4b24-b459-4746c6d02671'
            }

        console.log(JSON.stringify(data));

        const res = await fetch('/api/add', {
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
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center align-center">
                <label htmlFor="make" className="w-fit">
            Make
                  </label>
                  <input name="make" type="text"  style={{width:"fit-content"}}/>
            
                  <label htmlFor="model" className=" w-16">
            Model
                  </label>
                  <input name="model" type="text"   style={{width:"fit-content"}} />
            
                  <label htmlFor="image" className="form-label">
            Image
                  </label>
                  <input name="image" type="text"   style={{width:"fit-content"}} />
            
                  <label htmlFor="description"   style={{width:"fit-content"}}>
            Description
                  </label>
                  <textarea name="description" type="text"   style={{width:"fit-content"}} />
            
                  <button className="btn btn-primary" type="submit">
            Create Car
                  </button>
            </form>
            <button className="btn btn-primary"  onClick={handleAdd}>
                Add something
            </button>
        </div>
    )
}