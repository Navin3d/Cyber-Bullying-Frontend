import { useState } from 'react';
import swal from 'sweetalert';
import { getPredictions } from "../services/prediction-service";

const Form = () => {

    const [tweet, setTweet] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setTweet(value);
        console.log(name + " - " + value);
    }

    const handlePredict = async (e) => {
        e.preventDefault();

        let data = {
            tweet
        }
        const response = await getPredictions(data);
        swal({
            title: tweet,
            text: response.data["predictions"],
            // text: "hi",
            icon: "success",
        });
    }

    return (
        <div class="container justify-content-center" style={{ width: "700px" }}>
            <form>
                <label for="formFileLg" class="form-label"><b>Enter the text</b></label>
                <input class="form-control form-control-lg" onChange={handleChange} name="tweet" type="text" value={ tweet } />
                <br />
                <button class="btn btn-lg btn-dark" onClick={handlePredict} type="submit">Predict</button>
            </form>
            <br />
        </div>
    );
}

export default Form;
