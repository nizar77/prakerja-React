let Contact = () => {
  return (
    <>
      <section class="judul-title">Contact Me</section>
      <section id="contact" class="contact">
        <div class="contact-left">
          <div class="contact-item">
            <h3>personal data</h3>
            <p>Email: fifah2007@gmail.com</p>
            <p>Telepon/HP: 085787031020</p>
            <p> address : Tanjungmojo, Kangkung, Kendal, Jateng</p>
          </div>
        </div>

        <div className="contact-right">
          <form action="">
            <div className="mb-3 row">
              <label for="nama" className="col-sm-2 col-form-label">
                Nama
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="nama"
                  value="nama"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="telpon" className="col-sm-2 col-form-label">
                telpon
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="telpon"
                  name="telpon"
                  placeholder="telpon"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="email"
                  placeholder="email"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="pesan" className="col-sm-2 col-form-label">
                Message
              </label>
              <div className="col-sm-10">
                <textarea
                  type="text"
                  className="form-control"
                  id="pesan"
                  placeholder="pesan"
                ></textarea>
              </div>
            </div>
            <div className="mb-3 row" />
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
