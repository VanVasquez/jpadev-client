import { FC, ReactNode } from "react"
import { Alert } from "react-bootstrap"

type AlertProps = { 
  variant: string;
  children: ReactNode;
  show: boolean;
  setShow: () => void;
}

const Alerts: FC<AlertProps> = ({variant, children, show, setShow }) => { 
  if(show)
    return (
      <Alert key='alertMessage' variant={variant}  onClose={setShow} dismissible>
        <p>{children}</p>
      </Alert>
    )
  return <></>
}

export default Alerts