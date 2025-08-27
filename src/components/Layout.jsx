import { Coffee } from "lucide-react";
import Modal from "./Modal";
import Authentication from "./Authentication";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";

function Layout({ children }) {
  const [showModal, setShowModal] = useState(false);

  const { GlobalUser, logout } = useAuth();

  const header = (
    <header>
      <div>
        <h1 className="text-gradient"> CAFFIEND</h1>
        <p>For Coffee Insatiates</p>
      </div>
      {GlobalUser ? (
        <button onClick={logout}>
          <p>Logout</p>
        </button>
      ) : (
        <button onClick={() => setShowModal(true)}>
          <p>Sign up free</p>
          <Coffee />
        </button>
      )}
    </header>
  );

  const footer = (
    <footer>
      <p>
        <span className="text-gradient">Caffiend</span> was made by{" "}
        <a target="_blank" href="https://github.com/iurig21/caffiend">iuri</a>
      </p>
    </footer>
  );

  function handleCloseModal(){
    setShowModal(false);
  }

  return (
    <div>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <Authentication handleCloseModal={handleCloseModal} />
        </Modal>
      )}
      {header}
      <main>{children}</main>
      {footer}
    </div>
  );
}

export default Layout;
