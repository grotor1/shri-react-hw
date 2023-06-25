import { createPortal } from "react-dom";

export default function Portal ({mountId, children}: {mountId: string, children: React.ReactNode}) {
  const mount = document.getElementById(mountId);

  return createPortal(children, mount ?? document.body)
};
