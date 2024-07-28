import { Dispatch, SetStateAction } from "react";
import CloseSVG from "./icons/CloseSVG";
import ErrorSVG from "./icons/ErrorSVG";

interface ErrorAlertProps {
  setShowError: Dispatch<SetStateAction<boolean>>;
}

export default function ErrorAlert({ setShowError }: ErrorAlertProps) {
  return (
    <div className="flex flex-row alert alert-error shadow-lg">
      <div>
        <ErrorSVG />
        <span>No podemos procesar tu pedido. Por favor inténtalo mas tarde.</span>
      </div>
      <button
        onClick={() => setShowError(false)}
        className="btn btn-ghost btn-xs alertButton"
      >
        <CloseSVG />
      </button>
    </div>
  );
}
