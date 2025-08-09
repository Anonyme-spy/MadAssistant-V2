const OptionCard = () => {
  return (
    <div className="card">
      <div className="card-inner" style={{ "--clr": "#fff" }}>
        <div className="box">
          <div className="imgBox">
            <img src="/S.png" alt="Shower Gel" />
          </div>
          <div className="icon">
            <a href="#" className="iconBox">
              <span className="material-symbols-outlined">arrow_outward</span>
            </a>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>shower gel</h3>
        <p>
          Fill out the form and the algorithm will offer the right team of
          experts
        </p>
        <ul>
          <li style={{ "--clr-tag": "#d3b19a" }} className="branding">
            branding
          </li>
          <li style={{ "--clr-tag": "#70b3b1" }} className="packaging">
            packaging
          </li>
          <li style={{ "--clr-tag": "#d05fa2" }} className="marketing">
            marketing
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OptionCard;
