function Details({ handleBtnClose }) {
  return (
    <div>
      <button
        id="btnClose"
        className="btnClose"
        onClick={() => handleBtnClose()}
      >
        Close
      </button>
    </div>
  );
}

export default Details;
