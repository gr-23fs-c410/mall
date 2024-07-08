import { useParams } from "react-router-dom";

const ReadPage = () => {

    const {tno} = useParams()

    return (
        <div className="text-3x font-extrabold">
            Todo Read Page Component {tno}
        </div>
    )
}

export default ReadPage;