import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";
import './loader.css'

function Loader({handleLoader}) {
  return (
    <div className="loader-container">
        <p className="cancel-btn" onClick={handleLoader}>x</p>
      <div className="loader-wrapper">
        <TailSpin color="#00BFFF" height={80} width={80} />
      </div>
    </div>
  );
}

export default Loader